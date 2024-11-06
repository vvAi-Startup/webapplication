import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 15) {
      setVisible(true);
    } else if (scrolled <= 15) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisible);
    }
    // Clean up the event listener on component unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", toggleVisible);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: "10px", // Move to the right side of the screen
        bottom: "20px", // Add some space from the bottom
        zIndex: 1,
        cursor: "pointer",
      }}
    >
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{
          display: visible ? "inline" : "none",
          color: "white",
          fontSize: "3rem",
        }}
      />
    </div>
  );
};

export default ScrollButton;
