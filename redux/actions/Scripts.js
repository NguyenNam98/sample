import { GET_SCRIPTS } from "../../@jumbo/constants/ActionTypes";
import { API } from "services/apiResource";
import apiServices from "services/apiServices";
import {  notificationSuccess } from "./Notification";
import {
  fetchError,
  fetchStart,
  fetchSuccess
} from "../../redux/actions/Common";

import handleError from "helpers/handleApiError";
import { setAllAction } from "./ActionFacebook";
import { changeCreateButton } from "./ChangeElementScript";

export const getScripts = () => {
  return async dispatch => {
    try {
      dispatch(fetchStart());
      let { rows, error } = await apiServices.get(API.SCRIPTS.getScripts);
      if (rows) {
        dispatch(fetchSuccess());
        dispatch({
          type: GET_SCRIPTS,
          payload: rows
        });
      } else {
        dispatch(fetchError(error));
      }
    } catch (error) {
      let err = handleError(error);
      dispatch(fetchError(err));
    }
  };
};

export const createScript = data => {
  return async dispatch => {
    try {
      dispatch(fetchStart());
      let { msg, error } = await apiServices.post(
        API.SCRIPTS.createScript,
        data
      );
      if (msg) {
        dispatch(fetchSuccess());
        dispatch(getScripts());
        dispatch(setAllAction([]))
        dispatch(notificationSuccess("Tạo thành công script !"));
      } else {
        let err = handleError(error);
        dispatch(fetchError(err));
      }
    } catch (error) {
      let err = handleError(error);
      dispatch(fetchError(err));
    }
  };
};

export const updateScript = (data, id) => {
  return async dispatch => {
    try {
      dispatch(fetchStart());
      let { msg, error } = await apiServices.put(
        `${API.SCRIPTS.updateScript}/${id}`,
        data
      );
      if (msg) {
        dispatch(fetchSuccess());
        dispatch(getScripts());
        dispatch(setAllAction([]))
        dispatch(changeCreateButton())
        dispatch(notificationSuccess("Cập nhập thành công script !"));
      } else {
        dispatch(setAllAction([]))
        dispatch(changeCreateButton())
        let err = handleError(error);
        dispatch(fetchError(err));
      }
    } catch (error) {
      dispatch(setAllAction([]))
      dispatch(changeCreateButton())
      let err = handleError(error);
      dispatch(fetchError(err));
    }
  };
};

export const deleteScript = data => {
  return async dispatch => {
    try {
      dispatch(fetchStart());
      let { msg, error } = await apiServices.delete(
        `${API.SCRIPTS.deleteScript}`,
        data
      );
      if (msg) {
        dispatch(fetchSuccess());
        dispatch(getScripts());
        dispatch(notificationSuccess("Xóa thành công script!"));
      } else {
        let err = handleError(error);
        dispatch(fetchError(err));
      }
    } catch (error) {
      let err = handleError(error);
      dispatch(fetchError(err));
    }
  };
};
