import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
    const location = useLocation();
    const navigate = useNavigate();
    const { imageUrl, file } = location.state || {};
    const [processedImage, setProcessedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const apiKey = import.meta.env.VITE_CLIPDROP_API;
    console.log(apiKey)

    useEffect(() => {
        if (!file) {
            navigate("/");
            return;
        }

        const removeBackground = async () => {
            setLoading(true);
            const formData = new FormData();
            formData.append("image_file", file);

            try {
                const response = await fetch("https://clipdrop-api.co/remove-background/v1", {
                    method: "POST",
                    headers: {
                        "x-api-key": apiKey,
                    },
                    body: formData,
                });

                if (!response.ok) throw new Error("Failed to remove background");

                const blob = await response.blob();
                setProcessedImage(URL.createObjectURL(blob));
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };

        removeBackground();
    }, [file, navigate, apiKey]);

    return (
        <div className="flex flex-col items-center py-12 bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Original</h3>
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] h-[400px] flex items-center justify-center">
                        {imageUrl ? (
                            <img src={imageUrl} alt="Original" className="w-[550px] h-[350px] object-cover rounded-md" />
                        ) : (
                            <p className="text-gray-500">No Image Selected</p>
                        )}
                    </div>
                </div>

                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Background Removed</h3>
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] h-[400px] flex items-center justify-center">
                        {loading ? (
                            <div className="w-24 h-24 border-8 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        ) : processedImage ? (
                            <img src={processedImage} alt="Processed" className="w-[550px] h-[350px] object-cover rounded-md" />
                        ) : (
                            <p className="text-gray-500">Processing...</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-10 flex gap-8">
                <button onClick={() => navigate("/")} className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
                    Try Another
                </button>
                {processedImage && (
                    <a href={processedImage} download="processed-image.png" className="px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700 transition">
                        Download Image
                    </a>
                )}
            </div>
        </div>
    );
}

export default Result;
