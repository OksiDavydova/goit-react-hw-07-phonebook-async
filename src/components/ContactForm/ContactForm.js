import React from "react";
import { toast } from "react-toastify";
import s from "./ContactForm.module.css";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  getContactsItems,
  loadingForForm,
} from "../../redux/contacts-selector";
import { addContactItem } from "../../redux/contacts-operation";

function ContactForm() {
  const isLoadingAddBtn = useSelector(loadingForForm);
  const contacts = useSelector(getContactsItems);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const onSubmit = (data) => {
    const { name, number } = data;
    const normalizedName = name.toLowerCase();
    const theFirstCondition = contacts.find(
      (contact) => contact.name.toLowerCase() === normalizedName
    );
    const theSecondCondition = contacts.find(
      (contact) => contact.number === number
    );

    if (theFirstCondition) {
      return toast.error(`${name} is already in contacts list`);
    } else if (theSecondCondition) {
      return toast.error(`${number} is already in contacts list`);
    } else {
      dispatch(addContactItem(data));
    }
    resetInputField();
  };

  const resetInputField = () => {
    resetField("name");
    resetField("number");
  };

  return (
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <label htmlFor="nameInput" className={s.label}>
          Name:
          {errors.name?.type === "required" && (
            <span className={s.errorMessage}> is required*</span>
          )}
          <input
            type="text"
            className={s.input}
            id="nameInput"
            {...register("name", {
              required: true,
              maxLength: 80,
              pattern:
                "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
              title:
                "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
            })}
          />
        </label>

        <label htmlFor="telInput" className={s.label}>
          Number:
          {errors.number?.type === "required" && (
            <span className={s.errorMessage}> is required *</span>
          )}
          <input
            type="tel"
            className={s.input}
            id="telInput"
            {...register("number", {
              required: true,
              maxLength: 12,
              pattern:
                "/+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}/i",
            })}
          />
        </label>

        <br />
        <button type="submit" className={s.btnSubmit}>
          {isLoadingAddBtn ? "Adding..." : "Add contact"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
