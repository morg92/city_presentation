import { LOAD } from '../costants/costants.js';
import { ERROR } from '../costants/costants.js';

function initialState() {
    return {
        isLoaded: false,
        error: false
    };
}

export default function loading(state = initialState(), action) {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                isLoaded: action.payload.isLoaded
            };

        case ERROR:
            return {
                ...state,
                error: action.payload.error
            };

        default:
            return state;
    }
}