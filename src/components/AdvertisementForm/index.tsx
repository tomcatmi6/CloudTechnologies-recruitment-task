import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";

export interface Advertisement {
  id: string;
  name: string;
  content: string;
  startDate: string;
  endDate: string;
}

interface Props {
  onAdd: (ad: Advertisement) => void;
  advertisementToEdit?: Advertisement | null;
  currentAdvertisements: Advertisement[];
  onUpdate?: (ad: Advertisement) => void;
}

const validationSchema = yup.object({
  name: yup.string().trim().required("Nazwa jest wymagana."),
  content: yup
    .string()
    .trim()
    .max(500, "Treść może zawierać maksymalnie 500 znaków.")
    .required("Treść jest wymagana."),
  startDate: yup
    .date()
    .required("Data rozpoczęcia jest wymagana.")
    .min(
      dayjs().startOf("day").toDate(),
      "Data rozpoczęcia nie może być z przeszłości."
    ),
  endDate: yup
    .date()
    .required("Data zakończenia jest wymagana.")
    .min(
      yup.ref("startDate"),
      "Data zakończenia nie może być wcześniejsza niż data rozpoczęcia."
    ),
});

const AdvertisementForm: React.FC<Props> = ({
  onAdd,
  advertisementToEdit,
  currentAdvertisements,
  onUpdate,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (advertisementToEdit) {
      formik.setValues({
        name: advertisementToEdit.name,
        content: advertisementToEdit.content,
        startDate: dayjs(advertisementToEdit.startDate),
        endDate: dayjs(advertisementToEdit.endDate),
      });
      setIsEditMode(true);
    } else {
      setIsEditMode(false);
    }
  }, [advertisementToEdit]);

  const formik = useFormik({
    initialValues: {
      name: "",
      content: "",
      startDate: null as Dayjs | null,
      endDate: null as Dayjs | null,
    },
    validationSchema,
    onSubmit: (values) => {
      if (!formik.isValid || !values.startDate || !values.endDate) return;

      const newAdvertisement: Advertisement = {
        id: advertisementToEdit ? advertisementToEdit.id : uuidv4(),
        name: values.name,
        content: values.content,
        startDate: values.startDate?.toISOString(),
        endDate: values.endDate?.toISOString(),
      };

      const isNameTaken = currentAdvertisements.some(
        (ad) =>
          ad.name === newAdvertisement.name.trim() &&
          ad.id !== newAdvertisement.id
      );

      if (isNameTaken) {
        alert("Reklama o tej nazwie już istnieje. Wybierz inną nazwę.");
        return;
      }

      if (isEditMode && onUpdate) {
        onUpdate(newAdvertisement);
      } else {
        onAdd(newAdvertisement);
      }

      formik.resetForm();
      setIsEditMode(false);
    },
  });

  return (
    <Card sx={{ maxWidth: 345, padding: 2 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CardHeader
          title={isEditMode ? "Edytuj reklamę" : "Dodaj nową reklamę"}
          titleTypographyProps={{ component: "h2" }}
        />
        <CardContent>
          <form id="advertisement-form" onSubmit={formik.handleSubmit}>
            <TextField
              label="Nazwa"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              fullWidth
              autoFocus
              margin="normal"
            />
            <TextField
              label="Treść"
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.content && Boolean(formik.errors.content)}
              helperText={formik.touched.content && formik.errors.content}
              fullWidth
              margin="normal"
              multiline
              rows={3}
            />
            <DatePicker
              label="Data rozpoczęcia"
              value={formik.values.startDate}
              onChange={(newValue) =>
                formik.setFieldValue("startDate", newValue)
              }
              format="DD-MM-YYYY"
              slotProps={{
                textField: {
                  error:
                    formik.touched.startDate &&
                    Boolean(formik.errors.startDate),
                  helperText:
                    formik.touched.startDate && formik.errors.startDate,
                  fullWidth: true,
                  margin: "normal",
                },
              }}
              minDate={dayjs()}
            />
            <DatePicker
              label="Data zakończenia"
              value={formik.values.endDate}
              onChange={(newValue) => formik.setFieldValue("endDate", newValue)}
              format="DD-MM-YYYY"
              slotProps={{
                textField: {
                  error:
                    formik.touched.endDate && Boolean(formik.errors.endDate),
                  helperText: formik.touched.endDate && formik.errors.endDate,
                  fullWidth: true,
                  margin: "normal",
                },
              }}
              minDate={formik.values.startDate || dayjs()}
            />
          </form>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            form="advertisement-form"
            color="primary"
            disabled={!formik.isValid}
            type="submit"
            sx={{ mt: 2 }}
          >
            {isEditMode ? "Zapisz zmiany" : "Dodaj"}
          </Button>
        </CardActions>
      </LocalizationProvider>
    </Card>
  );
};

export default AdvertisementForm;
