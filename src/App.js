import { BrowserRouter as Router, Route } from "react-router-dom";

import SoftTrainer from "./pages/SoftTrainer";
import Home from "./pages/Home";
import StopPage from "./pages/StopPage";
import Detail from "./pages/Detail";
export default function App() {
  return (
    <Router>
      <div>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        <Route
          path={`${process.env.PUBLIC_URL}/soft`}
          component={SoftTrainer}
        />
        <Route path={`${process.env.PUBLIC_URL}/detailsoft`}>
          <Detail
            gifUrl="/images/details/detailgif.png"
            detailUrl="/images/details/detailsoft.png"
          />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/detailhard`}>
          <Detail
            gifUrl="/images/details/detailgif.png"
            detailUrl="/images/details/detailhard.png"
          />
        </Route>
        <Route
          path={`${process.env.PUBLIC_URL}/detailhard/stop`}
          component={StopPage}
        />
      </div>
    </Router>
  );
}
