import { connect } from 'react-redux';
import Icon from '../components/icon.js';
import { previousNext } from '../actions/actions.js';

let mapStateToProps = (selectedImages) => {
    return {
        selectedImages
    };
};

let mapDispatchToProps = (dispatch) => {        //modifiche 15:45
    return ({
        dispatchToSetButton: () => {
            dispatch(previousNext());
        }
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps                //modifiche 15:45
)(Icon);