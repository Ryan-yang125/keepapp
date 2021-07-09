import { makeStyles } from "@material-ui/core/styles";

import FaceCapturer from "../components/FaceCapturer";
import BorderLinearProgress from "../components/BorderLinearProgress";
import { useState, useEffect } from "react";
import { useRouter } from "../hooks/useRouter";
import HardBox from "../components/HardBox";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  progresser: {
    margin: "2.5em 1.5em",
  },
  stopContainer: {
    marginBottom: "1em",
  },
  blueButton: {
    backgroundColor: "#0095FF",
    color: "#E8F5FF",
    width: "3.5em",
    height: "5.5em",
    fontSize: "14px",
    textAlign: "center",
    borderRadius: "0.5em",
    boxShadow: "0px 7px 12px 0px rgba(152, 152, 152, 58)",
    padding: "0.5em",
    lineHeight: "1.8em",
    paddingTop: "0.9em",
  },
  bottom: {
    width: "80vw",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "0px 7px 12px 0px rgba(152, 152, 152, 12)",
    borderRadius: "0.8em",
    margin: "3vh",
  },
  tipC: {},
});
export default function HardTrainer() {
  const classes = useStyles();
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let timer = setTimeout(
      () => {
        setProgress(progress + 12);
      },
      progress === 0 ? 3000 : 6000
    );
    return () => {
      clearTimeout(timer);
    };
  }, [progress]);
  const onEmotionChange = (emotion) => {
    // setEmotion(emotion);
  };
  const toStopPage = (e) => {
    router.push(
      `/stop/query?count=${progress?.count}&length=${progress?.length}`
    );
  };
  return (
    <div>
      <div className={classes.progresser}>
        <BorderLinearProgress variant="determinate" value={progress} />
      </div>
      <div className={classes.container}>
        <div className={classes.stopContainer} onClick={toStopPage}>
          <img src="images/icons/stop.png" alt="stop" />
        </div>
        <FaceCapturer onEmotionChange={onEmotionChange} ifHard={true} />
        <HardBox />
        <div className={classes.bottom}>
          <div
            className={classes.blueButton}
            onClick={() => {
              router.push("/detailhard");
            }}
          >
            查看讲解
          </div>
          <div className={classes.tipC}>跟随提示按摩面部肌肉</div>
        </div>
      </div>
    </div>
  );
}
