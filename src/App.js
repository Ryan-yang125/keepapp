import { HashRouter as Router, Route } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import SoftTrainer from "./pages/SoftTrainer";
import HardTrainer from "./pages/HardTrainer";
import Detail from "./pages/Detail";
import StopPage from "./pages/StopPage";
import SoftEnd from "./pages/SoftEnd";
import HardEnd from "./pages/HardEnd";
export default function App() {
  return (
    <Router>
      <div>
        <Route exact path={`/`} component={Start} />
        <Route path={`/home`} component={Home} />
        <Route path={`/soft`} component={SoftTrainer} />
        <Route path={`/hard`} component={HardTrainer} />
        <Route path={`/softend`} component={SoftEnd} />
        <Route path={`/hardend`} component={HardEnd} />
        <Route path={`/detailsoft`}>
          <Detail
            gifUrl="images/details/softDetail.gif"
            detailUrl="images/details/detailsoft.png"
          />
        </Route>
        <Route path={`/detailhard`}>
          <Detail
            gifUrl="images/details/hardDetail.gif"
            detailUrl="images/details/detailhard.png"
          />
        </Route>
        <Route path={`/stop`} component={StopPage} />
      </div>
    </Router>
  );
}
