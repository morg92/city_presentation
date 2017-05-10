import { IMG } from '../costants/costants.js';
import { ADD_GALLERY } from '../costants/costants.js';

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

export default function images(state = initialState(), action) {
    switch (action.type) {
        case IMG:
            return {
                ...state,
                ui: {
                    img: [action.payload.img]
                }
            };
        case ADD_GALLERY:
            return {
                ...state,
                ui: {
                    emptyGallery: action.payload.emptyGallery
                }
            };
        default:
            return state;
    }
}