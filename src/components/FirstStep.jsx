"use client";
import { motion } from "framer-motion";
import { Header, UserInput, Buttons } from "@/components";

export const FirstStep = ({
  addStep,
  formValues,
  currentStep,
  handleInputChange,
}) => {
  const { firstName, lastName, userName } = formValues;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-120 bg-white flex  flex-col  pt-8  items-center ">
        <Header />
        <div className="flex flex-col gap-y-3">
          <UserInput
            type="text"
            name="firstName"
            value={firstName}
            label="First Name"
            onChange={handleInputChange}
            placeholder="Your first name"
          />

          <UserInput
            type="text"
            name="lastName"
            gerert
            value={lastName}
            label="Last name"
            onChange={handleInputChange}
            placeholder="Yout last name"
          />

          <UserInput
            type="text"
            name="userName"
            value={userName}
            label="User name"
            placeholder="Your username"
            onChange={handleInputChange}
          />
        </div>

        <Buttons addStep={addStep} currentStep={currentStep} />
      </div>
    </motion.div>
  );
};
