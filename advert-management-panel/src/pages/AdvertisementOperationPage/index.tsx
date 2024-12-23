import React from "react";
import { useHistory } from "react-router-dom";
import AdvertisementForm from "../../components/AdvertisementForm";

const AdvertisementOperationPage: React.FC = () => {
  const history = useHistory();

  const handleAdd = (ad: { name: string; content: string; startDate: string; endDate: string }) => {
    // Logika dodania reklamy
    console.log(ad);
    history.push("/advertisements");
  };

  return <AdvertisementForm onAdd={handleAdd} />;
};

export default AdvertisementOperationPage;
