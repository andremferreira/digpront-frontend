import axios from "axios";

export default class Api {
  static fetch(url, values) {
    return axios.post(`http://50.30.43.155:3000/${url}`, values);
  }
  static fetchGet(url) {
    return axios.get(`http://50.30.43.155:3000/${url}`);
  }
}
