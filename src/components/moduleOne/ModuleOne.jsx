import React from "react";
import "./moduleOne.css";
import TextRevealAnimationOne from "./animations/TextRevealAnimationOne";
import TextRevealAnimationTwo from "./animations/TextRevealAnimationTwo";
import LineRevealAnimation from "./animations/LineRevealAnimation";
import Header from "../header/header";


export default function ModuleOne() {
  return (
    <div className=" h-fit bg-stone-800">
      <div>
        <Header />
        <div className=" h-screen">
          <h3
            className="flex items-center w-full leading-tight text-[45px] sm:text-[70px]text-[1.875rem]  h-full  p-2  px-6 text-center font-proximaBold bg-clip-text text-gray-700"
            style={{ wordSpacing: "1px" }}
          >
            <div className="">
              <TextRevealAnimationOne text={"Fix your Sales"} />
              <TextRevealAnimationTwo
                text={
                  "Enabiling Human Intelligence with Artificial Intelligence"
                }
              />
            </div>
          </h3>
        </div>
        <div className=" h-fit">
          <h3
            className="px-4 sm:px-20 lg:px-60  pb-24 sm:py-24 w-full leading-tight text-[45px] sm:text-[70px]text-[1.875rem]  h-full  md:text-[3rem] md:leading-[4rem]  lg:text-6xl p-2 text-center font-proximaBold bg-clip-text text-gray-700"
            style={{ wordSpacing: "1px" }}
          >
            
            <LineRevealAnimation text={"Analyze your customer conversations to get deep insights to shorten"}/>
            <LineRevealAnimation text={"sales cycle, increase customer trust, reduce ramp up time & drive"}/>
            <LineRevealAnimation text={"more revenue"}/>
          </h3>
          
        </div>
      </div>
    </div>
  );
}
