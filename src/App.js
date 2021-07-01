import { BrowserRouter as Router, Route } from "react-router-dom";

import SoftTrainer from "./pages/SoftTrainer";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/soft" component={SoftTrainer} />
      </div>
    </Router>
  );
}
