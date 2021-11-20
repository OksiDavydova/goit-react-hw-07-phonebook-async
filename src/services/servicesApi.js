import axios from "axios";

const API_BASE_URL = "https://6195170f74c1bd00176c6b65.mockapi.io/api/v1/items";

class itemsService {
  async getItems() {
    return await axios.get(API_BASE_URL).then((response) => response.data);
  }
  async createItem(item) {
    return await axios.post(API_BASE_URL, item);
  }
  deleteItem(id) {
    return axios.delete(API_BASE_URL + "/" + id);
  }
}

export default new itemsService();
