"use client";

export const UserInput = ({
  ref,
  name,
  type,
  label,
  error,
  hidden,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex w-104 gap-y-2 flex-col mt-7">
      <label className="text-sm font-semibold text-[#334155]  flex gap-x-1">
        {label}
        <span className="text-red-600">*</span>
      </label>
      <div>
        <input
          ref={ref}
          name={name}
          type={type}
          hidden={hidden}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full p-3 text-base rounded-md outline    ${
            error ? "outline-red-500" : "outline-[#CBD5E1]"
          } outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]`}
        />
      </div>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};
