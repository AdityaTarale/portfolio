"use client";

import dynamic from "next/dynamic";
import animationData from "../../../public/animations/batman-lottie.json";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export default function BatmanAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      ariaLabel="https://app.lottiefiles.com/animation/bc5065d7-1092-4d9d-82e1-b071e9ffe963?channel=web&source=public-animation"
    />
  );
}

/**
 *  Ref to the original animation:
 * https://app.lottiefiles.com/animation/bc5065d7-1092-4d9d-82e1-b071e9ffe963?channel=web&source=public-animation
 * */
