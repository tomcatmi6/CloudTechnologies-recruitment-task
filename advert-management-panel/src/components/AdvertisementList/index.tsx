import React from "react";
import { List, ListItem, ListItemText, Button } from "@mui/material";
import { Advertisement } from "../AdvertisementForm";
import { changeISODateToReadable } from "../../helpers/dateHelpers";

interface Props {
  advertisements: Advertisement[];
  onDelete: (id: string) => void;
}

const AdvertisementList: React.FC<Props> = ({ advertisements, onDelete }) => (
    <List>
      {advertisements.map((ad) => (
        <ListItem key={ad.id}>
          <ListItemText
            primary={ad.name}
            secondary={`Start: ${changeISODateToReadable(ad.startDate)}, End: ${changeISODateToReadable(ad.endDate)}`}
          />
          <Button
            variant="contained"
            color="error"
            onClick={() => onDelete(ad.id)}
          >
            Usuń
          </Button>
        </ListItem>
      ))}
    </List>
);

export default AdvertisementList;
