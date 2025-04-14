import { Header, UserInput, Buttons } from "@/components";

export const ThirdStep = ({
  previousStep,
  addStep,
  currentStep,
  handleInputChange,
  formValues,
}) => {
  const { dateOfBirth } = formValues;

  return (
    <div className="w-120 bg-white flex  flex-col  pt-8  items-center">
      <Header />
      <div>
        <UserInput
          name="dateOfBirth"
          type="date"
          label="Date of birth"
          value={dateOfBirth}
          onChange={handleInputChange}
        />
      </div>
      <Buttons
        previousStep={previousStep}
        addStep={addStep}
        currentStep={currentStep}
      />
    </div>
  );
};
