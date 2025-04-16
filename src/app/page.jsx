"use client";

import { useState, useEffect } from "react";
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
  const [errors, setErrors] = useState(initialFormValues);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateFormErrors = (errors) => {
    setErrors((previousErrors) => ({ ...previousErrors, ...errors }));
  };

  const StepMotion = [FirstStep, SecondStep, ThirdStep, FinallyStep][
    currentStep
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setErrors((previousValues) => ({ ...previousValues, [name]: "" }));
    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const addStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="h-screen bg-[#F4F4F4] flex justify-center pt-[182px]">
      <AnimatePresence mode="wait">
        <StepMotion
          errors={errors}
          addStep={addStep}
          setErrors={setErrors}
          formValues={formValues}
          currentStep={currentStep}
          previousStep={previousStep}
          updateFormErrors={updateFormErrors}
          handleInputChange={handleInputChange}
        />
      </AnimatePresence>
    </div>
  );
};

export default Home;
