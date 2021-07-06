import BorderLinearProgress from "../components/BorderLinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "../hooks/useRouter";
const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  progresser: {
    margin: "4.5em 1.5em",
  },
  expContainer: {
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "335px",
  },
  icon: {
    width: "118px",
  },
  buttonG: {
    display: "flex",
  },
});
export default function StopPage() {
  const classes = useStyles();
  const router = useRouter();
  console.log(router.query);
  const getCountBySearch = (query) => ~~((query.count * 100) / query.length);
  const toSoftPage = (e) => {
    router.push(
      `/soft/query?count=${router.query.count}&length=${router.query.length}`
    );
  };
  return (
    <>
      <div className={classes.progresser}>
        <BorderLinearProgress
          variant="determinate"
          value={getCountBySearch(router.query)}
        />
      </div>
      <div className={classes.expContainer}>
        <img src="images/stop/exp.png" alt="" className={classes.image} />
      </div>
      <div className={classes.container}>
        <IconButton
          type="exit"
          onClick={() => {
            router.push("/");
          }}
        />
        <IconButton type="replay" onClick={toSoftPage} />
      </div>
    </>
  );
}

function IconButton({ type, onClick }) {
  const table = {
    exit: "退出训练",
    replay: "继续训练",
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      onClick={onClick}
    >
      <img
        src={`images/icons/${type}.svg`}
        alt=""
        style={{
          width: "118px",
        }}
      />
      <div style={{ margin: "20px" }}>{table[type]}</div>
    </div>
  );
}
