import { createAction } from "@reduxjs/toolkit";

const getItemsRequest = createAction("contacts/getItemsRequest");
const getItemsSuccess = createAction("contacts/getItemsSuccess");
const getItemsError = createAction("contacts/getItemsError");

const addItemRequest = createAction("contacts/addItemRequest");
const addItemSuccess = createAction("contacts/addItemSuccess");
const addItemError = createAction("contacts/addItemError");

const deleteItemRequest = createAction("contacts/deleteItemRequest");
const deleteItemSuccess = createAction("contacts/deleteItemSuccess");
const deleteItemError = createAction("contacts/deleteItemError");

const changeFilter = createAction("contacts/changeFilter");

const actions = {
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
};

export default actions;
