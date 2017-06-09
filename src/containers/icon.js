import { connect } from 'react-redux';
import Icon from '../components/icon.js';
import { toIcon } from '../actions/actions.js';

let mapStateToProps = (state) => {
    return {
        selectedImages: state.view.selectedImages,
        selectedInfo: state.view.selectedInfo,
        cityName: state.view.cityName
    };
};

let mapDispatchToProps = (dispatch) => {
    return ({
        dispatchToSetButton: (value) => {
            dispatch(toIcon(value));
        }
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Icon);