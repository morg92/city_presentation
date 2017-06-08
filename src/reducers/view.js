import { ADD_ICON } from '../costants/costants.js';
import { SEL_IMG } from '../costants/costants.js';
import { SEL_INFO } from '../costants/costants.js';
import { ADD_ARR_IMG } from '../costants/costants.js';
import { ADD_INF_IMG } from '../costants/costants.js';

function initialState() {
    return {
        selectedImages: null,
        selectedInfo: null,
        emptyIcon: true,
        images: null,
        infoImg: null
    };
}

export default function view(state = initialState(), action) {
    switch (action.type) {
        case ADD_ICON:
            return {
                ...state,
                emptyIcon: action.payload.emptyIcon
            };

        case SEL_IMG:
            return {
                ...state,
                selectedImages: action.payload.selectedImages
            };

        case SEL_INFO:
            return {
                ...state,
                selectedInfo: action.payload.selectedInfo
            };

        case ADD_ARR_IMG:
            return {
                ...state,
                images: action.payload.images
            };

        case ADD_INF_IMG:
            return {
                ...state,
                infoImg: action.payload.infoImg
            };

        default:
            return state;
    }
}