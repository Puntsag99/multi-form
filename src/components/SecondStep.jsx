import { Header, UserInput, Buttons } from "@/components";
export const SecondStep = ({ addStep, previousStep, currentStep }) => {
  return (
    <div>
      <div className="w-120 bg-white flex  flex-col  pt-8  items-center ">
        <Header />
        <div className="flex flex-col gap-y-3">
          <UserInput label="Email" type="text" placeholder="Your email" />

          <UserInput
            label="Phone number"
            type="text"
            placeholder="Your phone number"
          />

          <UserInput label="Password" type="text" placeholder="Your password" />

          <UserInput
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
    </div>
  );
};
