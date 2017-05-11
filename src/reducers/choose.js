import { ADD_LIST } from '../costants/costants.js';
import { BUTT_ENABLE } from '../costants/costants.js';
import { INFO } from '../costants/costants.js';

function initialState() {
    return {
        buttonEnable: false,
        emptyList: true,
        info: [
            null
        ]
    };
}

export default function choose(state = initialState(), action) {
    switch (action.type) {
        case BUTT_ENABLE:
            return {
                ...state,
                buttonEnable: action.payload.buttonEnable
            };

        case ADD_LIST:
            return {
                ...state,
                emptyList: action.payload.emptyList
            };

        case INFO:
            return {
                ...state,
                info: [action.payload.info]
            };

        default:
            return state;
    }
}