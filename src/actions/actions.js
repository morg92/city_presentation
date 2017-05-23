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
        }, 1000); //5000
        dispatch(enableButton(true));

        //---------------------------------------------LOG_DI_PROVA----------------------------------------------------------------------------
        /*console.log('---data---');
        console.log(data);
        console.log('---DATA.AMSTERDAM');
        console.log(data.amsterdam);
        console.log(data.amsterdam.img[0]);
        console.log('<<<<<<<>>>>>>>><<<<>>><');
        console.log('SONO FUORI DAL FOR');
        for (let i in data) {
            console.log('SONO DENTRO IL FOR');
            console.log('---key---');
            console.log(i);
            console.log('---foundation---');
            console.log(data[i].anno_fondazione);
            console.log(data[i].img[2]);
            console.log('---fine_giro---');
        }*/
        //--------------------------------------------FINE_PROVA_NEW_JSON------------------------------------------------------------------------
    };
};//OK!!!--(CONTROLLARE 'ELSE' ERROR)


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
        let imagesGallery = [];
        for (let i in kImg) {
            if (kImg[i].key === value) {
                imagesGallery = kImg[i].img;
                //console.log('--<<>>--<<>>--');
                //console.log(imagesGallery);
                //console.log('-->><<-->><<--');
                dispatch(imgArray(imagesGallery));
            }
        }
        if (state.images.emptyGallery === true) {
            dispatch(addGallery(false));
        }
    };
};//OK!!!


export const toIcon = (value) => {
    return (dispatch, getState) => {
        let state = getState();
        if (state.view.emptyIcon === true) {
            dispatch(addIcon(false));
        }
        const kImg = [];
        for (let i in data) {
            kImg.push({
                key: i,
                img: data[i].img
            });
        }
        let imgCityView;
        for (let i in kImg) {
            for (let j = 0; j < kImg.length; j++) {
                if (kImg[i].img[j] === value) {
                    //console.log('<<<<<<<<<<<<<<<<');
                    //console.log('key --> ' + kImg[i].key);
                    //console.log('>>>>>>>>>>>>>>>>');
                    imgCityView = kImg[i].img;
                }
            }
        }
        dispatch(imageSelect(imgCityView));

        //---------------------LOG_DI_CONTROLLO--------------------------------------------------------------------------------------
        //console.log('*****************************');
        //console.log('stato di selectedImages! --> ' + typeof (state.view.selectedImages));
        //console.log('*****************************');
        //console.log('selectedImages!');
        //console.log(imgCityView);//
        //console.log('key -->  ' + keyView);
        //console.log('------------------------------');
        //-----------------------------------------------------------------------------------------------------------
    };
};//OK!!!


export const previousNext = (value) => {
    return (dispatch, getState) => {
        let state = getState();
        let img = [];
        img.push(state.view.selectedImages);
        let previousButt = img[0].length - 1;
        let nextButt = 0;

        let previous = new Function();
        let next = new Function();

        //-----------------------------LOG_DI_PROVA------------------------------------------
        console.log('--img[0]--');
        console.log(img[0]);
        //console.log(img[0][2]);
        //console.log('previous ->');
        //console.log(previous);
        console.log('----------------');
        //----------------------------------------------------------------------------------

        switch (value) {
            case -1:
                previous(previousButt, img);
                console.log('STO CHIAMANDO LA FUNZIONE PREVIOUS');
                break;

            case 1:
                next(nextButt, img);
                console.log('STO CHIAMANDO LA FUNZIONE NEXT');
                break;

            default:
                break;
        }


        previous = function (previousButt, img) {
            return (dispatch) => {

                console.log('SONO ENTRATO NELLA FUNZIONE PREVIOUS');

                let i = img[0].length - 1;
                if (previousButt > 0) {
                    --i;
                    dispatch(imageSelect(img[0][i]));

                    console.log('****img[0][previous]******');
                    console.log(img[0][i]);
                    console.log('**********');
                }
            };
        };

        next = function (nextButt, img) {
            return (dispatch) => {

                console.log('SONO ENTRATO NELLA FUNZIONE NEXT');

                let j = 0;
                if (nextButt <= img[0].length) {
                    ++j;
                    dispatch(imageSelect(img[0][j]));

                    console.log('++++img[0][next]+++++');
                    console.log(img[0][j]);
                    console.log('+++++++++++');
                }
            };
        };

    };
};