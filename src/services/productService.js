// import axios from "axios";

import axios from "axios";

export default class ProductService {
    getProducts() {
      return axios.get("http://localhost:22839/api/Products/Getlist?PageSize=10")

    }

    getByProductId(productId) {
      return axios.get("http://localhost:22839/api/Products/GetById?id=" + productId)
  }
  }

