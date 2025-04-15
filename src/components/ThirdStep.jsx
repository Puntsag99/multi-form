"use client";

import Image from "next/legacy/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Header, UserInput, Buttons } from "@/components";

export const ThirdStep = ({
  ref,
  hidden,
  addStep,
  formValues,
  currentStep,
  previousStep,
  handleInputChange,
}) => {
  const { dateOfBirth } = formValues;

  const inputImageRef = useRef(null);

  const openBrowse = () => {
    inputImageRef.current?.click();
  };

  const [previewlink, setPreviewLink] = useState("");

  const handleChange = (event) => {
    const file = Array.from(event.target.files)[0];
    setPreviewLink(URL.createObjectURL(file));
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
        />

        <div
          onClick={openBrowse}
          className="bg-gray-100 h-45 w-104 flex flex-col items-center justify-center rounded-md cursor-pointer"
        >
          <Image width={28} height={28} src={previewlink} alt="addImage" />
          Browse or Drop Image
        </div>

        <Buttons
          addStep={addStep}
          currentStep={currentStep}
          previousStep={previousStep}
        />
      </div>
    </motion.div>
  );
};
