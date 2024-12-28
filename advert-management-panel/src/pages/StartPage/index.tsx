import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@material-ui/core";
import Quote from "../../components/Quote";

const StartPage: React.FC = () => (
  <Box>
    <Typography variant="h1" align="center" gutterBottom>
      Witamy na stronie
    </Typography>
    <Quote />
    <Box style={{ textAlign: "center", marginTop: "20px" }}>
      <Button variant="contained" color="primary" component={Link} to="/advertisements">
        Przejdź do reklam
      </Button>
    </Box>
  </Box>
);

export default StartPage;
