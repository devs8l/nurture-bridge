import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPage }) => {
    return (
        <div className="fixed top-5 md:top-7 left-1/2 transform -translate-x-1/2 z-[100]">
            <div className="flex items-center gap-2 uppercase border-[0.5px] border-[#2228361f] rounded-full px-6 py-3 bg-[#26364B0D] shadow-[0_4px_80px_rgba(34,40,54,0.20)] backdrop-blur-[20px] roboto">
                <Link 
                    to="/" 
                    className="text-xs text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                >
                    Home
                </Link>
                <span className="text-gray-400 text-xs">›</span>
                <span className="text-xs text-gray-900 font-medium">
                    {currentPage}
                </span>
            </div>
        </div>
    );
};

export default Breadcrumb;
