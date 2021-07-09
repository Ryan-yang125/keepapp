import { useRouter } from "../hooks/useRouter";
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
const arrowSrc = "images/icons/arrow.png";

const useStyles = makeStyles({
  root: {},
  arrowIcon: {
    width: "40vw",
  },
  checkIcon: {
    width: "20vw",
  },
});

const length = 8;

export default function HardBox() {
  const classes = useStyles();
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  if (count >= length) {
    router.push("/hardend");
  }

  const getImageUrl = (count) => {
    if (checked) {
      return "images/icons/checked.svg";
    }
    return `images/hard/h${count}.png`;
  };
  const getClass = (count) => {
    // if (checked) {
    //   return classes.checkIcon;
    // }
    return classes.arrowIcon;
  };
  useEffect(() => {
    let time = setTimeout(() => {
      if (checked) {
        setCount(count + 1);
      }
      setChecked(!checked);
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, [count, checked]);

  return (
    <div className={classes.root}>
      <img src={getImageUrl(count)} alt="" className={getClass(count)} />
    </div>
  );
}
