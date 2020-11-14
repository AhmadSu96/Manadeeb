const user = {
    user: null,
    loggedIn: false,

    // Test
    // loggedIn: true,
    // user: {role: 'driver'},
    // user: {role: 'user'},
};

const UserReducer = (state = user, {type, payload}) => {
    switch (type) {
        case 'SET_USER':
            return {...state, user: payload, loggedIn: true};
        case 'LOGOUT':
            return {loggedIn: false, user: null};
        default:
            return state;
    }
};

export default UserReducer;
