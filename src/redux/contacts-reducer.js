// import actionTypes from "./actions-type";
import actions from "./contacts-actions";
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
const {
  getItemsRequest,
  getItemsSuccess,
  getItemsError,
  addItemRequest,
  addItemSuccess,
  addItemError,
  deleteItemRequest,
  deleteItemSuccess,
  deleteItemError,
  changeFilter,
} = actions;

export const items = createReducer([], {
  [getItemsSuccess]: (_, { payload }) => payload,

  [addItemSuccess]: (state, { payload }) => [...state, payload],

  [deleteItemSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const loadingForList = createReducer(false, {
  [getItemsRequest]: () => true,
  [getItemsSuccess]: () => false,
  [getItemsError]: () => false,
});

const loadingForForm = createReducer(false, {
  [addItemRequest]: () => true,
  [addItemSuccess]: () => false,
  [addItemError]: () => false,
});

const loadingForDelete = createReducer(false, {
  [deleteItemRequest]: () => true,
  [deleteItemSuccess]: () => false,
  [deleteItemError]: () => false,
});

const error = createReducer(null, {});
export default combineReducers({
  items,
  filter,
  loadingForList,
  loadingForForm,
  loadingForDelete,
  error,
});
