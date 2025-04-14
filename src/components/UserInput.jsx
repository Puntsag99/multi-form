export const UserInput = ({ label, type, placeholder }) => {
  return (
    <div className="flex w-104 gap-y-2 flex-col mt-7">
      <label className="text-sm font-semibold text-[#334155]">
        {label} <span className="text-red-600">*</span>
      </label>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full p-3 text-base rounded-md outline outline-[#CBDE1] focus:outline-[#0CA5E9] text-[#121316]"
        />
      </div>
    </div>
  );
};
