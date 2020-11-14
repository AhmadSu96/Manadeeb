const application = {
    from: null,
    to: null,
    reciever: null,
    orderStatus: 'initial',
    payer: null,
    cost: null,
    driverOrderId: null,

    // Test Data
    // from: {
    //     latitude: 31.964479,
    //     longitude: 35.9052358,
    //     placeName: 'بوليفارد العبدلي، JamAl-Al-Juqah Street, Amman, Jordan',
    // },
    // to: {
    //     latitude: 32.1371494,
    //     longitude: 36.12008850000001,
    //     placeName: 'الهاشمية - الزرقاء، Jordan',
    // },
    // reciever: {
    //     comments: 'ايفون',
    //     name: 'اسم تجريبي',
    //     package: 'electronic_devices',
    //     phone: '+974111111',
    // },
    // orderStatus: 'first_step_passed',
    // payer: 'sender',
};

const AppReducer = (state = application, {type, payload}) => {
    switch (type) {
        case 'SET_FROM':
            return {...state, from: payload};
        case 'SET_TO':
            return {...state, to: payload};
        case 'SET_COST':
            return {...state, cost: payload};
        case 'SET_ORDER_STATUS':
            return {...state, orderStatus: payload};
        case 'SET_DRIVER_ORDER':
            return {...state, driverOrderId: payload};
        case 'SET_RECIEVER':
            return {...state, reciever: payload};
        case 'SET_PAYER':
            return {...state, payer: payload};
        default:
            return state;
    }
};

export default AppReducer;
