import {
    GET_POSTS_FACEBOOK,
    SET_URL_IMG_POST,
    SET_CONTENT_POST,
    SET_NAME_POST,
    SET_POST,
    SET_SELECTED_POSTS,
    OPEN_MODIFY_POPUP,
    CLOSE_MODIFY_POPUP,
    SET_CREATE_BUTTON,
    SET_UPDATE_BUTTON,
    SET_ID_POST_CURRENT,
} from '../../@jumbo/constants/ActionTypes';
import { API } from 'services/apiResource';
import apiServices from 'services/apiServices';
import { notificationSuccess } from './Notification';
import { fetchError, fetchStart, fetchSuccess } from '../../redux/actions/Common';

import handleError from 'helpers/handleApiError';

export const getPosts = () => {
    return async dispatch => {
        try {
            dispatch(fetchStart());
            let { rows, error } = await apiServices.get(API.POSTS.getPosts);
            if (rows) {
                dispatch(fetchSuccess());
                dispatch({
                    type: GET_POSTS_FACEBOOK,
                    payload: rows,
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

export const createPost = data => {
    return async dispatch => {
        try {
            dispatch(fetchStart());
            let { msg, error } = await apiServices.post(API.POSTS.createPosts, data);
            if (msg) {
                dispatch(fetchSuccess());
                dispatch(getPosts());
                dispatch(setPost({}));
                dispatch(notificationSuccess('Tạo thành công bài viết !'));
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

export const updatePost = (data, id) => {
    return async dispatch => {
        try {
            dispatch(fetchStart());
            let { msg, error } = await apiServices.put(`${API.POSTS.updatePosts}/${id}`, data);
            if (msg) {
                dispatch(fetchSuccess());
                dispatch(getPosts());
                dispatch(setPost({}));
                dispatch(closeModifyPopup());
                dispatch(setCreateButton());
                dispatch(notificationSuccess('Cập nhập thành công bài viết !'));
            } else {
                dispatch(setPost({}));
                dispatch(setCreateButton());
                let err = handleError(error);
                dispatch(fetchError(err));
            }
        } catch (error) {
            dispatch(setPost({}));
            dispatch(setCreateButton());
            let err = handleError(error);
            dispatch(fetchError(err));
        }
    };
};

export const deletePosts = data => {
    return async dispatch => {
        try {
            dispatch(fetchStart());
            let { msg, error } = await apiServices.delete(`${API.POSTS.deletePosts}`, data);
            if (msg) {
                dispatch(fetchSuccess());
                dispatch(getPosts());
                dispatch(notificationSuccess('Xóa thành công bài viết!'));
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

export const setNamePost = data => {
    return { type: SET_NAME_POST, payload: data };
};
export const setContentPost = data => {
    return { type: SET_CONTENT_POST, payload: data };
};
export const setUrlImgPost = data => {
    return { type: SET_URL_IMG_POST, payload: data };
};
export const setPost = data => {
    return { type: SET_POST, payload: data };
};
export const setSelectedPosts = data => {
    return { type: SET_SELECTED_POSTS, payload: data };
};
export const closeModifyPopup = () => {
    return { type: CLOSE_MODIFY_POPUP };
};
export const openModifyPopup = () => {
    return { type: OPEN_MODIFY_POPUP };
};
export const setCreateButton = () => {
    return { type: SET_CREATE_BUTTON };
};
export const setUpdateButton = () => {
    return { type: SET_UPDATE_BUTTON };
};
export const setCurrentIdPost = data => {
    return { type: SET_ID_POST_CURRENT, payload: data };
};
