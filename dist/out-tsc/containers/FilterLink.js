import { connect } from 'react-redux';
import Link from '../components/Link';
import { setVisibilityFilter } from '../actions';
function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
}
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        onClick: function () {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    };
};
var FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
export default FilterLink;
//# sourceMappingURL=FilterLink.js.map