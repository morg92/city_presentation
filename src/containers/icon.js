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
        dispatchToSetButton: (event) => {
            dispatch(previousNext(event));
        }
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Icon);