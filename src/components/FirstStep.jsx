"use client";
import { motion, steps } from "framer-motion";
import { Header, UserInput, Buttons } from "@/components";
import { useEffect } from "react";

const isEmpty = (value) => !value?.trim();
const validateStepOne = ({ firstName, lastName, userName }) => {
  const validationErrors = {};

  if (isEmpty(firstName)) {
    validationErrors.firstName = "Нэрээ оруулна уу.";
  }
  if (isEmpty(lastName)) {
    validationErrors.lastName = "Овгоо оруулна уу.";
  }
  if (isEmpty(userName)) {
    validationErrors.userName = "Хэрэглэгчийн нэрээ оруулна уу.";
  }

  const isFormValid = Object.keys(validationErrors).length === 0;

  return { isFormValid, validationErrors };
};

export const FirstStep = ({
  errors,
  addStep,
  formValues,
  currentStep,
  updateFormErrors,
  handleInputChange,
}) => {
  const { firstName, lastName, userName } = formValues;

  const {
    firstName: errorFirstName,
    lastName: errorlastName,
    userName: errorUsername,
  } = errors;

  const handleSubmit = (event) => {
    event.preventDefault();

    const { isFormValid, validationErrors } = validateStepOne(formValues);

    if (isFormValid) {
      localStorage.setItem(
        "FromData",
        JSON.stringify({ ...formValues, step: 0 })
      );

      addStep();
      return;
    }

    updateFormErrors(validationErrors);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <form
        // onSubmit={handleSubmit}
        className="w-120 bg-white flex  flex-col  pt-8  items-center"
      >
        <Header />
        <div className="flex flex-col gap-y-3">
          <UserInput
            type="text"
            name="firstName"
            value={firstName}
            label="First Name"
            error={errorFirstName}
            onChange={handleInputChange}
            placeholder="Your first name"
          />

          <UserInput
            type="text"
            name="lastName"
            value={lastName}
            label="Last name"
            error={errorlastName}
            onChange={handleInputChange}
            placeholder="Yout last name"
          />

          <UserInput
            type="text"
            name="userName"
            value={userName}
            label="User name"
            error={errorUsername}
            placeholder="Your username"
            onChange={handleInputChange}
          />
        </div>

        <Buttons addStep={handleSubmit} currentStep={currentStep} />
      </form>
    </motion.div>
  );
};
