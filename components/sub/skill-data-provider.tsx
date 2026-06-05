"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex flex-col items-center justify-center min-w-[90px] gap-2 p-2 hover:scale-110 transition-transform duration-200"
    >
      <div className="h-[80px] flex items-center justify-center">
        <Image src={`/skills/${src}`} width={width} height={height} alt={name} />
      </div>
      <span className="text-gray-300 text-[11px] font-semibold text-center mt-1 select-none">{name}</span>
    </motion.div>
  );
};
