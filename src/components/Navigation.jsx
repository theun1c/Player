import React from "react";

const Navigation = () => {
    return (
        <nav>
            <ul className="text-[18px] font-bold text-white flex items-center gap-[30px]">
                <li>
                    <a
                        href="#"
                        className="hover:text-blue-500 hover:underline transition-all duration-300"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="hover:text-blue-500 hover:underline transition-all duration-300"
                    >
                        Releases
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="hover:text-blue-500 hover:underline transition-all duration-300"
                    >
                        Anime
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex items-center hover:text-blue-500 hover:underline transition-all duration-300"
                    >
                        Search
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;