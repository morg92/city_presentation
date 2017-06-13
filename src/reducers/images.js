import { IMG } from '../costants/costants.js';
import { ADD_GALLERY } from '../costants/costants.js';
import { BUTT_ENABLE } from '../costants/costants.js';
import { ADD_INF_IMG } from '../costants/costants.js';
import { SEL_INFO } from '../costants/costants.js';
import { SELECT } from '../costants/costants.js';

function initialState() {
    return {
        buttonEnable: false,
        emptyGallery: true,
        selected: false,
        img: null,
        infoImg: null,
        selectedInfo: null
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

        case SELECT:
            return {
                ...state,
                selected: action.payload.selected
            };

        case ADD_INF_IMG:
            return {
                ...state,
                infoImg: action.payload.infoImg
            };

        case SEL_INFO:
            return {
                ...state,
                selectedInfo: action.payload.selectedInfo
            };

        default:
            return state;
    }
}