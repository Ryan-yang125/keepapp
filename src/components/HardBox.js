import { useRouter } from "../hooks/useRouter";
import { makeStyles } from "@material-ui/core";
const arrowSrc = "images/icons/arrow.png";

const useStyles = makeStyles({
  root: {},
  arrowIcon: {
    width: "30vw",
  },
});
export default function HardBox() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.root}>
      <img src={arrowSrc} alt="" className={classes.arrowIcon} />
      <div className={classes.container}></div>
    </div>
  );
}
