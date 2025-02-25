import React from "react";
import BlueBotton from "../UI/button/BlueButton";
import Navigation from "./Navigation";
import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <header className=" text-white flex justify-between pt-[50px] items-center">
            {/* logo */}
            <a href="#" className="flex items-center">
                <img src={logo} alt="logo" className="w-[50px]" />
                <span className="ml-2 text-white text-xl font-bold">
                    AniFish
                </span>
            </a>

            {/* nav bar */}
            <Navigation />

            {/* actions like signin/registration */}
            <div>
                <BlueBotton text="Sign In"></BlueBotton>
            </div>
        </header>
    );
};

export default Header;
