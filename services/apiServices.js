import Axios from "axios";
let baseUrl =
  process.env.URL_BACKEND || `http://api-desktop.seeding.live/api/v1`;

class APIServices {
  get = (path, params) => {
    return new Promise(async (resolve, reject) => {
      try {
        let headersConfig = {
          "Content-Type": "application/json; charset=utf-8"
        };
        const token = localStorage.getItem("token");
        if (token) {
          headersConfig = {
            ...headersConfig,
            Authorization: `Bearer ${token}`
          };
        }
        let res = await Axios.get(baseUrl + path, {
          headers: headersConfig,
          params: params
        });
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      } catch (error) {
        reject(error);
      }
    });
  };
  post = (path, body) => {
    return new Promise(async (resolve, reject) => {
      try {
        let headersConfig = {
          "Content-Type": "application/json; charset=utf-8"
        };
        const token = localStorage.getItem("token");
        if (token) {
          headersConfig = {
            ...headersConfig,
            Authorization: `Bearer ${token}`
          };
        }
        let res = await Axios.post(baseUrl + path, body, {
          headers: headersConfig
        });
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      } catch (error) {
        reject(error);
      }
    });
  };
  delete = (path, body) => {
    return new Promise(async (resolve, reject) => {
      try {
        let headersConfig = {
          "Content-Type": "application/json; charset=utf-8"
        };
        const token = localStorage.getItem("token");
        if (token) {
          headersConfig = {
            ...headersConfig,
            Authorization: `Bearer ${token}`
          };
        }

        let res = await Axios.delete(baseUrl + path, {
          data: body,
          headers: headersConfig
        });
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      } catch (error) {
        reject(error);
      }
    });
  };
  put = (path, body) => {
    return new Promise(async (resolve, reject) => {
      try {
        let headersConfig = {
          "Content-Type": "application/json; charset=utf-8"
        };
        const token = localStorage.getItem("token");
        if (token) {
          headersConfig = {
            ...headersConfig,
            Authorization: `Bearer ${token}`
          };
        }
        let res = await Axios.put(baseUrl + path, body, {
          headers: headersConfig
        });
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      } catch (error) {
        reject(error);
      }
    });
  };
  getWithHeaders = (url, headers, params) => {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await Axios.get(url, { headers: headers, params: params });
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      } catch (error) {
        reject(error);
      }
    });
  };
}

export default new APIServices();
