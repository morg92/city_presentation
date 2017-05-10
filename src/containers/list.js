import { connect } from 'react-redux';
import List from '../components/list.js';
import { listToGallery } from '../actions/actions.js';

let mapDispatchToProps = (dispatch) => {
    return ({
        dispatchGallery: (value) => {
            dispatch(listToGallery(value));
        }
    });
};

export default connect(
    null,
    mapDispatchToProps
)(List);