export const setFrom = (from) => {
    return {
        type: 'SET_FROM',
        payload: from,
    };
};

export const setTo = (to) => {
    return {
        type: 'SET_TO',
        payload: to,
    };
};

export const setCost = (cost) => {
    return {
        type: 'SET_COST',
        payload: cost,
    };
};

export const setDriverOrder = (orderId) => {
    return {
        type: 'SET_DRIVER_ORDER',
        payload: orderId,
    };
};

export const setOrderStatus = (passed) => {
    return {
        type: 'SET_ORDER_STATUS',
        payload: passed,
    };
};

export const setReciever = (passed) => {
    return {
        type: 'SET_RECIEVER',
        payload: passed,
    };
};

export const setPayer = (passed) => {
    return {
        type: 'SET_PAYER',
        payload: passed,
    };
};

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user,
    };
};
