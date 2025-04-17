"use client";
import { motion } from "framer-motion";
import { Header, UserInput, Buttons } from "@/components";
import { isEmpty } from "@/utils/is-empty";

const emailRegex = /^[^@\s]+@gmail\.com$/;
const onlyNumbersRegex = /^\d+$/;

const validStepTwo = ({ email, phoneNumber, password, confirmPassword }) => {
  const validationErrors = {};

  if (isEmpty(email)) {
    validationErrors.email = "Мэйл хаягаа оруулна уу.";
  } else if (!emailRegex.test(email)) {
    validationErrors.email = "Зөв мэйл оруулна уу.";
  }

  if (isEmpty(phoneNumber)) {
    validationErrors.phoneNumber = "Утасны дугаараа оруулна уу.";
  } else if (phoneNumber.length < 8) {
    validationErrors.phoneNumber = "8 оронтой дугаар оруулна уу.";
  } else if (!onlyNumbersRegex.test(phoneNumber)) {
    validationErrors.phoneNumber = "Зөв утасны дугаар оруулна уу.";
  }

  if (isEmpty(password)) {
    validationErrors.password = "Нууц үгээ  оруулна уу.";
  } else if (password.length < 6) {
    validationErrors.password = "Нууц үг дор хаяж 6 тэмдэгт байх ёстой.";
  }

  if (isEmpty(confirmPassword)) {
    validationErrors.confirmPassword = "Нууц үгээ давтаж оруулна уу.";
  } else if (confirmPassword !== password) {
    validationErrors.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна.";
  }

  const isFormValid = Object.keys(validationErrors).length === 0;

  return { isFormValid, validationErrors };
};

export const SecondStep = ({
  errors,
  addStep,
  formValues,
  currentStep,
  previousStep,
  updateFormErrors,
  handleInputChange,
}) => {
  const { email, phoneNumber, password, confirmPassword } = formValues;

  const {
    email: errorEmail,
    password: errorPassword,
    phoneNumber: errorPhoneNumber,
    confirmPassword: errorConfirmPassword,
  } = errors;

  const handleSubmit = (event) => {
    event.preventDefault();

    const { isFormValid, validationErrors } = validStepTwo(formValues);

    if (isFormValid) {
      localStorage.setItem(
        "FromData",
        JSON.stringify({ ...formValues, step: 1 })
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
      <div className="w-120 bg-white flex  flex-col  pt-8 items-center ">
        <Header />
        <div className="flex flex-col gap-y-3">
          <UserInput
            type="text"
            name="email"
            label="Email"
            value={email}
            error={errorEmail}
            placeholder="Your email"
            onChange={handleInputChange}
          />

          <UserInput
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            label="Phone number"
            error={errorPhoneNumber}
            onChange={handleInputChange}
            placeholder="Your phone number"
          />

          <UserInput
            type="password"
            name="password"
            label="Password"
            value={password}
            error={errorPassword}
            onChange={handleInputChange}
            placeholder="Your password"
          />

          <UserInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            error={errorConfirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm password"
          />
        </div>
        <Buttons
          addStep={handleSubmit}
          previousStep={previousStep}
          currentStep={currentStep}
        />
      </div>
    </motion.div>
  );
};
