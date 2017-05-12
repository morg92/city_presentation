import { ADD_ICON } from '../costants/costants.js';
import { SEL_IMG } from '../costants/costants.js';
import { SET_BUTT } from '../costants/costants.js';

function initialState() {
    return {
        selectedImages: '',
        emptyIcon: true,
        button: {                  //modifiche 15:45
            previous: '',
            next: ''
        }
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

        case SET_BUTT:                       //modifiche 15:45
            return {
                ...state,
                button: {
                    ...state.button,
                    previous: action.payload.previous,
                    next: action.payload.next
                }
            };

        default:
            return state;
    }
}