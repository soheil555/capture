import { useInView } from "react-intersection-observer";
import { useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const useScroll = () => {
  const [element, isInView] = useInView({ threshold: 0.5 });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return { element, controls };
};

export default useScroll;
