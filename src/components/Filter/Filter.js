import React from "react";
import s from "./Filter.module.css";
import actions from "../../redux/contacts-actions";
import { useSelector, useDispatch } from "react-redux";
import { filterValue } from "../../redux/contacts-selector";
const { changeFilter } = actions;

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(filterValue);

  return (
    <div className={s.filter_overlay}>
      <label className={s.filter_label}>
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={({ target }) => dispatch(changeFilter(target.value.trim()))}
          className={s.filter_input}
        />
      </label>
    </div>
  );
}

// Filter.propTypes = {
//   filter: PropTypes.string,
//   changeFilter: PropTypes.func,
// };

// const mapStateToProps = (state) => {
//   return {
//     filter: state.filter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onChangeFilter: (e) => dispatch(changeFilter(e.target.value.trim())),
//   };
// };
