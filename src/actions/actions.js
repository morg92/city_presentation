import { LOAD } from '../costants/costants.js';
import { ERROR } from '../costants/costants.js';
import { ADD_ICON } from '../costants/costants.js';
import { IMG } from '../costants/costants.js';
import { ADD_GALLERY } from '../costants/costants.js';
import { BUTT_ENABLE } from '../costants/costants.js';
import { ADD_LIST } from '../costants/costants.js';
import { INFO } from '../costants/costants.js';
import { data } from '../costants/costants.js';
import { SET_BUTT } from '../costants/costants.js';      //modifiche 15:45
import { SEL_IMG } from '../costants/costants.js';


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

function addIcon(emptyIcon) {
    return {
        type: ADD_ICON,
        payload: {
            emptyIcon: emptyIcon
        }
    };
}

function imageSelect(selectedImages) {
    return {
        type: SEL_IMG,
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
        if (state.view.emptyIcon === true) {
            dispatch(addIcon(false));
        }
    };
};
//-----------------------------------------------------------TEST OK!!!---------------------------------------------------------------





//----------------------------------INCOMPLETA!!!-------------------------------------------------------------------------------------
export const previousNext = () => {             //modifiche 15:45
    return (dispatch, getState) => {                //
        let state = getState();                     //   spostare in 'toIcon'
        if (state.view.buttonEnable === true) {     //      -> dove richiamare le funz
            dispatch(setButton(1, 0));              //         next()   e
        }                                             //         previous()
//-----------------PROVA ARRAY-----------------------------------------------------------------------------------------------------------
        let images = [                                                                                                  //-----------
            'https://cdn.balticlivecam.com/images/Vilnius-Panorama.jpg',                                                  //-------
            'http://www.nightlife-cityguide.com/wp-content/uploads/2014/12/vilnius-cosa-vedere-town-hall-municipio.jpg',  //------
            'http://www.nationsonline.org/gallery/Lithuania/St-Annes-church-Vilnius.jpg'                                 //----------
        ];                                                                                            //--------------------------
        next(images, state);                                    //-------------------------------------------------------------------------
        previous(images, state);                       //-------------------------------------------------------------------------------
    };                                     //------------------------------------------------------------------------------------
};                                 //---------------------------------------------------------------------------------------------
//------------------------------------------------------------------------
function next(images, state) {                          //------------FUNZ PER BUTTON ICON--------------------------
    return (dispatch) => {
        let i = 0;
        if (state.view.button.next <= images.length) {
            ++i;
            dispatch(imageSelect(images[i]));
        }
    };
}
function previous(images, state) {
    return (dispatch) => {
        let i = 0;
        if (state.view.button.previous > 0) {
            --i;
            dispatch(imageSelect(images[i]));
        }
    };
}
//--------------------------------------------------------------------------------------------------------------------------------------