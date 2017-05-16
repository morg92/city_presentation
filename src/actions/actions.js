import { LOAD } from '../costants/costants.js';
import { ERROR } from '../costants/costants.js';
import { ADD_ICON } from '../costants/costants.js';
import { IMG } from '../costants/costants.js';
import { ADD_GALLERY } from '../costants/costants.js';
import { BUTT_ENABLE } from '../costants/costants.js';
import { ADD_LIST } from '../costants/costants.js';
import { INFO } from '../costants/costants.js';
import { data } from '../costants/costants.js';
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

function imgArray(jason) {
    return {
        type: IMG,
        payload: {
            img: jason
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



export const goEvent = () => {
    return (dispatch, getState) => {
        let state = getState();
        let city = [];
        for (let i of data) {
            const { name, anno_fondazione, descrizione, img } = i;
            city.push({
                name,
                anno_fondazione,
                descrizione,
                img
            });
        }
        setTimeout(() => {
            if (state.choose.emptyList === true) {
                dispatch(sendCityToList(city));
                dispatch(addList(false));
            }
            if (state.choose.info != null) {
                dispatch(isLoading(true));
                console.log('riempio info!');
            }
            /*else {
                dispatch(isError(true));
                alert('Loading fail!');
            }
            console.log('info->'+state.choose.info);*/
        }, 1000);

        dispatch(enableButton(true));
    };
};


export const listToGallery = () => {
    return (dispatch, getState) => {
        let state = getState();
        const images = [];
        for (let i of data) {
            const { img } = i;
            images.push({
                img
            });
        }
        if (state.images.emptyGallery === true) {
                                                       //in GALLERY images[n] --> visulalizza n div(img)
            dispatch(addGallery(false));
        }
    };
};

export const toIcon = () => {
    return (dispatch, getState) => {
        let state = getState();          //array contenente img rif a città--> mostrare img[0] poi schiacciando next genera event
        if (state.view.emptyIcon === true) {
            dispatch(addIcon(false));
        }
        //dispatch(imageSelect(---> prima img della città selezionata!!
    };
};

//---------------------------------------INCOMPLETA---------------------------------------------------------------------
export const previousNext = (num) => {
    return (dispatch) => {
        let next = 0;
        //let previous = images.length;

        if (num == 1) {
            ++next;
            //dispatch(imageSelect(images[next]));
        }
        else if (num == -1) {
            //--previous;
            //dispatch(imageSelect(images[previous]));
        }
    };
};






//---------------------------------FUNZ NEXT_PREVIOUS------------------------------------------------------------------------------------
/*
function next(images, state) {
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
        let i = images.length;
        if (state.view.button.previous > 0) {
            --i;
            dispatch(imageSelect(images[i]));
        }
    };
}
*/
//--------------------------------------------------------------------------------------------------------------------------------------