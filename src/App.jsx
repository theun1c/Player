import { use, useRef, useState } from "react";
import "./index.css";
import BlueBotton from "./UI/button/BlueButton";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const App = () => {
    return (
        <div className="bg-black">
            {/* container */}
            <div className="max-w-[1400px] mx-auto px-4">
                <Header></Header>
            </div>
            
            {/* hero section */}
            <HeroSection></HeroSection>

        </div>
    );
};

export default App;
