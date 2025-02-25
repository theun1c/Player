import React from "react";
import previewImg from "../assets/hero_section_preview.jpg";

const HeroSection = () => {
    return (
        <section className="relative h-screen flex justify-center items-center w-[1370px] mx-auto p-[30px]">
            {/* Фоновое изображение */}
            <img
                src={previewImg} // Укажите путь к вашему изображению
                alt="Hero Background"
                className="absolute"
            />

            {/* Контент поверх изображения */}
            <div className="relative z-10 text-center text-white">
                <h1 className="text-4xl font-bold">
                    Добро пожаловать на AniFish
                </h1>
                <p className="mt-4 text-xl">Исследуйте мир аниме</p>
            </div>
        </section>
    );
};

export default HeroSection;