import { IMG } from '../costants/costants.js';
import { ADD_GALLERY } from '../costants/costants.js';
import { BUTT_ENABLE } from '../costants/costants.js';

function initialState() {
    return {
        buttonEnable: false,
        emptyGallery: true,
        img: null
    };
}

export default function images(state = initialState(), action) {
    switch (action.type) {
        case IMG:
            return {
                ...state,
                img: action.payload.img
            };

        case ADD_GALLERY:
            return {
                ...state,
                emptyGallery: action.payload.emptyGallery
            };

        case BUTT_ENABLE:
            return {
                ...state,
                buttonEnable: action.payload.buttonEnable
            };

        default:
            return state;
    }
}