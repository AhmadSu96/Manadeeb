import {combineReducers, createStore} from 'redux';
import UserReducer from './reducers/UserReducer';
import AppReducer from './reducers/AppReducer';

export const store = createStore(
    combineReducers({
        app: AppReducer,
        user: UserReducer,
    }),
);
