import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import { MdCall, MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContactsItem } from "../../redux/contacts-operation";
// import { loadingForDelete } from "../../redux/contacts-selector";
export default function ContactItem({ id, name, number, isLoadingForBtn }) {
  const dispatch = useDispatch();
  return (
    <li key={id} className={s.list_item}>
      <p>{name}</p>
      <a href="tel:{number}" className={s.link_to_call}>
        <MdCall />
        {number}
      </a>

      <button
        type="button"
        className={s.btnItem}
        onClick={() => dispatch(deleteContactsItem(id))}
      >
        {isLoadingForBtn ? "..." : <MdOutlineDeleteOutline />}
        {/* <MdOutlineDeleteOutline /> */}
      </button>
    </li>
  );
}

ContactItem.propType = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
