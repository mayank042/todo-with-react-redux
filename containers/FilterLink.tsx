import { connect } from 'react-redux';
import Link from '../components/Link';
import { setVisibilityFilter, TVisibilityFilters } from '../actions';
import { Dispatch } from '../types';
import { State } from '../reducers';

interface StateFromProps {
  active: boolean;
}

interface DispatchFromProps {
  onClick: () => void;
}

interface FilterLinkProps {
  filter: TVisibilityFilters;
}

function mapStateToProps(state: State, ownProps: FilterLinkProps) {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: FilterLinkProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect<StateFromProps, DispatchFromProps, FilterLinkProps>(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
