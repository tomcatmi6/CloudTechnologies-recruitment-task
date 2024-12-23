import React from "react";
import { Typography, List, ListItem, ListItemText, Button } from "@material-ui/core";

interface Advertisement {
  id: string;
  name: string;
  content: string;
  startDate: string;
  endDate: string;
}

interface Props {
  advertisements: Advertisement[];
  onDelete: (id: string) => void;
}

const AdvertisementList: React.FC<Props> = ({ advertisements, onDelete }) => (
  <div>
    <Typography variant="h5" gutterBottom>Reklamy</Typography>
    <List>
      {advertisements.map((ad) => (
        <ListItem key={ad.id}>
          <ListItemText
            primary={ad.name}
            secondary={`Start: ${ad.startDate}, End: ${ad.endDate}`}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onDelete(ad.id)}
          >
            Usuń
          </Button>
        </ListItem>
      ))}
    </List>
  </div>
);

export default AdvertisementList;
