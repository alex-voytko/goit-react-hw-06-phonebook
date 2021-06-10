import { combineReducers } from 'redux';
import types from './contacts-types';

const items = (state = [], { type, playload }) => {
    switch (type) {
        case types.ADD:
            return [...state, playload];
        default:
            return state;
    }
};

const filter = (state = '', action) => {
    return state;
};

export default combineReducers({
    items,
    filter,
});
