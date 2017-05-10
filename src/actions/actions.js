import { LOAD } from '../costants/costants.js';
import { ERROR } from '../costants/costants.js';
import { SEND_GALLERY } from '../costants/costants.js';
import { SEND_ICON } from '../costants/costants.js';
import { IMG } from '../costants/costants.js';
import { ADD_GALLERY} from '../costants/costants.js';

function isLoading(isLoaded) {
    return {
        type: LOAD,
        payload: {
            isLoaded: isLoaded
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

function succesImg(succes) {
    return {
        type: SEND_GALLERY,
        payload: {
            succes: succes
        }
    };
}

function imageSelect(selectedImages) {
    return {
        type: SEND_ICON,
        payload: {
            selectedImages: selectedImages
        }
    };
}

function imgArray(json) {    //(json)???
    return {
        type: IMG,
        payload: {
            img: [
                json
            ]
        }
    };
}

function addGallery(emptyGallery) {
    return {
        type: ADD_GALLERY,
        payload: {
            emptyGallery: emptyGallery
        }
    };
}


export const goEvent = (event) => {
    return (dispatch, getState) => {
        let state = state.getState();
        if (this.state.ui.img === null) {
           // dispatch(imgArray(value));      //popolare img(initialState) --> img(images.JSON)
            dispatch(isLoading(true));
        }
        else {
            dispatch(isError(true));
        }
        //dispatch(abilitaBottoni)
    };
};

export const listToGallery = (value) => {
    return (dispatch) => {
        /*if (botton = enable)
            (event)
          img in ANTEPRIMA in Gallery*/
    }; // end return
};


export const toIcon = (value) => {
    return (dispatch) => {}; //end return
};