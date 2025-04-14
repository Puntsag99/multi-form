export const UserInput = ({ label, type, placeholder, onChange, name }) => {
  return (
    <div className="flex w-104 gap-y-2 flex-col mt-7">
      <label className="text-sm font-semibold text-[#334155]">
        {label} <span className="text-red-600">*</span>
      </label>
      <div>
        <input
          name={name}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className=" w-full p-3 text-base rounded-md outline outline-[1px_solid_#CBDE1] focus:outline-[#0CA5E9] text-[#121316]"
        />
      </div>
    </div>
  );
};
