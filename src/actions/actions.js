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
        //-------------------------------------------------------------------------------------------------------------------
        /*for (let i of data) {
            const { name, anno_fondazione, descrizione } = i;
            city.push({
                name,
                anno_fondazione,
                descrizione
            });
        }*/
        //-------------------------------------------------------------------------------------------------------------------
        //---new data---18_maggio_15_:_11--------------------------------------
        for (let key in data) {
            city.push({
                key: key,
                name: data[key].name,
                descrizione: data[key].descrizione,
                anno_fondazione: data[key].anno_fondazione
            });
        }
        console.log('--city---');
        console.log(city);
        //---------fine_new_data-----------------------------------------------
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
            console.log('info->' + state.choose.info);
        }, 1000);
        dispatch(enableButton(true));
        //------------------------------------------------PROVA_NEW_JSON----------------------------------------------------------------
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
        //-----------------------------------------------FINE_PROVA_NEW_JSON------------------------------------------------------------
    };
};


export const listToGallery = (value) => {
    return (dispatch, getState) => {
        let state = getState();
        //console.log('value ->'+ value);
        //const keys = [];
        //const images = [];
        const kImg = [];
        for (let i in data) {
            kImg.push({
                key: i,
                img: data[i].img
            });
            /*keys.push(
                i
            );
            images.push(
                data[i].img
            );*/
        }

        //-------------LOG--------------------------
        console.log('---kIng---');
        console.log(kImg);
        /*console.log('---keys---');
        console.log(keys);
        console.log('---images---');
        console.log(images);*/

        console.log('<<<<<>>>>><<<<<>>>>');

        //------------FINE_LOG---------------------
        let imagesGallery = [];
        for (let i in kImg) {
            if (kImg[i].key === /*value*/ 'berlin') {
                imagesGallery = kImg[i].img;
                console.log('--img--');
                console.log(imagesGallery);
                dispatch(imgArray(imagesGallery));
            }
        }
        if (state.images.emptyGallery === true) {
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
        //dispatch(imageSelect());
    };
};

//---------------------------------------INCOMPLETA---------------------------------------------------------------------
export const previousNext = (num) => {
    return (/*dispatch*/) => {
        //let next = 0;
        //let previous = images.length;

        if (num == 1) {
            // ++next;
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