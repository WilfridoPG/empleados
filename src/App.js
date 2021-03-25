import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import EmpleadoState from "./context/empleados/empleadoState";
function App() {
  return (
    <EmpleadoState>
      <Router>
        <Switch>
          <Route exact path="/" component={Layout}></Route>
        </Switch>
      </Router>
    </EmpleadoState>
  );
}
export default App;
