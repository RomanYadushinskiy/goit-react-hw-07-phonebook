import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from '../../redux/slice';

import './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const getChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={getChangeFilter}
        placeholder="Find contacts by name"
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  getChangeFilter: PropTypes.func,
};

