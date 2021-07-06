import todo1 from "..images/todos/1.png";
import todo2 from "..images/todos/2.png";
import todo3 from "..images/todos/3.png";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "../hooks/useRouter";

const useStyles = makeStyles({
  root: {
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: "325px",
  },
});

export default function Todos() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.root}>
      <div>
        <img
          src={todo1}
          alt="todo1"
          className={classes.image}
          onClick={(e) => router.push("/soft")}
        />
      </div>
      <div>
        <img src={todo2} alt="todo2" className={classes.image} />
      </div>
      <div>
        <img src={todo3} alt="todo3" className={classes.image} />
      </div>
    </div>
  );
}
