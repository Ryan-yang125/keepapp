import { useRouter } from "../hooks/useRouter";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    width: "85vw",
    marginTop: "15vh",
    marginBottom: "10vh",
  },
  routerIcon: {
    width: "30vw",
  },
});
export default function Start() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.root}>
      <img src="images/start/start.png" alt="" className={classes.logoImage} />
      <div className={classes.container}>
        <img
          src="images/start/home.png"
          alt=""
          className={classes.routerIcon}
          onClick={() => router.push("/home")}
        />
        <img
          src="images/start/hard.png"
          alt=""
          className={classes.routerIcon}
          onClick={() => router.push("/hard")}
        />
        <img
          src="images/start/soft.png"
          alt=""
          className={classes.routerIcon}
          onClick={() => router.push("/soft")}
          style={{ marginTop: "1.2vh" }}
        />
      </div>
    </div>
  );
}
