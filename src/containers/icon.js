import { connect } from 'react-redux';
import Icon from '../components/icon.js';

let mapStateToProps = ({ ui }) => {
    ui;                     //TODO ---
};

export default connect(
    mapStateToProps,
    null
)(Icon);