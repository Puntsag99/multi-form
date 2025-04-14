import Image from "next/legacy/image";

export const Header = () => {
  return (
    <div className="w-104">
      <img src="/img/Main.svg" alt="" className="w-15 h-15" />
      <div className="flex gap-x-1">
        <h1 className="font-semibold text-[26px] ">Join us!</h1>
        <Image width={30} height={5} src="/img/emoji.webp" alt="emoji" />
      </div>
      <p className="text-[#8E8E8E] font-normal  text-lg">
        Please provide all current information accurately.
      </p>
    </div>
  );
};
