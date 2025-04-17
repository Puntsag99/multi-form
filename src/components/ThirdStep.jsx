"use client";

import Image from "next/legacy/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Header, UserInput, Buttons } from "@/components";
import { isEmpty } from "@/utils/is-empty";

const validStepThree = ({ dateOfBirth, profileImage }) => {
  const validationErrors = {};

  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (isEmpty(dateOfBirth)) {
    validationErrors.dateOfBirth = "Төрсөн өдрөө оруулна уу.";
  } else if (birthDate > today) {
    validationErrors.dateOfBirth =
      "Төрсөн өдөр одоогийн огнооноос өмнө байх ёстой.";
  } else if (age < 18 || (age === 18 && monthDiff < 0)) {
    validationErrors.dateOfBirth = "Та 18 ба түүнээс дээш настай байх ёстой.";
  }

  if (!profileImage) {
    validationErrors.profileImage = "Порфайл зурагаа оруулна уу.";
  }

  const isFormValid = Object.keys(validationErrors).length === 0;

  return { isFormValid, validationErrors };
};

export const ThirdStep = ({
  ref,
  hidden,
  errors,
  addStep,
  formValues,
  currentStep,
  previousStep,
  updateFormErrors,
  handleInputChange,
}) => {
  const { dateOfBirth, profileImage } = formValues;

  const { dateOfBirth: errorDateOfBirth, profileImage: errorProfileImage } =
    errors;

  const handleSubmit = (event) => {
    event.preventDefault();

    const { isFormValid, validationErrors } = validStepThree(formValues);

    if (isFormValid) {
      localStorage.removeItem("FromData");

      addStep();
      return;
    }

    updateFormErrors(validationErrors);
  };

  const inputImageRef = useRef(null);

  const openBrowse = () => {
    inputImageRef.current?.click();
  };

  const handleChange = (event) => {
    const file = Array.from(event.target.files)[0];
    if (file) {
      setPreviewLink(URL.createObjectURL(file));

      handleInputChange({
        target: {
          name: "profileImage",
          value: file,
        },
      });
    }
  };

  const [previewlink, setPreviewLink] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (event) => {
    event.preventDefault();
    const file = Array.from(event.dataTransfer.files)[0];
    setPreviewLink(URL.createObjectURL(file));

    handleInputChange({
      target: {
        name: "profileImage",
        value: file,
      },
    });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-120 bg-white flex  flex-col  pt-8  items-center">
        <Header />

        <div>
          <UserInput
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            label="Date of birth"
            error={errorDateOfBirth}
            onChange={handleInputChange}
          />
        </div>

        <UserInput
          type="file"
          hidden="hidden"
          name="profileImage"
          ref={inputImageRef}
          label="Profile image"
          onChange={handleChange}
          error={errorProfileImage}
        />

        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={openBrowse}
          className={`${
            isDragging
              ? "border border-dashed border-black"
              : " border  border-amber-950"
          } bg-gray-100 h-45 w-104 flex flex-col items-center justify-center rounded-md cursor-pointer relative`}
        >
          {previewlink ? (
            <Image
              layout="fill"
              src={previewlink}
              alt="Uploaded image"
              className="object-cover"
            />
          ) : (
            <div className="flex flex-col">
              <Image width={28} height={28} src="/img/Add.svg" alt="add" />
              Browse or Drop Image
            </div>
          )}
        </div>

        <Buttons
          addStep={handleSubmit}
          currentStep={currentStep}
          previousStep={previousStep}
        />
      </div>
    </motion.div>
  );
};
