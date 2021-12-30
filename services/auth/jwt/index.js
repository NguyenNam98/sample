import { fetchError, fetchStart, fetchSuccess } from "../../../redux/actions";
import {
  setAuthUser,
  setForgetPassMailSent,
  updateLoadUser
} from "../../../redux/actions/Auth";
import React from "react";
import axios from "../apiConfig";
import { history } from "redux/store";
import { API } from "../../apiResource";
import { getAccounts } from "redux/actions/Accounts";
const JWTAuth = {
  onRegister: ({ name, phone, password }) => {
    return dispatch => {
      dispatch(fetchStart());
      axios
        .post(API.AUTH.register, {
          phone: phone,
          password: password,
          name: name
        })
        .then(({ data }) => {
          if (data.msg === "Đăng kí thành công.") {
            dispatch(fetchSuccess("Đăng ký thành công"));
            history.push("/signin");
          } else {
            dispatch(fetchError(data.msg));
          }
        })
        .catch(function(error) {
          if (error.response.data.errors) {
            let errors = error.response.data.errors;
            let messageError = errors[Object.keys(errors)[0]];
            return dispatch(fetchError(messageError));
          }
          if (error.response.data) {
            const { msg } = error.response.data;
            return dispatch(fetchError(msg));
          }
          dispatch(fetchError(error.message));
        });
    };
  },

  onLogin: ({ phone, password }) => {
    return async dispatch => {
      try {
        dispatch(fetchStart());
        let data = await axios.post(API.AUTH.login, {
          phone: phone,
          password: password,
          mac_address: "mac_address_1"
        });
        if (data.status === 200) {
          localStorage.setItem("token", data.data.token);
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + data.data.token;
          dispatch(fetchSuccess());
          dispatch(JWTAuth.getAuthUser(true, data.data.token));
        } else {
          dispatch(fetchError(data.data.error));
        }
      } catch (error) {
        const status = error.response.status;
        if (status === 403) {
          return dispatch(fetchError("Sai số điện thoại hoặc mật khẩu"));
        }
        dispatch(fetchError(error.message));
      }
    };
  },
  onLogout: () => {
    return dispatch => {
      dispatch(fetchStart());
      axios
        .get(API.AUTH.logout)
        .then(({ data }) => {
          if (data.msg) {
            dispatch(fetchSuccess("Đăng xuất thành công"));
            dispatch(setAuthUser(null));
            localStorage.clear();
            window.location.href = "/";
          } else {
            dispatch(fetchError(data.error));
          }
        })
        .catch(function(error) {
          dispatch(fetchError(error.message));
        });
    };
  },

  getAuthUser: (loaded = false, token) => {
    return async dispatch => {
      if (!token) {
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      }
      dispatch(fetchStart());
      dispatch(updateLoadUser(loaded));
      axios
        .get(API.USER.checkMe)
        .then(({ data }) => {
          if (data) {
            dispatch(fetchSuccess());
            dispatch(setAuthUser(data));
            history.push("/");
          } else {
            dispatch(updateLoadUser(true));
          }
        })
        .catch(function(error) {
          dispatch(updateLoadUser(true));
        });
    };
  },

  onForgotPassword: () => {
    return dispatch => {
      dispatch(fetchStart());

      setTimeout(() => {
        dispatch(setForgetPassMailSent(true));
        dispatch(fetchSuccess());
      }, 300);
    };
  },
  getSocialMediaIcons: () => {
    return <React.Fragment> </React.Fragment>;
  }
};

export default JWTAuth;
