import { makeStyles, withStyles } from "@material-ui/core/styles";
import TimeCounter from "../components/TimeCounter";
import FaceCapturer from "../components/FaceCapturer";
import LinearProgress from "@material-ui/core/LinearProgress";
import EmotionBox from "../components/EmotionBox";
import { useState, useEffect } from "react";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    backgroundColor: "#6DBEF8",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  progresser: {
    margin: "2.5em",
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
    borderRadius: "0.5em",
  },
});
export default function SoftTrainer() {
  const classes = useStyles();
  const [emotion, setEmotion] = useState(null);

  const onEmotionChange = (emotion) => {
    setEmotion(emotion);
  };

  return (
    <div>
      <div className={classes.progresser}>
        <BorderLinearProgress variant="determinate" value={50} />
      </div>
      <div className={classes.container}>
        <div className={classes.stopContainer}>
          <img src="/images/icons/stop.png" alt="stop" />
        </div>
        <FaceCapturer onEmotionChange={onEmotionChange} />
        <div className={classes.bottom}>
          <div className={classes.blueButton}>查看讲解</div>
          <EmotionBox emotion={emotion} />
        </div>
      </div>
    </div>
  );
}
