import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
    const location = useLocation();
    const navigate = useNavigate();
    const { imageUrl, file } = location.state || {};
    const [processedImage, setProcessedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const apiKey = import.meta.env.VITE_CLIPDROP_API;

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
        <div className="flex flex-col items-center py-12 bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center w-full max-w-5xl">
                <div className="text-center w-full max-w-md">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Original</h3>
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex items-center justify-center w-full h-auto">
                        {imageUrl ? (
                            <img src={imageUrl} alt="Original" className="w-full object-cover rounded-md" />
                        ) : (
                            <p className="text-gray-500">No Image Selected</p>
                        )}
                    </div>
                </div>

                <div className="text-center w-full max-w-md">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Background Removed</h3>
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex items-center justify-center w-full h-auto">
                        {loading ? (
                            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        ) : processedImage ? (
                            <img src={processedImage} alt="Processed" className="w-full object-cover rounded-md" />
                        ) : (
                            <p className="text-gray-500">Processing...</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row gap-4">
                <button onClick={() => navigate("/")} className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
                    Try Another
                </button>
                {processedImage && (
                    <a href={processedImage} download="processed-image.png" className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700 transition text-center">
                        Download Image
                    </a>
                )}
            </div>
        </div>
    );
}

export default Result;
