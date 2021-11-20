import React, { useEffect } from "react";
import s from "./ContactList.module.css";
import Notification from "../Notification/Notification";
import ContactItem from "./contactItem";
import { useSelector, useDispatch } from "react-redux";
import {
  getVisibleItems,
  loadingForList,
  loadingForDelete,
} from "../../redux/contacts-selector";
import { fetchContactsItem } from "../../redux/contacts-operation";
import LoaderSpinner from "../Loader-spinner/Loader-spinner";

export default function ContactList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(loadingForList);
  const isLoadingForBtn = useSelector(loadingForDelete);

  useEffect(() => {
    dispatch(fetchContactsItem());
  }, [dispatch]);

  const contactItems = [...useSelector(getVisibleItems)].sort((a, b) => {
    const aa = a.name.toLowerCase();
    const bb = b.name.toLowerCase();
    return aa > bb ? 1 : -1;
  });

  console.log("contactItems", contactItems);
  return (
    <>
      {isLoading && <LoaderSpinner />}
      {/* {isError && <p>...:(...</p>}  */}
      {contactItems && contactItems.length === 0 && <Notification />}

      {contactItems ? (
        <ul className={s.contacts_list}>
          {contactItems.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              isLoadingForBtn={isLoadingForBtn}
            />
          ))}
        </ul>
      ) : null}
    </>
  );
}
