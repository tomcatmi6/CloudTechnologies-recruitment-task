import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import StartPage from "./pages/StartPage";
import AdvertisementsPage from "./pages/AdvertisementListPage";
import AdvertisementOperationPage from "./pages/AdvertisementOperationPage";
import { Container } from "@material-ui/core";


const App: React.FC = () => (
  <Container maxWidth="xl" style={{ marginTop: "50px" }}>
  <Router>
    <Switch>
      <Route exact path="/" component={StartPage} />
      <Route exact path="/advertisements" component={AdvertisementsPage} />
      <Route exact path="/advertisements/new" component={AdvertisementOperationPage} />
    </Switch>
  </Router>
  </Container>
);

export default App;
