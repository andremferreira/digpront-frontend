import axios from "axios";

export default class Api {
  static post(url, values) {
    return axios.post(`http://50.30.43.155:3000/${url}`, values);
  }

  static fetchGet(url) {
    return axios.get(`http://50.30.43.155:3000/${url}`);
  }

  static clearItem(key) {
    return localStorage.removeItem(key);
  }

  static getStorageItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static storageItem(key, data) {
    return localStorage.setItem(key, JSON.stringify(data));
  }
}
