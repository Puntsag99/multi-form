"use client";
import { motion } from "framer-motion";
import { Header, UserInput, Buttons } from "@/components";
export const SecondStep = ({
  addStep,
  previousStep,
  currentStep,
  formValues,
  handleInputChange,
}) => {
  const { email, phoneNumber, password, confirmPassword } = formValues;
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
            name="email"
            label="Email"
            value={email}
            onChange={handleInputChange}
            type="text"
            placeholder="Your email"
          />

          <UserInput
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleInputChange}
            label="Phone number"
            type="text"
            placeholder="Your phone number"
          />

          <UserInput
            name="password"
            value={password}
            onChange={handleInputChange}
            label="Password"
            type="text"
            placeholder="Your password"
          />

          <UserInput
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleInputChange}
            label="Confirm Password"
            type="text"
            placeholder="Confirm password"
          />
        </div>
        <Buttons
          addStep={addStep}
          previousStep={previousStep}
          currentStep={currentStep}
        />
      </div>
    </motion.div>
  );
};
