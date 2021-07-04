import { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressBar: {
    width: "50px",
    height: "50px;",
    borderRadius: "50%",
    opacity: "0.6",
    zIndex: 3,
    position: "relative",
    right: "54px",
    // background: "linear-gradient(to top, #B3DDFB 60%, white 0%)",
  },
  imageNow: {
    width: "58px",
    height: "58px",
    zIndex: 2,
  },
  imageNext: {
    width: "29px",
    height: "29px",
  },
});
const table = {
  angry: "/images/emotions/angry.png",
  happy: "/images/emotions/happy.png",
  surprised: "/images/emotions/surprised.png",
};

const tableNext = {
  angry: "/images/emotions/angryNext.png",
  happy: "/images/emotions/happyNext.png",
  surprised: "/images/emotions/surprisedNext.png",
};

const check = ["happy", "surprised", "angry", "happy", "surprised", "angry"];

const threshould = 0.99;
export default function EmotionBox({ emotion }) {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const ifMatch = (emotion) => {
    let emotionNow = emotion[check[count]];

    if (check[count] === "surprised") {
      if (emotionNow > 0.99) {
        console.log(`${check[count]}: Ok`);
        setCount(count + 1);
      } else {
        console.log(`${check[count]}: No`);
      }
    } else if (check[count] === "happy") {
      // TODO
      if (emotionNow - 0.1 > 0.9) {
        console.log(`${check[count]}: Ok`);
        setCount(count + 1);
      } else {
        console.log(`${check[count]}: No`);
      }
    } else if (check[count] === "angry") {
      if (emotionNow + 0.3 > 0.9) {
        console.log(`${check[count]}: Ok`);
        setCount(count + 1);
      } else {
        console.log(`${check[count]}: No`);
      }
    }
  };
  const emotionNumFix = (emotion) => {
    let result = null;
    const num = emotion ? emotion[check[count]].toFixed(2) * 100 : 0;
    if (check[count] === "surprised") {
      result = ~~(num / 10) * 10;
      console.log("surprised:" + result);
    } else if (check[count] === "happy") {
      result = (~~(num / 10) - 1) * 10;
      console.log("happy:" + result);
    } else if (check[count] === "angry") {
      result = (~~(num / 10) + 3) * 10;
      console.log("angry:" + result);
    }
    return result;
  };

  if (emotion) {
    ifMatch(emotion);
  }

  return (
    <div className={classes.root}>
      <img
        src={table[check[count]]}
        alt="emotion"
        className={classes.imageNow}
      />
      <div
        className={classes.progressBar}
        style={{
          background: `linear-gradient(to top, #B3DDFB ${emotionNumFix(
            emotion
          )}%, white 0%)`,
        }}
      ></div>
      <img
        src={tableNext[check[count + 1]]}
        alt="emotion"
        className={classes.imageNext}
      />
      <img src="/images/icons/checked.svg" alt="" />
    </div>
  );
}
