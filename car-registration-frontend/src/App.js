import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import CheckPlate from "./components/CheckPlate";
import ValidatePlate from "./components/ValidatePlate";
import Registration from "./components/Registration";
import CreateVehicle from "./components/CreateVehicle";
import ViewVehicle from "./components/ViewVehicle";
import UpdateVehicle from "./components/UpdateVehicle";
import DeleteVehicle from "./components/DeleteVehicle";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Check-Plate">
            <CheckPlate />
          </Route>
          <Route path="/Validate-Plate">
            <ValidatePlate />
          </Route>
          <Route path="/Registration">
            <Registration />
          </Route>
          <Route path="/Create-Vehicle">
            <CreateVehicle />
          </Route>
          <Route path="/View-Vehicle">
            <ViewVehicle />
          </Route>
          <Route path="/Update-Vehicle">
            <UpdateVehicle />
          </Route>
          <Route path="/Delete-Vehicle">
            <DeleteVehicle />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
