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
        //---new data---18_maggio_15_:_11--------------------------------------
        for (let key in data) {
            city.push({
                key: key,
                name: data[key].name,
                descrizione: data[key].descrizione,
                anno_fondazione: data[key].anno_fondazione
            });
        }
        //console.log('--city---');
        //console.log(city);
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
            //console.log('info->' + state.choose.info);//al primo click è sempre = null; doppio-click = true
        }, 1000); //5000
        dispatch(enableButton(true));

//---------------------------------------------PROVA_NEW_JSON----------------------------------------------------------------------------
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
        let imagesGallery = [];
        for (let i in kImg) {
            if (kImg[i].key === value) {
                imagesGallery = kImg[i].img;
                //console.log('--<<>>--<<>>--');
                //console.log(imagesGallery);
                //console.log('-->><<-->><<--');
                dispatch(imgArray(imagesGallery));
                dispatch(imageSelect(value)); //dispaccia l'img di pos 0
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
            //dispatch(imageSelect(value)); //dispaccia l'img di pos 0
        }
        const kImg = [];
        for (let i in data) {
            kImg.push({
                key: i,
                img: data[i].img
            });
        }
        let imgCityView;
        let keyView;//solo di prova
        for (let i in kImg) {
            for (let j = 0; j < kImg.length; j++) {
                if (kImg[i].img[j] === value) {
                    //console.log('<<<<<<<<<<<<<<<<');
                    //console.log('key --> ' + kImg[i].key);
                    //console.log('>>>>>>>>>>>>>>>>');
                    imgCityView = kImg[i].img;
                    keyView = kImg[i].key; //solo di prova
                }
            }
        }
        dispatch(imageSelect(imgCityView));//dispaccia tutte le img che si riferiscono a tale città

        //-----------------------------------------------------------------------------------------------------------
        console.log('*****************************');
        console.log('stato di selectedImages! --> ' + typeof (state.view.selectedImages));
        console.log('*****************************');
        //console.log('selectedImages!');
        //console.log(imgCityView);//
        //console.log('key -->  ' + keyView);
        //console.log('------------------------------');
        //-----------------------------------------------------------------------------------------------------------
    };
};

//---------------------------------------INCOMPLETA---------------------------------------------------------------------
export const previousNext = () => {
    return (dispatch, getState) => {
        let state = getState();
        if (state.view.selectedImages != null) {
            console.log(state.view.selectedImages);
            console.log('*****************************');
            console.log('stato di selectedImages! --> ' + typeof (state.view.selectedImages));
            console.log('*****************************');
        }
        //---------------controllare-----------------------------
        /*let img = [];
        img.push(state.view.selectedImages);
        console.log('STAMPA IMG --> ');
        console.log(img);*/
    };
};


//--------------------------------------------------------------------------------------------------------------------------------
         //utilizzabile_se_dispacci_valori_button_(1, -1)----------------------------------------------
        /*if (num == 1) {
            //++next;
            //dispatch(imageSelect(images[next]));
        }*/
        /*else if (num == -1) {
            //--previous;
            //dispatch(imageSelect(images[previous]));
        }
        //----------------------------------------------------------------------------------------------
//---------------------------------FUNZ_NEXT_PREVIOUS-------------------------------------------------------------------------------
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
//-----------------------------------------------------------------------------------------------------------------------------------
/*
http://www.amsterdam.net/it/wp-content/uploads/sites/20/Prinsengracht.jpg,
http://www.iostudionews.it/wp-content/uploads/2016/08/AMSTERDAM-Netherlands-1_01.jpg,
https://o.aolcdn.com/images/dims3/GLOB/crop/4320x2273+0+303/resize/1200x630!/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F600318eae7ff92e9a019ddac9ef567d%2F205142277%2Ftulips-with-canal-houses-of-amsterdam-picture-id4672328907
*/