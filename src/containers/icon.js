import { connect } from 'react-redux';
import Icon from '../components/icon.js';
import { toIcon } from '../actions/actions.js';

let mapStateToProps = (state) => {
    return {
        selectedImages: state.view.selectedImages
    };
};

let mapDispatchToProps = (dispatch) => {
    return ({
        dispatchToSetButton: (num) => {
            dispatch(toIcon(num));
        }
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Icon);