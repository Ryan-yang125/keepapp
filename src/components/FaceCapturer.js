import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

const MODEL_URL = "models/";

const loadFaceModel = async () => {
  await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
  await faceapi.loadFaceExpressionModel(MODEL_URL);
};

const FaceCapturer = ({ onEmotionChange, ifHard }) => {
  const videoRef = useRef(null);
  const [ifLoadModel, setIfLoadModel] = useState(false);

  if (!ifLoadModel) {
    loadFaceModel();
    setIfLoadModel(true);
  }

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = async () => {
    let stream = await navigator.mediaDevices.getUserMedia({
      video: { width: 262, height: 337, facingMode: "user" },
    });
    let video = videoRef.current;
    video.srcObject = stream;
    video.play();
  };

  const onPlay = async () => {
    // tiny_face_detector options
    // videoRef.current.play();
    let inputSize = 512;
    let scoreThreshold = 0.5;
    const option = new faceapi.TinyFaceDetectorOptions({
      inputSize,
      scoreThreshold,
    });
    let result;
    if (videoRef.current) {
      result = await faceapi
        .detectSingleFace(videoRef.current, option)
        .withFaceExpressions();
    }
    result && onEmotionChange(result.expressions);
    // console.log(result?.expressions);
    setTimeout(() => onPlay());
  };
  return (
    <>
      <div>
        <video
          ref={videoRef}
          onLoadedMetadata={onPlay}
          style={{ display: ifHard ? "initial" : "none" }}
        />
      </div>
    </>
  );
};

export default FaceCapturer;
