import React from "react";
import { assets } from "../assets/assets";
import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function Header() {
    const { isSignedIn } = useUser();
    const { openSignIn } = useClerk();
    const navigate = useNavigate();

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (!isSignedIn) {
            return openSignIn();
        }

        const imageUrl = URL.createObjectURL(file);
        navigate("/result", { state: { imageUrl, file } });
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl mx-6 mt-6 shadow-lg">
            <div className="max-w-lg">
                <h1 className="text-4xl text-gray-800 font-extrabold leading-snug">
                    Remove the <br />
                    <span className="text-purple-600">Background</span> from Images
                </h1>
                <p className="mt-3 text-gray-600 text-lg">Easily remove backgrounds in seconds.</p>

                <div className="mt-6">
                    <input
                        onChange={handleImageUpload}
                        accept="image/*"
                        type="file"
                        id="fileInput"
                        hidden
                    />
                    <label
                        htmlFor="fileInput"
                        className="flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md cursor-pointer hover:scale-105 transition-all"
                    >
                        <img src={assets.upload_btn_icon} alt="upload" className="w-6" />
                        Upload Image
                    </label>
                </div>
            </div>

            <div className="mt-6 md:mt-0">
                <img
                    src={assets.header_img}
                    alt="Header"
                    className="max-w-sm md:max-w-md rounded-lg shadow-md"
                />
            </div>
        </div>
    );
}

export default Header;
