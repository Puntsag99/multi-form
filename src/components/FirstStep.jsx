import { Header, UserInput } from "@/components";
export const FirstStep = () => {
  return (
    <div>
      <div className="w-120 bg-white flex  flex-col items-center ">
        <Header />
        <UserInput
          label="First Name"
          type="text"
          placeholder="write first name"
        />
      </div>
    </div>
  );
};
