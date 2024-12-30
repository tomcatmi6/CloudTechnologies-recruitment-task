import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./pages/StartPage";
import AdvertisementsPage from "./pages/AdvertisementListPage";
import NewAdvertisementPage from "./pages/NewAdvertisementPage";
import { Container } from "@mui/material";

const App: React.FC = () => (
  <Container
    maxWidth="xl"
    style={{ marginTop: "50px" }}
    className="main-container"
  >
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/advertisements" element={<AdvertisementsPage />} />
        <Route path="/advertisements/new" element={<NewAdvertisementPage />} />
      </Routes>
    </Router>
  </Container>
);

export default App;