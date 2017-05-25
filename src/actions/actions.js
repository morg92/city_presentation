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
import { ADD_ARR_IMG } from '../costants/costants.js';


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

function imgArray(img) {
    return {
        type: IMG,
        payload: {
            img: img
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

function sendCityToList(info) {
    return {
        type: INFO,
        payload: {
            info: info
        }
    };
}

function addArrImg(images) {
    return {
        type: ADD_ARR_IMG,
        payload: {
            images: images
        }
    };
}



export const goEvent = () => {
    return (dispatch, getState) => {
        let state = getState();
        let city = [];
        for (let key in data) {
            city.push({
                key: key,
                name: data[key].name,
                descrizione: data[key].descrizione,
                anno_fondazione: data[key].anno_fondazione
            });
        }
        setTimeout(() => {
            if (state.choose.emptyList === true) {
                dispatch(sendCityToList(city));
                dispatch(addList(false));
            }
            if (state.choose.info != null) {
                dispatch(isLoading(true));
            }
            /*else {
                dispatch(isError(true));
                alert('Loading fail!');
            }*/
        }, 5000);
        dispatch(enableButton(true));
    };
};


export const listToGallery = (value) => {
    return (dispatch, getState) => {
        let state = getState();
        const kImg = [];
        for (let i in data) {
            kImg.push({
                key: i,
                img: data[i].img
            });
        }
        for (let i in kImg) {
            if (kImg[i].key === value) {
                dispatch(imgArray(kImg[i].img));
                dispatch(imageSelect(kImg[i].img[0]));
                dispatch(addArrImg(kImg[i].img));
            }
        }
        if (state.images.emptyGallery === true) {
            dispatch(addGallery(false));
        }
    };
};


export const toIcon = (num) => {
    return (dispatch, getState) => {
        let state = getState();
        let img = [];

        if (state.view.emptyIcon === true) {
            dispatch(addIcon(false));
        }

        img = state.view.images;
        let length = img.length - 1;
        if (num === -1) {
            let pos = img.indexOf(state.view.selectedImages);
            if (pos != -1) {
                let index = pos - 1;
                dispatch(imageSelect(img[index]));
                if (img[index] === undefined) {
                    dispatch(imageSelect(img[length]));
                }
            }
        }
        if (num === 1) {
            let pos = img.indexOf(state.view.selectedImages);
            if (pos != -1) {
                let index = pos + 1;
                dispatch(imageSelect(img[index]));
                if (img[index] === undefined) {
                    dispatch(imageSelect(img[0]));
                }
            }
        }
    };
};