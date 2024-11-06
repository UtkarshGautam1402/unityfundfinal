import React from "react";
import HeroImg from "../../assets/image2.jpeg";
import { motion } from "framer-motion";
import axios from "axios";

const bgStyle = {
  backgroundImage: `url(${HeroImg})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  width: "100%",
};
const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Hero = () => {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    amount: 0,
  });

  const handleClick = (e) => {
    const name = e.target.name;
    setData((previousData) => {
      return {
        ...previousData,
        [name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("https://unityfund.onrender.com/api/v1/checkout", {
        ...data,
        amount: parseInt(data.amount),
      })
      .then((res) => {
        console.log(res.data);
        const { url } = res.data?.result;
        window.location.href = url;
      });
    // we will handle the data after working on backend code
  };

  return (
    <div style={bgStyle}>
      <div className="min-h-[650px] md:min-h-[750px] bg-gradient-to-r from-black/80 to-primary/60 pt-32 pb-10 md:pt-48">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white">
            {/* Hero Text section */}
            <div className="flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px]">
              <motion.h1
                variants={FadeUp(0.2)}
                initial="initial"
                animate="animate"
                className="text-5xl lg:text-7xl font-bold"
              >
                Join Us in Changing Lives
              </motion.h1>
              <motion.p
                variants={FadeUp(0.4)}
                initial="initial"
                animate="animate"
              >
               Unity Fund is a newly established student-led non-profit organization created in 2024 with a mission to bridge the gap to donate to the underserved communities. Formed by a team of students passionate about social equity, Unity Fund seeks to empower individuals by providing easy access for them to donate and improve the lives of the needy people.
              </motion.p>
              <div className="space-x-4">
                
              </div>
            </div>
            {/* Form section */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="w-[90%] md:w-[400px] mx-auto  p-4 bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md"
            >
              <div>
                <h1 className="text-lg text-center font-semibold">
                  Quick Donation Form
                </h1>
                <div className="flex items-center justify-center gap-8 py-4">
                  <button
                    onClick={() => setData({ ...data, amount: 1 })}
                    className="button-square"
                  >
                    $01
                  </button>
                  <button
                    onClick={() => setData({ ...data, amount: 5 })}
                    className="button-square"
                  >
                    $05
                  </button>
                  <button
                    onClick={() => setData({ ...data, amount: 10 })}
                    className="button-square"
                  >
                    $10
                  </button>
                  <button
                    onClick={() => setData({ ...data, amount: 99 })}
                    className="button-square"
                  >
                    $99
                  </button>
                </div>
                {/* input section here */}
                <div className="space-y-6">
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    onChange={handleClick}
                    placeholder="Amount"
                    defaultValue={1}
                    value={data.amount}
                    min={1}
                    max={100}
                    className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
                  />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleClick}
                    placeholder="Name"
                    className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleClick}
                    placeholder="Email"
                    className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
                  />
                  <button
                    className="btn-primary w-full rounded-full"
                    onClick={handleSubmit}
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
