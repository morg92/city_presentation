import { ADD_ICON } from '../costants/costants.js';
import { ADD_NAME } from '../costants/costants.js';
import { SEL_IMG } from '../costants/costants.js';

function initialState() {
    return {
        selectedImages: null,
        cityName: null,
        emptyIcon: true
    };
}

export default function view(state = initialState(), action) {
    switch (action.type) {
        case ADD_ICON:
            return {
                ...state,
                emptyIcon: action.payload.emptyIcon
            };

        case ADD_NAME:
            return {
                ...state,
                cityName: action.payload.cityName
            };

        case SEL_IMG:
            return {
                ...state,
                selectedImages: action.payload.selectedImages
            };

        default:
            return state;
    }
}