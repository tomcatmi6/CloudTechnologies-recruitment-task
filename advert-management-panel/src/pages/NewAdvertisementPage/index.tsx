import React, { useEffect, useState } from "react";
import AdvertisementForm, { Advertisement } from "../../components/AdvertisementForm";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NewAdvertisementPage: React.FC = () => {
  const [currentAdvertisements, setAdvertisements] = useState<Advertisement[]>([]);
  const navigation = useNavigate();

  useEffect(() => {
    const storedAds = localStorage.getItem("advertisements");
    if (storedAds) {
      setAdvertisements(JSON.parse(storedAds));
    }
  }, []);

  const handleAddAdvertisementAction = (newAdvertisement: Advertisement) => {
      setAdvertisements([...currentAdvertisements, newAdvertisement]);
      localStorage.setItem("advertisements", JSON.stringify([...currentAdvertisements, newAdvertisement]));
      navigation("/advertisements");
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Typography variant="h1" gutterBottom className="sr-only">
        Strona dodawania nowej Reklamy
      </Typography>
      <AdvertisementForm onAdd={handleAddAdvertisementAction} currentAdvertisements={currentAdvertisements}/>
    </Box>
  )
};

export default NewAdvertisementPage;
