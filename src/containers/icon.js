import { connect } from 'react-redux';
import Icon from '../components/icon.js';
import { previousNext } from '../actions/actions.js';

let mapStateToProps = (state) => {
    return {
        selectedImages: state.view.selectedImages
    };
};

let mapDispatchToProps = (dispatch) => {
    return ({
        dispatchToSetButton: (value) => {
            dispatch(previousNext(value));
        }
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Icon);