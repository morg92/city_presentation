import { connect } from 'react-redux';
import Icon from '../components/icon.js';
import { setButton } from '../actions/actions.js';

let mapStateToProps = (selectedImages) => {
    return {
        selectedImages
    };
};

let mapDispatchToProps = (dispatch) => {        //modifiche 15:45
    return ({
        dispatchToSetButton: () => {
            dispatch(setButton());
        }
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps                //modifiche 15:45
)(Icon);