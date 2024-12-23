import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import Quote from "../../components/Quote";

const StartPage: React.FC = () => (
  <div>
    <Typography variant="h1" align="center" gutterBottom>
      Witamy na stronie
    </Typography>
    <Quote />
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Button variant="contained" color="primary" component={Link} to="/advertisements">
        Przejdź do reklam
      </Button>
    </div>
  </div>
);

export default StartPage;
