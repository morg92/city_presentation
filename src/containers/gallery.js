import { connect } from 'react-redux';
import Gallery from '../components/gallery.js';
//import { toIcon } from '../actions/actions.js';

let mapStateToProps = (state) => {
    return ({
        immagini: state.images.img
    });
};
/*
let mapDispatchToProps = (dispatch) => {
    return ({
        dispatchToIcon: (url) => {
            dispatch(toIcon(url));
        }
    });
};
*/
export default connect(
    mapStateToProps,
    //mapDispatchToProps
    null
)(Gallery);