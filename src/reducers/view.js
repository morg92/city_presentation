import { SEND_ICON } from '../costants/costants.js';

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

export default function view(state = initialState(), action) {
    switch (action.type) {
        case SEND_ICON:
            return {
                ...state,
                ui: {
                    selectedImages: action.payload.selectedImages
                }
            };
        default:
            return state;
    }
}