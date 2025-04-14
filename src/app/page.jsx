"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FirstStep, SecondStep, ThirdStep, FinallyStep } from "@/components";
import { useState } from "react";

const initialFormValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  dateOfBirth: "",
  profileImage: "",
};

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState(initialFormValues);

  console.log("end yu bna:", formValues);

  const addStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  // console.log(typeof addStep);

  const previousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const StepMotion = [FirstStep, SecondStep, ThirdStep, FinallyStep][
    currentStep
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  return (
    <div className="h-screen bg-[#F4F4F4] flex justify-center pt-[182px]">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
        >
          <StepMotion
            addStep={addStep}
            previousStep={previousStep}
            currentStep={currentStep}
            handleInputChange={handleInputChange}
            formValues={formValues}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
