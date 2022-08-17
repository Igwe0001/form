import React from "react";
import useInput from "../hooks/user-inputs";

const Form = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangedHandler: nameChangehandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredlastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameHasError,
    valueChangedHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangedHandler: emailChangehandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordisValid,
    hasError: passwordHasError,
    valueChangedHandler: passwordChangehandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.length > 6);

  const nameInputclasses = nameInputHasError ? "input-error icon" : "input";
  const nameInputPlaceHolder = nameInputHasError ? "" : "First Name";

  const lastNameInputClasees = lastNameHasError ? "input-error icon" : "input";
  const lastNameInputPlaceHolder = lastNameHasError ? "" : "Last Name";

  const emailClasses = emailHasError ? "input-error icon" : "input";
  const emailPlaceholder = emailHasError
    ? "email@example/com"
    : "Email Address";

  const passwordClasees = passwordHasError ? "input-error icon" : "input";
  const passwordPlaceHolder = passwordHasError ? "" : "password";

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredLastNameIsValid && !enteredEmailIsValid && !enteredPasswordisValid) {
      return     
    }

    resetEmailInput()
    resetLastName()
    resetPasswordInput()
    resetNameInput()
  };

  return (
    <div className="mt-12 md:mt-0">
      <span className="block py-6 px-20 w-full text-center bg-accentBlue text-white rounded-md">
        <strong>Try it free 7 days</strong> then $20/mo. thereafter
      </span>
      <form
        className="my-8 w-full text-center bg-white p-6 rounded-md"
        onSubmit={submitHandler}
      >
        <div className="my-4">
          <input
            type="text"
            className={nameInputclasses}
            placeholder={nameInputPlaceHolder}
            onChange={nameChangehandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="text-right italic text-primaryRed">
              First Name cannot be empty
            </p>
          )}
        </div>
        <div className="my-4">
          <input
            type="text"
            className={lastNameInputClasees}
            placeholder={lastNameInputPlaceHolder}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredlastName}
          />
          {lastNameHasError && (
            <p className="text-right italic text-primaryRed">
              Last Name cannot be empty
            </p>
          )}
        </div>
        <div className="my-4">
          <input
            type="email"
            className={emailClasses}
            placeholder={emailPlaceholder}
            onChange={emailChangehandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailHasError && (
            <p className="text-right italic text-primaryRed">
              Looks like their is not an email
            </p>
          )}
        </div>
        <div className="my-4">
          <input
            type="password"
            className={passwordClasees}
            placeholder={passwordPlaceHolder}
            onChange={passwordChangehandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
          />
          {passwordHasError && (
            <p className="text-right italic text-primaryRed">
              Password cannot be empty
            </p>
          )}
        </div>
        <button className="p-4 bg-primaryGreen font-bold text-white w-full rounded-md uppercase tracking-wider">
          Claim your free trial
        </button>
        <span className="py-2 block text-grayish w-10/12 mx-auto">
          By clicking the button, you are agreeing to our
          <strong className="text-primaryRed"> Terms and Services</strong>
        </span>
      </form>
    </div>
  );
};

export default Form;
