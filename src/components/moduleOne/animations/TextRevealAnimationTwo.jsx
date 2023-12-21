import React from "react";

const TextRevealAnimationTwo = ({ text }) => {
  const characters = text.split("");

  return (
    <div >
      {characters.map((char, index) => (
        <span
          key={index}
          className="w-fit text-[45px] sm:text-[70px] md:text-[80px]  m-auto bg-gradient-to-r text-500 from-blue-400 via-blue-200 to-blue-100 bg-clip-text font-bold  text-transparent text-5xl sm:text-6xl"
          style={{
            animation: `text-reveal 4s ease ${1.74 + index * 0.06}s 1 normal forwards running`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default TextRevealAnimationTwo;
