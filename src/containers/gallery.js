import { connect } from 'react-redux';
import Gallery from '../components/gallery.js';
import { toIcon } from '../actions/actions.js';

let mapStateToProps = (state) => {
    return ({
        immagini: state.images.img,
        infoImg: state.images.infoImg,
        selectedInfo: state.images.selectedInfo
    });
};

let mapDispatchToProps = (dispatch) => {
    return ({
        dispatchIcon: (value) => {
            dispatch(toIcon(value));
        }
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);