"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import AwalImg from "../asset/Awal.jpg";
import BerandaImg from "../asset/BERANDA.jpg";
import LoginImg from "../asset/Login.jpg";
import MencariDriverImg from "../asset/MENCARI DRIVER.jpg";
import PesananSelesaiImg from "../asset/PESANAN SELESAI.jpg";

export const PhotoGallery = ({
  animationDelay = 0.5,
}: {
  animationDelay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // First make the container visible with a fade-in
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay * 1000);

    // Then start the photo animations after a short delay
    const animationTimer = setTimeout(
      () => {
        setIsLoaded(true);
      },
      (animationDelay + 0.4) * 1000,
    ); // Add 0.4s for the opacity transition

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, [animationDelay]);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1, // Reduced from 0.3 to 0.1 since we already have the fade-in delay
      },
    },
  };

  // Animation variants for each photo
  const photoVariants = {
    hidden: () => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    }),
    visible: (custom: {
      x: string;
      y: string;
      order: number;
      rotation: number;
    }) => ({
      x: custom.x,
      y: custom.y,
      rotate: custom.rotation,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15,
      },
    }),
  };

  // Photo positions - horizontal layout with pre-calculated rotations
  const photos = [
    {
      id: 1,
      order: 0,
      x: "-320px",
      y: "15px",
      rotation: -3,
      zIndex: 50,
      direction: "left" as Direction,
      src: AwalImg,
    },
    {
      id: 2,
      order: 1,
      x: "-160px",
      y: "32px",
      rotation: -2,
      zIndex: 40,
      direction: "left" as Direction,
      src: LoginImg,
    },
    {
      id: 3,
      order: 2,
      x: "0px",
      y: "8px",
      rotation: 2,
      zIndex: 30,
      direction: "right" as Direction,
      src: BerandaImg,
    },
    {
      id: 4,
      order: 3,
      x: "160px",
      y: "22px",
      rotation: 3,
      zIndex: 20,
      direction: "right" as Direction,
      src: MencariDriverImg,
    },
    {
      id: 5,
      order: 4,
      x: "320px",
      y: "44px",
      rotation: -1,
      zIndex: 10,
      direction: "left" as Direction,
      src: PesananSelesaiImg,
    },
  ];

  return (
    <div className="mt-20 relative">
      <div className="absolute inset-0 top-[100px] -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>
      {/* <p className="lg:text-md my-2 text-center text-xs font-light uppercase tracking-widest text-slate-400">
        A Journey Through Visual Stories
      </p> */}
      {/* <h3 className="z-20 mx-auto max-w-2xl justify-center bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-clip-text py-3 text-center text-4xl text-transparent md:text-5xl font-extrabold">
        Welcome to My <span className="text-pink-500"> Stories</span>
      </h3> */}
      <div className="relative mb-8 h-[650px] w-full items-center justify-center lg:flex">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex w-full justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <div className="relative h-[544px] w-[250px]">
              {/* Render photos directly to avoid nested stacking context issues */}
              {[...photos].reverse().map((photo) => (
                <Photo
                  key={photo.id}
                  width={250}
                  height={544}
                  src={photo.src}
                  alt="Story photo"
                  direction={photo.direction}
                  x={photo.x}
                  y={photo.y}
                  order={photo.order}
                  zIndex={photo.zIndex}
                  rotation={photo.rotation}
                  variants={photoVariants}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex w-full justify-center">
        {/* <Button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white border-none rounded-full px-8 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(244,114,182,0.4)]">
          View All Stories
        </Button> */}
      </div>
    </div>
  );
};

type Direction = "left" | "right";

export const Photo = ({
  src,
  alt,
  className,
  direction,
  width,
  height,
  x,
  y,
  order,
  zIndex,
  rotation,
  variants,
  ...props
}: {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  direction?: Direction;
  width: number;
  height: number;
  x: string;
  y: string;
  order: number;
  zIndex: number;
  rotation: number;
  variants: any;
}) => {
  return (
    <motion.div
      custom={{ x, y, order, rotation }}
      variants={variants}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.2, zIndex: 9999 }}
      whileHover={{
        scale: 1.1,
        rotateZ: 2 * (direction === "left" ? -1 : 1),
        zIndex: 9999,
      }}
      whileDrag={{
        scale: 1.1,
        zIndex: 9999,
      }}
      style={{
        width,
        height,
        zIndex, // Set base zIndex
        perspective: 400,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: "none",
      }}
      className={cn(
        className,
        "absolute left-0 top-0 mx-auto shrink-0 cursor-grab active:cursor-grabbing shadow-[0_15px_30px_rgba(0,0,0,0.4)]",
      )}
      draggable={false}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl border-4 border-[#3A0719]">
        <Image
          className={cn("rounded-2xl object-cover")}
          fill
          src={src}
          alt={alt}
          {...props}
          draggable={false}
        />
      </div>
    </motion.div>
  );
};
