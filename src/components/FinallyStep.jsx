import Image from "next/legacy/image";
import { motion } from "framer-motion";

export const FinallyStep = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-120 flex flex-col gap-y-2 items-start bg-white py-8 px-8 ">
        <Image width={60} height={60} src="/img/Main.svg" alt="pine" />
        <div className="flex items-center gap-x-1 ">
          <h1 className="font-semibold text-[26px] ">You're All Set!</h1>
          <Image width={26} height={26} src="/img/fire.png" alt="emoji" />
        </div>
        <p className="text-[#8E8E8E] font-normal text-lg">
          Please provide all current information accurately.
        </p>
      </div>
    </motion.div>
  );
};
