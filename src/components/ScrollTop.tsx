import { useRouter } from "next/router";
import { useEffect } from "react";

const ScrollTop = () => {
  const router = useRouter();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [router.pathname]);

  return null;
};

export default ScrollTop;
