import React from "react";
import { List, ListItem, ListItemText, Button, Box } from "@mui/material";
import { Advertisement } from "../AdvertisementForm";
import { changeISODateToReadable } from "../../helpers/dateHelpers";

interface Props {
  advertisements: Advertisement[];
  onDelete: (id: string) => void;
  onEdit: (ad: Advertisement) => void;
}

const AdvertisementList: React.FC<Props> = ({
  advertisements,
  onDelete,
  onEdit,
}) => (
  <List
    sx={{
      width: "100%",
      bgcolor: "background.paper",
      border: 1,
      borderColor: "divider",
      borderRadius: 1,
    }}
    disablePadding={true}
  >
    {advertisements.map((ad, index) => (
      <ListItem
        key={ad.id}
        sx={{
          bgcolor: index % 2 !== 0 ? "grey.100" : "inherit",
          "&:hover": {
            bgcolor: "grey.200",
          },
        }}
        secondaryAction={
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onEdit(ad)}
            >
              Edytuj
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => onDelete(ad.id)}
            >
              Usuń
            </Button>
          </Box>
        }
      >
        <ListItemText
          primary={ad.name}
          secondary={`Start: ${changeISODateToReadable(
            ad.startDate
          )}, End: ${changeISODateToReadable(ad.endDate)}`}
        />
      </ListItem>
    ))}
  </List>
);

export default AdvertisementList;
