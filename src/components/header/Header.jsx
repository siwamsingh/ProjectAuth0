import React, { useState } from "react";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();
    const bodyStyle = document.body.style;

  const handleScroll = () => {
    const isScrolled = window.scrollY > 10;
    setScrolled(isScrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);



    useEffect(()=>{
      bodyStyle.overflowY = !isAuthenticated ? 'hidden' : 'auto'
      const timeoutId = setTimeout(() => {
        if (!isAuthenticated) {
          alert("Login To Scroll");
        }
      }, 6000);
      return () => clearTimeout(timeoutId);
    },[isAuthenticated,bodyStyle])

  


  return (
    <div className="">
      <nav
        className={`z-50 fixed p-2 ${
          scrolled ? "bg-white text-black" : "bg-transparent text-white"
        } w-full mx-auto h-fit flex items-start   justify-between`}
      >
        <div className=" flex items-center justify-between w-[95%] sm:w-[85%]  mx-auto">
          <a href="/">
            <div className="flex items-center transition-all ease-int-out  duration-200  gap-x-2">
              <img
                alt="fixit logo"
                width="25"
                height="25"
                src={`${
                  scrolled
                    ?"https://github.com/dakshsinghrathore/Brighter-Beginnings/assets/140843501/29a67d9d-7015-4edb-a30e-7b7aba4410c4"
                    :  "https://github.com/dakshsinghrathore/Brighter-Beginnings/assets/140843501/d3473d01-90e6-4642-af60-95b86ed3031e"
                }`}
              />
              <h4 className=" text-[2rem] ">fiXit</h4>
            </div>
          </a>
          <div className="flex gap-4">
            <a
              href="#"
              className={`bg-transparent rounded-sm border px-3 py-1.5 flex w-full min-w-max    font-bold  ${
                scrolled ? "border-black" : "border-transparent"
              }`}
            >
              About
            </a>
            {!isAuthenticated ? (
              <button
                className={`bg-transparent rounded-sm border px-3 py-1.5 flex w-full min-w-max    font-bold  ${
                  scrolled ? "border-black" : "border-transparent"
                }`}
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            ) : (
              <button
                className={`bg-transparent rounded-sm border px-3 py-1.5 flex w-full min-w-max    font-bold  ${
                  scrolled ? "border-black" : "border-transparent"
                }`}
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
