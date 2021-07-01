import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

const MODEL_URL = "/models";

const loadFaceModel = async () => {
  await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
  await faceapi.loadFaceExpressionModel(MODEL_URL);
};

const FaceCapturer = () => {
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
      video: { width: 300 },
    });
    let video = videoRef.current;
    video.srcObject = stream;
    video.play();
  };

  const onPlay = async () => {
    // tiny_face_detector options
    let inputSize = 512;
    let scoreThreshold = 0.5;
    const option = new faceapi.TinyFaceDetectorOptions({
      inputSize,
      scoreThreshold,
    });
    const result = await faceapi
      .detectSingleFace(videoRef.current, option)
      .withFaceExpressions();
    console.log(result);
    // setTimeout(() => onPlay());
  };
  return (
    <div>
      <div>
        <video ref={videoRef} onLoadedMetadata={onPlay} />
      </div>
    </div>
  );
};

export default FaceCapturer;
