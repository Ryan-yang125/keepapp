import { useRouter } from "../hooks/useRouter";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image1: {
    width: "100vw",
  },
  image2: {
    width: "80vw",
  },
});
export default function SoftEnd() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.root}>
      <img src="images/softend/1.png" alt="" className={classes.image1} />
      <img src="images/softend/2.png" alt="" className={classes.image2} />
    </div>
  );
}
