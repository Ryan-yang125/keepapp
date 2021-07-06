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
    right: "35px",
    bottom: "30px",
    // background: "linear-gradient(to top, #B3DDFB 60%, white 0%)",
  },
  checkedImage: {
    width: "58px",
    height: "58px",
    position: "relative",
    right: "40px",
    zIndex: 2,
  },
  imageNow: {
    width: "58px",
    height: "58px",
    position: "relative",
    right: "40px",
    top: "27px",
    zIndex: 2,
  },
  imageNext: {
    width: "29px",
    height: "29px",
  },
});
const table = {
  angry: "images/emotions/angry.png",
  happy: "images/emotions/happy.png",
  surprised: "images/emotions/surprised.png",
};

const tableNext = {
  angry: "images/emotions/angryNext.png",
  happy: "images/emotions/happyNext.png",
  surprised: "images/emotions/surprisedNext.png",
};

const check = ["happy", "surprised", "angry", "happy", "surprised", "angry"];

export default function EmotionBox({ emotion, onProgressChange, initCount }) {
  const classes = useStyles();
  const [count, setCount] = useState(+initCount || 0);
  const [checked, setChecked] = useState(false);
  const ifMatch = (emotion) => {
    let emotionNow = emotion[check[count]];
    let threshouldTable = {
      surprised: 0.99,
      happy: 0.99,
      angry: 0.6,
    };
    if (emotionNow > threshouldTable[check[count]]) {
      console.log(`${check[count]}: Ok`);
      setChecked(true);
      setCount(count + 1);
      onProgressChange({ count: count + 1, length: check.length });
      setTimeout(() => {
        setChecked(false);
      }, 1000);
    } else {
      console.log(`${check[count]}: No`);
    }
  };
  const emotionNumFix = (emotion) => {
    let result = null;
    const num = emotion ? emotion[check[count]]?.toFixed(2) * 100 : 0;
    const fixTable = {
      surprised: 0,
      happy: -1,
      angry: 3,
    };
    result = (~~(num / 10) + fixTable[check[count]]) * 10;
    console.log(check[count], result);
    return result;
  };

  if (emotion) {
    ifMatch(emotion);
  }

  return (
    <div className={classes.root}>
      {checked ? (
        <img
          src="images/icons/checked.svg"
          alt=""
          className={classes.checkedImage}
        />
      ) : (
        <div>
          <img
            src={table[check[count]]}
            // src="images/icons/checked.svg"
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
        </div>
      )}

      <img
        src={tableNext[check[count + 1]]}
        alt="emotion"
        className={classes.imageNext}
      />
    </div>
  );
}
