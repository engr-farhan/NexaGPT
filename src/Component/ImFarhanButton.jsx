import React from "react";

const ImfarhanButton = () => {
  const style = {
    backgroundColor: "#FFDD00",
  };
  return (
    <div style={style}>
      <a
        href="https://www.linkedin.com/in/engr-farhan"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/imfarhan.jpg"
          alt="Buy Me A Coffee Widget"
          style={{
            height: "40px",
            position: "relative",
            left: "4px",
            display: "block",
          }}
        /> Muhammad Farhan
      </a>
    </div>
  );
};

export default ImfarhanButton;
