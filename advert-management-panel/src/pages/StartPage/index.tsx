import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import Quote from "../../components/Quote";

const StartPage: React.FC = () => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Typography variant="h1" align="center" gutterBottom>
      Witamy na stronie
    </Typography>
    <Quote />
    <Box sx={{ textAlign: "center", mt: 6 }}>
      <Button variant="contained" color="primary" component={Link} to="/advertisements">
        Przejdź do panelu zarządzania reklamami
      </Button>
    </Box>
  </Box>
);

export default StartPage;
