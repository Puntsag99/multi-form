"use client";

import Image from "next/image";

export const Header = () => {
  return (
    <div className="w-104 flex flex-col gap-y-2 items-start">
      <Image width={60} height={60} src="/img/Main.svg" alt="pine" />
      <div className="flex items-center gap-x-1">
        <h1 className="font-semibold text-[26px] ">Join Us!</h1>
        <Image width={26} height={26} src="/img/emoji.webp" alt="emoji" />
      </div>
      <p className="text-[#8E8E8E] font-normal text-lg">
        Please provide all current information accurately.
      </p>
    </div>
  );
};
