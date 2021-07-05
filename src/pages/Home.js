import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "../hooks/useRouter";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 375,
    margin: "10px",
  },
});

export default function Home() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.root}>
      <img
        src="images/home/header.png"
        alt="header"
        className={classes.image}
      ></img>
      <img
        src="images/home/1.png"
        alt="todo"
        className={classes.image}
        onClick={() => router.push("/soft")}
      ></img>
      <img src="images/home/2.png" alt="todo" className={classes.image}></img>
      <img src="images/home/3.png" alt="todo" className={classes.image}></img>
      <img
        src="images/home/bottom.png"
        alt="bottom"
        className={classes.image}
      ></img>
    </div>
  );
}
