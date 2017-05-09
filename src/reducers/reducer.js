import LOAD from '../costants/costants.js';
import ERROR from '../costants/costants.js';

function initialState() {
    return {
        isLoader: false,
        error: false
    };
}

export default function view(state, action) {
    const previousState = (state ? state : initialState());
    switch (action.type) {
        case LOAD:
            return isLoader(previousState, action);

        case ERROR:
            return isError(previousState, action);

        default:
            return previousState;
    }
}