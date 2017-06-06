import axios from 'axios';
import { data } from '../costants/costants.js';
import { LOAD } from '../costants/costants.js';
import { ERROR } from '../costants/costants.js';
import { ADD_ICON } from '../costants/costants.js';
import { IMG } from '../costants/costants.js';
import { ADD_GALLERY } from '../costants/costants.js';
import { BUTT_ENABLE } from '../costants/costants.js';
import { ADD_LIST } from '../costants/costants.js';
import { INFO } from '../costants/costants.js';
import { SEL_IMG } from '../costants/costants.js';
import { ADD_ARR_IMG } from '../costants/costants.js';
const API_URL = 'http://localhost:4000/src/img/images2.json';


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
    return (dispatch) => {
        setTimeout(() => {
            axios.get(API_URL)
                .then((result) => {
                    if (result.status === 200) {
                        dispatch(isLoading(true));
                        dispatch(sendCityToList(data.info));
                        dispatch(addList(false));
                    }
                }).catch(() => {
                    dispatch(isError(true));
                    alert('Loading fail!');
                });
        }, 1000);//5000
        dispatch(enableButton(true));
    };
};


export const listToGallery = (value) => {
    return (dispatch) => {
        for (let i in data.info) {
            if (data.info[i].cityId === value) {
                dispatch(addGallery(false));
                dispatch(imgArray(data.info[i].img));
                dispatch(imageSelect(data.info[i].img[0]));
                dispatch(addArrImg(data.info[i].img));
            }
        }
        //seconda chiamata API
       /* let url = 'http://localhost:4000/city/' + value + '/img';
        console.log('sono fuori call');
        axios.get(url)
            .then((result) => {
                console.log('sono entrato nel then');
                for (let i in data.info) {
                    if (result.status === 200) {
                        console.log('--result--');
                        console.log(result);
                        console.log('-----');
                        dispatch(addGallery(false));
                        dispatch(imgArray(data.info[i].img));
                        dispatch(imageSelect(data.info[i].img[0]));
                        dispatch(addArrImg(data.info[i].img));
                    }
                }
            }).catch((error) => {
                alert(error.stack);
            });*/
    };
};


export const toIcon = (num) => {
    return (dispatch, getState) => {
        let state = getState();

        dispatch(addIcon(false));

        let img = [];
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