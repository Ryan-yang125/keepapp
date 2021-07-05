import { makeStyles } from "@material-ui/core";
import { useRouter } from "../hooks/useRouter";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "75vw",
  },
  gif: {
    width: "75vw",
  },
  detail: {
    width: "75vw",
    height: "45vh",
  },
  blueButton: {
    backgroundColor: "#0095FF",
    color: "#E8F5FF",
    width: "5.5em",
    height: "3.5em",
    fontSize: "14px",
    textAlign: "center",
    borderRadius: "0.5em",
    boxShadow: "0px 7px 12px 0px rgba(152, 152, 152, 58)",
    padding: "0.5em",
    lineHeight: "1.8em",
    paddingTop: "0.9em",
  },
});
export default function Detail({ gifUrl, detailUrl }) {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.root}>
      <img src={gifUrl} alt="" className={classes.gif} />
      <img src={detailUrl} alt="" className={classes.detail} />
      <div
        className={classes.blueButton}
        onClick={() => {
          router.history.goBack();
        }}
      >
        {" "}
        返回训练{" "}
      </div>
    </div>
  );
}
