import axios from 'axios';
import { data } from '../costants/costants.js';
import { LOAD } from '../costants/costants.js';
import { ERROR } from '../costants/costants.js';
import { ADD_ICON } from '../costants/costants.js';
import { ADD_NAME } from '../costants/costants.js';
import { IMG } from '../costants/costants.js';
import { ADD_GALLERY } from '../costants/costants.js';
import { BUTT_ENABLE } from '../costants/costants.js';
import { ADD_LIST } from '../costants/costants.js';
import { INFO } from '../costants/costants.js';
import { SEL_IMG } from '../costants/costants.js';
import { SEL_INFO } from '../costants/costants.js';
import { ADD_ARR_IMG } from '../costants/costants.js';
import { ADD_INF_IMG } from '../costants/costants.js';


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

function infoSelect(selectedInfo) {
    return {
        type: SEL_INFO,
        payload: {
            selectedInfo: selectedInfo
        }
    };
}

function addCityName(cityName) {
    return {
        type: ADD_NAME,
        payload: {
            cityName: cityName
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

function addInfoImg(info) {
    return {
        type: ADD_INF_IMG,
        payload: {
            infoImg: info
        }
    };
}



var instance = axios.create({
    baseURL: 'http://localhost:4001'
});

export const goEvent = () => {
    return (dispatch) => {
        instance.get('/src/img/images2.json')
            .then((result) => {
                if (result.status === 200) {
                    dispatch(isLoading(true));
                    dispatch(sendCityToList(data.info));
                    dispatch(addList(false));
                }
            }).catch((error) => {
                dispatch(isError(true));
                alert('Loading fail!', error);
            });
        dispatch(enableButton(true));
    };
};


export const listToGallery = (value) => {
    return (dispatch) => {
        let url = '/city/' + value + '/img';
        instance.get(url)
            .then((result) => {
                if (result.status === 200) {
                    dispatch(addGallery(false));
                    dispatch(imgArray(result.data));
                    dispatch(imageSelect(result.data[0]));
                    dispatch(addArrImg(result.data));
                }
            }).catch((error) => {
                alert(error.stack);
            });

        let urlInfo = '/city/' + value + '/infoImg';
        instance.get(urlInfo)
            .then((result) => {
                if (result.status === 200) {
                    dispatch(addInfoImg(result.data));
                    dispatch(infoSelect(result.data[0]));
                }
            });

        let urlName = '/city/' + value + '/name';
        instance.get(urlName)
            .then((result) => {
                if (result.status === 200) {
                    dispatch(addCityName(result.data));
                }
            });
    };
};


export const toIcon = (value) => {
    return (dispatch, getState) => {
        let state = getState();
        let img = [];
        img = state.view.images;
        let length = img.length - 1;
        let infoImg = [];
        infoImg = state.view.infoImg;

        dispatch(addIcon(false));

        if (typeof (value) === 'number') {
            dispatch(imageSelect(img[value]));
            dispatch(infoSelect(infoImg[value]));
        }

        if (value === '-') {
            let pos = img.indexOf(state.view.selectedImages);
            if (pos != -1) {
                let index = pos - 1;
                dispatch(imageSelect(img[index]));
                dispatch(infoSelect(infoImg[index]));
                if (img[index] === undefined) {
                    dispatch(imageSelect(img[length]));
                    dispatch(infoSelect(infoImg[length]));
                }
            }
        }
        if (value === '+') {
            let pos = img.indexOf(state.view.selectedImages);
            if (pos != -1) {
                let index = pos + 1;
                dispatch(imageSelect(img[index]));
                dispatch(infoSelect(infoImg[index]));
                if (img[index] === undefined) {
                    dispatch(imageSelect(img[0]));
                    dispatch(infoSelect(infoImg[0]));
                }
            }
        }
    };
};