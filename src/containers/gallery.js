import { connect } from 'react-redux';
import Gallery from '../components/gallery.js';
//import { toIcon } from '../actions/actions.js';

let mapStateToProps = (state) => {
    return ({
        immagini: state.images.img
    });
};

export default connect(
    mapStateToProps,
    null
)(Gallery);