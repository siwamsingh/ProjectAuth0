import React from "react";

const TextRevealAnimationOne = ({ text }) => {
  const characters = text.split("");

  return (
    <div className="pb-7 lg:pb-14">
      {characters.map((char, index) => (
        <span
          key={index}
          className="w-fit m-auto bg-gradient-to-r  from-blue-400 via-blue-200 to-blue-100 bg-clip-text font-bold text-transparent text-3xl sm:text-5xl lg:text-6xl "
          style={{
            animation: `text-reveal 4s ease ${0.9 + index * 0.06}s 1 normal forwards running`,
            
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default TextRevealAnimationOne;
