import axios from "axios";
import actions from "./contacts-actions";

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
} = actions;

axios.defaults.baseURL = "https://6195170f74c1bd00176c6b65.mockapi.io/api/v1";

export const fetchContactsItem = () => async (dispatch) => {
  dispatch(getItemsRequest());
  try {
    const { data } = await axios.get("/items");
    dispatch(getItemsSuccess(data));
  } catch (error) {
    dispatch(getItemsError(error));
  }
};

export const addContactItem = (item) => async (dispatch) => {
  dispatch(addItemRequest());

  await axios
    .post("/items", item)
    .then(({ data }) => dispatch(addItemSuccess(data)))
    .catch((error) => dispatch(addItemError(error)));
};

export const deleteContactsItem = (id) => (dispatch) => {
  dispatch(deleteItemRequest());

  axios
    .delete(`/items/${id}`)
    .then(() => dispatch(deleteItemSuccess(id)))
    .catch((error) => dispatch(deleteItemError(error)));
};
