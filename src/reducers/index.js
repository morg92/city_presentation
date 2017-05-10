import { combineReducers } from 'redux';
import loading from './loading';
import view from './view';
import images from './images';

const reducersCombine = combineReducers({
    loading,
    view,
    images
});

export default reducersCombine;