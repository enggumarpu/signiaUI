import React from 'react';

// const AuthContext = React.createContext({
//     token: null,
//     userId: null,
//     login: (token, userId, tokenExpiration) => {},
//     logout: () => {}
// });
// export default AuthContext;



export const AuthContext = React.createContext({

    // token: null,
    // userId: null,
    // login: (token) => {},
    // logout: () => {}
    token: null,
    login: (token, userDetails) => {},
    logoutUser: () => {},
    userNamePassword: (userpass) => {}

});