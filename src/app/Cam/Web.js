import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";

export const CustomWebcam = () => {
    const camRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    const capture = useCallback(() => {
        const img = camRef.current.getScreenshot();
        setImgSrc(img);
    }, [camRef]);
    
    const ResetCapture = () => {
        setImgSrc(null);
    };

    const videoConstraints = {
        facingMode: "environment", // Switches to back camera
    };

    return (
        <div className="flex flex-col mt-20 items-center">
            <Webcam
                audio={false}
                height={400}
                width={400}
                ref={camRef}
                videoConstraints={videoConstraints}
            />
            {imgSrc === null ? (
                <button
                    onClick={capture}
                    className="bg-slate-500 mt-4 py-2 px-4 rounded-lg text-white"
                >
                    Take picture
                </button>
            ) : (
                <button
                    onClick={ResetCapture}
                    className="bg-slate-500 mt-4 py-2 px-4 rounded-lg text-white"
                >
                    Reset picture
                </button>
            )}

            {imgSrc && <img src={imgSrc} className="mt-4" alt="Captured" />}
        </div>
    );
};
