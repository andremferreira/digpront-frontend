import axios from "axios";

export default class Api {
  static post(url, values, token) {
    return axios.post(`http://50.30.43.155:3000/${url}`, values, {
      headers: {
        Authorization: `${token}`,
       //"Content-Type": "application/json"
      }
    });
  }

  static fetchGet(url, values) {
    return axios.get(`http://50.30.43.155:3000/${url}${values}`);
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
