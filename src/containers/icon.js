import { connect } from 'react-redux';
import Icon from '../components/icon.js';
import { previousNext } from '../actions/actions.js';

let mapStateToProps = (state) => {
    return {
        selectedImages: state.selectedImages
    };
};

let mapDispatchToProps = (dispatch) => {
    return ({
        dispatchToSetButton: (num) => {
            dispatch(previousNext(num));
        }
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Icon);