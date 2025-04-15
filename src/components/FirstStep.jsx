"use client";
import { motion } from "framer-motion";
import { Header, UserInput, Buttons } from "@/components";

export const FirstStep = ({
  addStep,
  currentStep,
  handleInputChange,
  formValues,
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
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            label="First Name"
            type="text"
            placeholder="Your first name"
          />

          <UserInput
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            label="Last name"
            type="text"
            placeholder="Yout last name"
          />

          <UserInput
            name="userName"
            value={userName}
            onChange={handleInputChange}
            label="User name"
            type="text"
            placeholder="Your username"
          />
        </div>

        <Buttons addStep={addStep} currentStep={currentStep} />
      </div>
    </motion.div>
  );
};
