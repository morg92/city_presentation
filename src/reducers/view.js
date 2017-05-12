import { ADD_ICON } from '../costants/costants.js';
import { BUTT_ENABLE } from '../costants/costants.js';
import { SUCCES } from '../costants/costants.js';
import { SET_BUTT } from '../costants/costants.js';

function initialState() {
    return {
        selectedImages: '',
        buttonEnable: false,
        succes: false,
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
                selectedImages: action.payload.selectedImages
            };

        case BUTT_ENABLE:
            return {
                ...state,
                buttonEnable: action.payload.buttonIconEnable
            };

        case SUCCES:
            return {
                ...state,
                succes: action.payload.succes
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