import { connect } from 'react-redux';
import List from '../components/list.js';
import { listToGallery } from '../actions/actions.js';

let mapStateToProps = (state) => {
    return ({
        infoCity: state.choose.info
    });
};

let mapDispatchToProps = (dispatch) => {
    return ({
        dispatchGallery: (value) => {
            dispatch(listToGallery(value));
        }
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);