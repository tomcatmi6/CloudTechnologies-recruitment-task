import React from "react";
import { List, ListItem, ListItemText, Button } from "@mui/material";
import { Advertisement } from "../AdvertisementForm";
import { changeISODateToReadable } from "../../helpers/dateHelpers";

interface Props {
  advertisements: Advertisement[];
  onDelete: (id: string) => void;
}

const AdvertisementList: React.FC<Props> = ({ advertisements, onDelete }) => (
    <List sx={{ width: "100%", bgcolor: "background.paper", border: 1, borderColor: "divider", borderRadius: 1 }} disablePadding={true}>
      {advertisements.map((ad, index) => (
        <ListItem key={ad.id} 
        sx={{
          bgcolor: index % 2 !== 0 ? "grey.100" : "inherit",
          "&:hover": {
            bgcolor: "grey.200",
          },
        }}
        secondaryAction={
          <Button
          variant="contained"
          color="error"
          onClick={() => onDelete(ad.id)}
        >
          Usuń
        </Button>
        }>
          <ListItemText
            primary={ad.name}
            secondary={`Start: ${changeISODateToReadable(ad.startDate)}, End: ${changeISODateToReadable(ad.endDate)}`}
          />
         
        </ListItem>
      ))}
    </List>
);

export default AdvertisementList;
