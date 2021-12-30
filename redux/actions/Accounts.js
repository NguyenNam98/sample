import { API } from 'services/apiResource';
import apiServices from 'services/apiServices';
import {
    GET_ACCOUNTS,
    CLOSE_BROWER_SUCCESS,
    CLOSING_BROWER,
    OPENING_BROWER,
    OPEN_BROWER_SUCCESS,
    UPDATE_ACCOUNTS,
    SELECTED_ACCOUNT,
    ADD_LIST_ACCOUNT,
    REMOVE_LIST_ACCOUNT,
    SELECTED_DEFAULT,
    SET_ACCOUNTS_FOR_ACTION,
    REMOVE_ACCOUNT_FOR_ACTION
} from '@jumbo/constants/ActionTypes';
import { fetchError, fetchStart, fetchSuccess } from 'redux/actions/Common';
import { EventName } from '@jumbo/constants/electron/EventName';
import delay from 'helpers/delay';
import {  notificationSuccess } from './Notification';
import handleError from 'helpers/handleApiError';
import { setClosePopupInfoAccount } from './infoAccountPopup';

const { ipcRenderer } = window.require('electron');

export const getAccounts = () => {
    return async dispatch => {
        try {
            dispatch(fetchStart());
            let { rows, error } = await apiServices.get(API.ACCOUNTS.showAll);
            if (rows) {
                dispatch(fetchSuccess());
                dispatch({
                    type: GET_ACCOUNTS,
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
export const updateAccount = data => {
    return async dispatch => {
        try {
            dispatch(fetchStart());
            let { msg, error } = await apiServices.put(`${API.ACCOUNTS.updateAccount}/${data._id}`, data);
            if (msg) {
                dispatch(fetchSuccess('Cập nhập tài khoản thành công !'));
                dispatch({
                    type: UPDATE_ACCOUNTS,
                    payload: data,
                });
                dispatch(setClosePopupInfoAccount())
            } else {
                dispatch(fetchError(error));
            }
        } catch (error) {
            dispatch(fetchError(error));
        }
    };
};
export const openingBrowserWithAction = (dataAccount, action, script) => {
    const { proxy } = dataAccount;
    if (proxy) {
        proxy.username = 'proxyus';
        proxy.password = 'Scp#1234$';
    }
    return async dispatch => {
        if (dataAccount instanceof Array) {
            for (let i = 0; i < dataAccount.length; i++) {
                let element = dataAccount[i];
                element.i = i;
                if (element.state === 2) {
                    return dispatch(fetchError(`${element.email ? element.email : element.uuid} browser opened`));
                }
                dispatch({
                    type: OPENING_BROWER,
                    payload: { _id: element._id, state: 1 },
                });
                ipcRenderer.send(EventName.SendOpenBrowser, {
                    ...element,
                    actionType: action,
                    script,
                });
                await delay(4000);
            }
        } else {
            if (dataAccount.state === 2) {
                return dispatch(fetchError(`${dataAccount.email ? dataAccount.email : dataAccount.uuid} browser opened`));
            }
            dispatch({
                type: OPENING_BROWER,
                payload: { _id: dataAccount._id, state: 1 },
            });
            ipcRenderer.send(EventName.SendOpenBrowser, {
                ...dataAccount,
                actionType: action,
                script,
            });
        }
    };
};
export const listenOpenBrowser = () => {
    return dispatch => {
        ipcRenderer.on(EventName.GetOpenBrowser, (event, { _id }) => {
            dispatch({ type: OPEN_BROWER_SUCCESS, payload: { _id, state: 2 } });
        });
    };
};
export const listenUpdateAccounts = () => {
    return dispatch => {
        ipcRenderer.on(EventName.UpdateStatusAccount, async (event, arg) => {
            let { msg, error } = await apiServices.put(`${API.ACCOUNTS.updateAccount}/${arg._id}`, arg);
            if (msg) {
                dispatch({
                    type: UPDATE_ACCOUNTS,
                    payload: arg,
                });
            } else {
                dispatch(fetchError(error));
            }
        });
    };
};

export const closedBrowser = ({ _id }) => {
    return async dispatch => {
        dispatch({ type: CLOSING_BROWER, payload: { _id, state: 0 } });
        ipcRenderer.send(`${EventName.CloseBrowser}:${_id}`, { _id });
    };
};
export const listenCloseBrowser = () => {
    return dispatch => {
        ipcRenderer.on(EventName.GetCloseBrowser, (event, { _id }) => {
            dispatch({ type: CLOSE_BROWER_SUCCESS, payload: { state: 0, _id } });
        });
    };
};
export const addListAccountAction = data => {
    return dispatch => {
        dispatch({ type: ADD_LIST_ACCOUNT, payload: data });
    };
};

export const removeListAccountAction = data => {
    return dispatch => {
        dispatch({ type: REMOVE_LIST_ACCOUNT, payload: data });
    };
};

export const cleanListen = eventName => {
    return () => {
        ipcRenderer.removeAllListeners(eventName);
    };
};
export const listAccountSelected = data => {
    return dispatch => {
        data = data.map((item, index) => {
            item.inArr = index;
            return item;
        });
        dispatch({ type: SELECTED_ACCOUNT, payload: data });
    };
};
export const createAccountFacebook = data => {
    return async dispatch => {
        try {
            dispatch(fetchStart());
            let { msg, error } = await apiServices.post(`${API.ACCOUNTS.createAccount}`, data);
            if (msg) {
                dispatch(getAccounts());
                dispatch(notificationSuccess('Tạo thành công tài khoản !'));
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
export const deleteAccountFacebook = data => {
    return async dispatch => {
        try {
            dispatch(fetchStart());
            let { msg, error } = await apiServices.delete(`${API.ACCOUNTS.deleteAccount}`, data);
            if (msg) {
                ipcRenderer.send(EventName.clearProfile, data);
                dispatch(getAccounts());
                dispatch(notificationSuccess('Xóa thành công tài khoản!'));
                dispatch(listAccountSelected([]));
                dispatch({type:SELECTED_DEFAULT, payload:{start : 0, end: 0}});
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
export const setAccountsForAction = data => {
    return dispatch => {
        dispatch({ type: SET_ACCOUNTS_FOR_ACTION, payload: data });
    };
};
export const removeAccountForAction = data => {
    return dispatch => {
        dispatch({ type: REMOVE_ACCOUNT_FOR_ACTION, payload: data });
    };
};