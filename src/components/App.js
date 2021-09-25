import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/App.module.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/quiz" component={Quiz} />
            <Route exact path="/result" component={Result} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
