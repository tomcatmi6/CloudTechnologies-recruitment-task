import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

interface Props {
  onAdd: (ad: { name: string; content: string; startDate: string; endDate: string }) => void;
}

const AdvertisementForm: React.FC<Props> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = () => {
    onAdd({ name, content, startDate, endDate });
    setName("");
    setContent("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <form>
      <TextField
        label="Nazwa"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Treść"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={3}
        inputProps={{ maxLength: 500 }}
      />
      <TextField
        label="Data rozpoczęcia"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Data zakończenia"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Dodaj
      </Button>
    </form>
  );
};

export default AdvertisementForm;
