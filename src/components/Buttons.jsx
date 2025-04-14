export const Buttons = ({ addStep, previousStep, currentStep }) => {
  console.log("current:", currentStep);
  return (
    <div className="mt-[162px] mb-8  flex w-104 gap-x-2">
      {currentStep > 0 && (
        <button
          onClick={previousStep}
          className="w-32 rounded-md h-11 border border-[#CBD5E1] transition-all duration-300 hover:bg-gray-100"
        >
          &lt; Back
        </button>
      )}
      <button
        onClick={addStep}
        className="font-medium text-base  w-104 rounded-md h-11 bg-[#121316] text-white transition-all duration-300 hover:opacity-80 cursor-pointer"
      >
        Continue {currentStep + 1}/3 &gt;{" "}
      </button>
    </div>
  );
};
