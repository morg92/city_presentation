import { connect } from 'react-redux';
import Gallery from '../components/gallery.js';
import { toIcon } from '../actions/actions.js';

let mapDispatchToProps = (dispatch) => {
    return ({
        dispatchToIcon: (value) => {
            dispatch(toIcon(value));
        }
    });
};

export default connect(
    null,
    mapDispatchToProps
)(Gallery);