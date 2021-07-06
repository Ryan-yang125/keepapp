import { HashRouter as Router, Route } from "react-router-dom";

import SoftTrainer from "./pages/SoftTrainer";
import Home from "./pages/Home";
import StopPage from "./pages/StopPage";
import Detail from "./pages/Detail";
export default function App() {
  return (
    <Router>
      <div>
        <Route exact path={`/`} component={Home} />
        <Route path={`/soft`} component={SoftTrainer} />
        <Route path={`/detailsoft`}>
          <Detail
            gifUrl="images/details/detailgif.png"
            detailUrl="images/details/detailsoft.png"
          />
        </Route>
        <Route path={`/detailhard`}>
          <Detail
            gifUrl="images/details/detailgif.png"
            detailUrl="images/details/detailhard.png"
          />
        </Route>
        <Route path={`/stop`} component={StopPage} />
      </div>
    </Router>
  );
}
