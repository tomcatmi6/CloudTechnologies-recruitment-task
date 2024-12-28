import React, { useState } from "react";
import { Button, Card } from "@material-ui/core";
import AdvertisementList from "../../components/AdvertisementList";
import { Link } from "react-router-dom";
const AdvertisementsPage: React.FC = () => {
  const [advertisements, setAdvertisements] = useState([
    { id: "1", name: "Reklama 1", content: "Treść 1", startDate: "2024-01-01", endDate: "2024-12-31" },
  ]);

  const handleDelete = (id: string) => {
    setAdvertisements(advertisements.filter((ad) => ad.id !== id));
  };

  return (
    <Card >
      <AdvertisementList advertisements={advertisements} onDelete={handleDelete} />
      <Button variant="contained" color="primary" component={Link} to="/advertisements/new">
        Dodaj nową reklamę
      </Button>
    </Card>
  );
};

export default AdvertisementsPage;
