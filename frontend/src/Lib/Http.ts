import axios from "axios";

export class Http {
  static instance = new Http();
  constructor() {}
  async post(url: string, body: Object, auth: Object) {
    try {
      let response = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        },
        ...auth,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
