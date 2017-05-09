import LOAD from '../costants/costants.js';
import ERROR from '../costants/costants.js';

function isLoader(isLoader) {
    return {
        type: LOAD,
        payload: {
            isLoader: isLoader
        }
    };
}

function isError(error) {
    return {
        type: ERROR,
        payload: {
            error: error
        }
    };
}