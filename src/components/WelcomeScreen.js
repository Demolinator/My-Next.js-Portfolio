"use client";
import React, { useEffect, useState } from "react";
import anime from "animejs";
import { motion } from "framer-motion";

const WelcomeScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const animate = () => {
      const loader = anime.timeline({
        complete: () => finishLoading(),
      });

      loader.add({
        targets: "#welcome",
        delay: 0,
        scale: 1,
        duration: 1500,
        easing: "easeInOutExpo",
      });
    };

    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div
      className="flex items-center justify-center fixed top-0 bottom-0  w-screen h-screen z-30 bg-primary dark:bg-primaryDark"
      isMounted={isMounted}
    >
      <motion.h1
        id="welcome"
        className="font-bold text-8xl text-dark lg:!text-6xl md:!text-5xl sm:!text-4xl"
        initial={{ opacity: "0%" }}
        animate={{ opacity: "100%" }}
        transition={{ duration: 1 }}
      >
        Welcome!
      </motion.h1>
    </div>
  );
};

export default WelcomeScreen;
