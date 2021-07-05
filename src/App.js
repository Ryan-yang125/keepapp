import { BrowserRouter as Router, Route } from "react-router-dom";

import SoftTrainer from "./pages/SoftTrainer";
import Home from "./pages/Home";
import StopPage from "./pages/StopPage";
export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/soft" component={SoftTrainer} />
        <Route path="/stop" component={StopPage} />
      </div>
    </Router>
  );
}
