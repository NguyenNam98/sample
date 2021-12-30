export const API = {
    AUTH: {
        login: '/auth/login',
        register: '/auth/register',
        logout: '/auth/logout',
    },
    USER: {
        checkMe: '/user/check-me',
    },
    ACCOUNTS: {
        showAll: '/account-facebook/list',
        updateAccount: '/account-facebook/update',
        createAccount: '/account-facebook/create',
        deleteAccount: '/account-facebook/delete-multiple',
    },
    SCRIPTS: {
        getScripts: '/script/list',
        updateScript: '/script/update',
        createScript: '/script/create',
        deleteScript: '/script/delete-multiple',
    },
    CODE: {
        update: '/code/update',
    },
    POSTS:{
        getPosts :'/article/list',
        updatePosts:'/article/update',
        createPosts :'/article/create',
        deletePosts:'/article/delete-multiple'
    }
};
