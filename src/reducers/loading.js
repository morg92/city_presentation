import { LOAD } from '../costants/costants.js';
import { ERROR } from '../costants/costants.js';
import { SEND_GALLERY } from '../costants/costants.js';

function initialState() {
    return {
        ui: {
            selectedImages: '',
            img: [
                null
            ],
            emptyGallery: true
        },
        data: {
            succes: false,
            isLoaded: false,
            error: false
        }
    };
}

export default function loading(state = initialState(), action) {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                data: {
                    ...state.data,
                    isLoaded: action.payload.isLoaded
                }
            };
        case ERROR:
            return {
                ...state,
                data: {
                    ...state.data,
                    error: action.payload.error
                }
            };
        case SEND_GALLERY:
            return {
                ...state,
                data: {
                    succes: action.payload.succes
                }
            };
        default:
            return state;
    }
}