import {
    GET_POSTS_FACEBOOK,
    SET_NAME_POST,
    SET_CONTENT_POST,
    SET_URL_IMG_POST,
    SET_POST,
    SET_SELECTED_POSTS,
    OPEN_MODIFY_POPUP,
    CLOSE_MODIFY_POPUP,
    SET_UPDATE_BUTTON,
    SET_CREATE_BUTTON,
    SET_ID_POST_CURRENT,
} from '../../@jumbo/constants/ActionTypes';

const INIT_STATE = {
    dataPosts: [],
    namePost: '',
    contentPost: '',
    urlImg: [],
    selectedPosts: [],
    isOpenPopUpModify: false,
    isUpdateButton: false,
    idCurrentPost: '',
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_POSTS_FACEBOOK: {
            return {
                ...state,
                dataPosts: action.payload,
            };
        }
        case SET_POST: {
            return {
                ...state,
                namePost: action.payload.namePost ? action.payload.namePost : '',
                contentPost: action.payload.contentPost ? action.payload.contentPost : '',
                urlImg: action.payload.urlImg ? action.payload.urlImg : [],
            };
        }
        case SET_NAME_POST: {
            return {
                ...state,
                namePost: action.payload,
            };
        }
        case SET_CONTENT_POST: {
            return {
                ...state,
                contentPost: action.payload,
            };
        }
        case SET_URL_IMG_POST: {
            return {
                ...state,
                urlImg: action.payload,
            };
        }
        case SET_SELECTED_POSTS: {
            return {
                ...state,
                selectedPosts: action.payload,
            };
        }
        case CLOSE_MODIFY_POPUP: {
            return {
                ...state,
                isOpenPopUpModify: false,
            };
        }
        case OPEN_MODIFY_POPUP: {
            return {
                ...state,
                isOpenPopUpModify: true,
            };
        }
        case SET_UPDATE_BUTTON: {
            return {
                ...state,
                isUpdateButton: true,
            };
        }
        case SET_CREATE_BUTTON: {
            return {
                ...state,
                isUpdateButton: false,
            };
        }
        case SET_ID_POST_CURRENT: {
            return {
                ...state,
                idCurrentPost: action.payload,
            };
        }
        default:
            return state;
    }
};
