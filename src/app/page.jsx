"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FirstStep, SecondStep, ThirdStep, FinallyStep } from "@/components";

const initialFormValues = {
  email: "",
  password: "",
  lastName: "",
  userName: "",
  firstName: "",
  dateOfBirth: "",
  phoneNumber: "",
  profileImage: "",
  confirmPassword: "",
};

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState(initialFormValues);

  console.log("values:", formValues);

  const addStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const StepMotion = [FirstStep, SecondStep, ThirdStep, FinallyStep][
    currentStep
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    console.log("input value type:", typeof value);

    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  return (
    <div className="h-screen bg-[#F4F4F4] flex justify-center pt-[182px]">
      <AnimatePresence mode="wait">
        <StepMotion
          addStep={addStep}
          formValues={formValues}
          currentStep={currentStep}
          previousStep={previousStep}
          handleInputChange={handleInputChange}
        />
      </AnimatePresence>
    </div>
  );
};

export default Home;
