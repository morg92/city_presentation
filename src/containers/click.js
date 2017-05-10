import { connect } from 'react-redux';
import Click from '../components/click.js';
import { goEvent } from '../actions/actions.js';

let mapDispatchToProps = (dispatch) => {
    return ({
        dispatchList: (event) => {
            dispatch(goEvent(event));
        }
    });
};

export default connect(
    null,
    mapDispatchToProps
)(Click);