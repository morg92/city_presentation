import { combineReducers } from 'redux';
import loading from './loading';
import view from './view';
import images from './images';
import choose from './choose';

const reducers = combineReducers({
    loading,
    view,
    images,
    choose
});

export default reducers;