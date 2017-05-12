import { LOAD } from '../costants/costants.js';
import { ERROR } from '../costants/costants.js';
import { ADD_ICON } from '../costants/costants.js';
import { IMG } from '../costants/costants.js';
import { ADD_GALLERY } from '../costants/costants.js';
import { BUTT_ENABLE } from '../costants/costants.js';
import { SUCCES } from '../costants/costants.js';
import { ADD_LIST } from '../costants/costants.js';
import { INFO } from '../costants/costants.js';
import { data } from '../costants/costants.js';
import { SET_BUTT } from '../costants/costants.js';      //modifiche 15:45


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
        type: SUCCES,
        payload: {
            succes: succes
        }
    };
}

function imageSelect(selectedImages) {
    return {
        type: ADD_ICON,
        payload: {
            selectedImages: selectedImages
        }
    };
}

function imgArray(json) {
    return {
        type: IMG,
        payload: {
            img: json
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

function addList(emptyList) {
    return {
        type: ADD_LIST,
        payload: {
            emptyList: emptyList
        }
    };
}

function enableButton(buttonEnable) {
    return {
        type: BUTT_ENABLE,
        payload: {
            buttonEnable: buttonEnable
        }
    };
}

function sendCityToList(json) {
    return {
        type: INFO,
        payload: {
            info: json
        }
    };
}

function setButton(previous, next) {     //modifiche 15:45
    return {
        type: SET_BUTT,
        payload: {
            previous: previous,
            next: next
        }
    };
}





export const goEvent = () => {
    return (dispatch, getState) => {
        let state = getState();
        let city = [];
        for (let i of data) {
            const { name, anno_fondazione, descrizione } = i;
            city.push({
                name,
                anno_fondazione,
                descrizione
            });
        }

        setTimeout(() => {
            if (state.choose.emptyList === true) {
                dispatch(sendCityToList(city));
                dispatch(addList(false));
            }
            if (state.choose.info !== null) {
                dispatch(isLoading(true));
            }
            else {
                dispatch(isError(true));
                alert('Loading fail!');
            }
        }, 5000);

        dispatch(enableButton(true));
    };
};

export const listToGallery = () => {
    return (dispatch, getState) => {
        let state = getState();
        let images = [];
        for (let i of data) {
            const { img } = i;
            images.push({
                img
            });
        }
        if (state.images.emptyGallery === true) {
            dispatch(imgArray(images));
            dispatch(addGallery(false));
        }
        dispatch(enableButton(true));
    };
};

export const toIcon = () => {
    return (dispatch, getState) => {
        let state = getState();
        if (state.view.selectedImages === '') {
            dispatch(imageSelect());     //dispacciare una sola img!!!!! oppure tutto l'object e scorrerlo con ciclo for
        }
        dispatch(succesImg(true));
    };
};

export const PreviousNext = () => {             //modifiche 15:45
    return (dispatch, getState) => {                //
        let state = getState();                     //   spostare in 'toIcon'
        if (state.view.buttonEnable === true) {     //      -> dove richiamare le funz
            dispatch(setButton(1, 0));              //         next()   e
        }                                           //         previous()
//------------------------------------------------------------------------
        function next(images) {
            let i = 0;
            if (state.view.button.next <= images.length) {
                ++i;
                dispatch(imageSelect(images[i]));
            }
            function previous(images) {
                let i = 0;
                if (state.view.button.previous > 0) {
                    --i;
                    dispatch(imageSelect(images[i]));
                }
            }
//---------------------------------------------------------------------------
        }
    };
};
