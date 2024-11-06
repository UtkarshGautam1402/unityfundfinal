import React from "react";
import { motion } from "framer-motion";

const fadeAnimation = (delay) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const OurVision = () => {
  return (
    <div className="container my-16 bg-white dark:bg-gray-900 dark:text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <motion.div
          variants={fadeAnimation(0.2)}
          initial="initial"
          whileInView="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-green-800 dark:bg-slate-800"
        >
          <h1 className="text-xl font-semibold">OUR VISION</h1>
          <p>
          Unity Fund envisions a world where every individual, regardless of their background or circumstances, has access to quality education, healthcare, and essential resources by getting the help needed by our donation campaign.
          </p>
          <a
            href="#"
            className="inline-block hover:text-primary border-b hover:border-primary"
          >
          </a>
        </motion.div>
        <motion.div
          variants={fadeAnimation(0.4)}
          initial="initial"
          whileInView="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-yellow-500 dark:bg-slate-800"
        >
          <h1 className="text-xl font-semibold">HOW WE WORK</h1>
          <p>
          We embrace innovative funding by accepting cryptocurrency, making it easy for supporters worldwide to contribute while ensuring transparency and accountability. Through collaboration, empowerment, and responsible resource use, Unity Fund is committed to creating lasting, positive change in underserved communities.
          </p>
          <a
            href="#"
            className="inline-block hover:text-primary border-b hover:border-primary"
          >
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default OurVision;
