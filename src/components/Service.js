import React from "react";

const Service2 = ({ title, description }) => {
    return (
        <div className="bg-gray-300 rounded-lg p-8 text-white font-cormorant-garamond">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl mb-4">{title}</h2>
            <p className="text-base lg:text-lg xl:text-xl text-lightgray">{description}</p>
        </div>
    );
};

export default Service2;
