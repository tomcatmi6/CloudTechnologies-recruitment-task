import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Modal,
  Box,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";
import AdvertisementList from "../../components/AdvertisementList";
import AdvertisementForm, {
  Advertisement,
} from "../../components/AdvertisementForm";

const AdvertisementsPage: React.FC = () => {
  const [currentAdvertisements, setAdvertisements] = useState<Advertisement[]>(
    []
  );
  useEffect(() => {
    const storedAds = localStorage.getItem("advertisements");
    if (storedAds) {
      setAdvertisements(JSON.parse(storedAds));
    }
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddAdvertisement = (newAdvertisement: Advertisement) => {
    setAdvertisements([...currentAdvertisements, newAdvertisement]);
    localStorage.setItem(
      "advertisements",
      JSON.stringify([...currentAdvertisements, newAdvertisement])
    );
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    const filteredAdvertisements = currentAdvertisements.filter(
      (ad) => ad.id !== id
    );
    setAdvertisements(filteredAdvertisements);
    localStorage.setItem(
      "advertisements",
      JSON.stringify(filteredAdvertisements)
    );
  };

  const loadSampleData = () => {
    const exampleAdvertisements: Advertisement[] = [
      {
        id: "1",
        name: "Reklama 1",
        content: "Przykładowa treść reklamy",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
      },
      {
        id: "2",
        name: "Reklama 2",
        content: "Inna przykładowa treść reklamy",
        startDate: "2024-02-01",
        endDate: "2024-12-31",
      },
      {
        id: "3",
        name: "Reklama 3",
        content: "Inna przykładowa treść reklamy",
        startDate: "2024-02-01",
        endDate: "2024-12-31",
      },
      {
        id: "4",
        name: "Reklama 4",
        content: "Inna przykładowa treść reklamy",
        startDate: "2024-02-01",
        endDate: "2024-12-31",
      }
    ];
    setAdvertisements(exampleAdvertisements);
    localStorage.setItem("advertisements", JSON.stringify(exampleAdvertisements));
  };

  return (
    <Card>
      <CardHeader title="Reklamy" titleTypographyProps={{ component: "h1" }} />
      <CardContent>
        {currentAdvertisements.length === 0 && (
          <Box textAlign="center" p={2}>
            Brak reklam, dodaj nową!
          </Box>
        )}
        <AdvertisementList
          advertisements={currentAdvertisements}
          onDelete={handleDelete}
        />
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Dodaj nową reklamę
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => loadSampleData()}
        >
          Wygeneruj przykladowe dane
        </Button>
      </CardActions>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 1,
            maxWidth: 600,
          }}
        >
          <AdvertisementForm onAdd={handleAddAdvertisement} currentAdvertisements={currentAdvertisements} />
        </Box>
      </Modal>
    </Card>
  );
};

export default AdvertisementsPage;
