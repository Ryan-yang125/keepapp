import { useRouter } from "../hooks/useRouter";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {},
});
export default function Start() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.root}>
      <img src="" alt="" />
      <div className={classes.container}></div>
    </div>
  );
}
