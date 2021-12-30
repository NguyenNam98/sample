import {
    GET_ACCOUNTS,
    OPEN_BROWER_SUCCESS,
    CLOSE_BROWER_SUCCESS,
    CLOSING_BROWER,
    OPENING_BROWER,
    UPDATE_ACCOUNTS,
    SELECTED_ACCOUNT,
    ADD_LIST_ACCOUNT,
    REMOVE_LIST_ACCOUNT,
    SELECTED_DEFAULT,
    SET_ACCOUNTS_FOR_ACTION,
    REMOVE_ACCOUNT_FOR_ACTION,
} from '../../@jumbo/constants/ActionTypes';

const INIT_STATE = {
    dataAccounts: [],
    selectedAccount: [],
    listAccountAction: [],
    selectedAccountDefault: {
        start: '',
        end: '',
    },
    accountsForAction: [],
    dataAccountsUnmount :[]
};
function setStateBrowser(data, action) {
    if (data._id === action.payload._id) {
        data.state = action.payload.state;
        return data;
    }
    return data;
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_ACCOUNTS: {
            return {
                ...state,
                dataAccounts: action.payload,
                dataAccountsUnmount: action.payload
            };
        }
        case UPDATE_ACCOUNTS: {
            return {
                ...state,
                dataAccounts: state.dataAccounts.map(data =>
                    data._id === action.payload._id ? (data = action.payload) : data,
                ),
                selectedAccount: [],
            };
        }
        case OPEN_BROWER_SUCCESS: {
            return {
                ...state,
                dataAccounts: state.dataAccounts.map(data => setStateBrowser(data, action)),
            };
        }
        case OPENING_BROWER: {
            return {
                ...state,
                dataAccounts: state.dataAccounts.map(data => setStateBrowser(data, action)),
            };
        }
        case CLOSE_BROWER_SUCCESS: {
            return {
                ...state,
                dataAccounts: state.dataAccounts.map(data => setStateBrowser(data, action)),
            };
        }
        case CLOSING_BROWER: {
            return {
                ...state,
                dataAccounts: state.dataAccounts.map(data => setStateBrowser(data, action)),
            };
        }
        case SELECTED_ACCOUNT: {
            return {
                ...state,
                selectedAccount: action.payload,
            };
        }
        case ADD_LIST_ACCOUNT: {
            return {
                ...state,
                listAccountAction: [...state.listAccountAction, action.payload],
            };
        }
        case REMOVE_LIST_ACCOUNT: {
            let index = state.listAccountAction.findIndex(item => item._id === action.payload._id);
            state.listAccountAction.splice(index, 1);
            return {
                ...state,
                listAccountAction: [...state.listAccountAction],
            };
        }
        case SELECTED_DEFAULT: {
            return {
                ...state,
                selectedAccountDefault: action.payload,
            };
        }
        case SET_ACCOUNTS_FOR_ACTION: {
            return {
                ...state,
                accountsForAction: [...state.accountsForAction, action.payload],
            };
        }
        case REMOVE_ACCOUNT_FOR_ACTION: {
            return {
                ...state,
                accountsForAction: [
                    ...state.accountsForAction.slice(0, action.payload),
                    ...state.accountsForAction.slice(action.payload + 1),
                ],
            };
        }
        default:
            return state;
    }
};
