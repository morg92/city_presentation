import { connect } from 'react-redux';
import Icon from '../components/icon.js';

let mapStateToProps = (selectedImages) => {
    return {
        selectedImages
    };
};

export default connect(
    mapStateToProps,
    null
)(Icon);