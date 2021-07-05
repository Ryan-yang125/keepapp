import { makeStyles } from "@material-ui/core/styles";

import FaceCapturer from "../components/FaceCapturer";
import BorderLinearProgress from "../components/BorderLinearProgress";
import { useState } from "react";
import { useRouter } from "../hooks/useRouter";
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
    margin: "50px",
  },
  tipC: {},
});
export default function SoftTrainer() {
  const classes = useStyles();
  const router = useRouter();
  const [emotion, setEmotion] = useState(null);
  const [progress, setProgress] = useState(null);

  const onEmotionChange = (emotion) => {
    setEmotion(emotion);
  };
  const onProgressChange = (progress) => {
    setProgress(progress);
  };
  const toStopPage = (e) => {
    router.push(
      `/stop/query?count=${progress?.count}&length=${progress?.length}`
    );
  };
  const getProgressValue = (progress) =>
    ~~((progress.count * 100) / progress.length);

  const getProgressValueByQuery = () =>
    router.query.count
      ? ~~((router.query.count * 100) / router.query.length)
      : 0;
  return (
    <div>
      <div className={classes.progresser}>
        <BorderLinearProgress
          variant="determinate"
          value={
            progress ? getProgressValue(progress) : getProgressValueByQuery()
          }
        />
      </div>
      <div className={classes.container} onClick={toStopPage}>
        <div className={classes.stopContainer}>
          <img src="/images/icons/stop.png" alt="stop" />
        </div>
        <FaceCapturer onEmotionChange={onEmotionChange} />
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
