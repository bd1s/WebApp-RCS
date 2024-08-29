

import React, { useMemo } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import CustomTimeInput from './CustomTimeInput'; 

import { useCreateReunion, useUpdateReunion, useDeleteReunion } from "./Requests";

// const CustomTimeInput = ({ value, onChange }) => (
//   <Input
//     value={value || ""}
//     onChange={(e) => onChange(e.target.value)}
//     width="100%"
//   />
// );

const ReunionForm = ({ reunion, onClose, isCreating }) => {
  const label = isCreating ? "Create" : "Update";

  // Initialisation des valeurs
  const initialValues = useMemo(() => ({
    id_reunion: reunion?.id_reunion || "",
    titre: reunion?.titre || "",
    description: reunion?.description || "",
    date: reunion?.date || "",
    heure_debut: reunion?.heure_debut || "",
    heure_fin: reunion?.heure_fin || "",
    doctorants: reunion?.doctorants || []
  }), [reunion]);

  const { mutateAsync: createReunion } = useCreateReunion();
  const { mutateAsync: updateReunion } = useUpdateReunion();
  const { mutateAsync: deleteReunion } = useDeleteReunion();

  return (
    <Box boxShadow={"2xl"} padding="10" rounded="xl" bg="white" width="100%">
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={async (values) => {
          const formattedValues = {
            ...values,
            date: moment(values.date).format('YYYY-MM-DD'),
            heure_debut: moment(values.heure_debut, 'HH:mm').format('HH:mm'),
            heure_fin: moment(values.heure_fin, 'HH:mm').format('HH:mm'),
          };
          if (isCreating) {
            await createReunion(formattedValues);
          } else {
            if (!values.id_reunion) {
              console.error("Missing id_reunion for update.");
              return;
            }
            await updateReunion(formattedValues);
          }
          onClose(); // Fermer le formulaire après la soumission
        }}
      >
        {({ values, setFieldValue, handleSubmit }) => (
          <Form>
            <Flex justifyContent={"space-between"} alignItems="center">
              <Box>
                <Text fontSize="4xl" mb={4}>{label} a meeting</Text>
              </Box>
              {!isCreating && reunion?.id_reunion && (
                <Box>
                  <Button
                    onClick={async () => {
                      await deleteReunion(reunion.id_reunion);
                      onClose(); // Fermer le formulaire après la suppression
                    }}
                    colorScheme="red"
                  >
                    Delete
                  </Button>
                </Box>
              )}
            </Flex>

            <Field name="titre">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input {...field} value={field.value || ""} />
                </FormControl>
              )}
            </Field>
            <Field name="description">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Textarea {...field} rows={4} value={field.value || ""} />
                </FormControl>
              )}
            </Field>
            <Field name="date">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Date</FormLabel>
                  <DatePicker
                    onChange={(date) => setFieldValue("date", moment(date).format('YYYY-MM-DD'))}
                    selected={values.date ? moment(values.date).toDate() : null}
                    dateFormat="yyyy-MM-dd"
                  />
                </FormControl>
              )}
            </Field>
            <Flex gap={4} mt={4}>
              <Flex flexBasis={"50%"}>
                <FormControl>
                  <FormLabel>Start Time</FormLabel>
                  <DatePicker
                    onChange={(date) => setFieldValue("heure_debut", moment(date).format('HH:mm'))}
                    selected={values.heure_debut ? moment(`1900-01-01T${values.heure_debut}`).toDate() : null}
                    showTimeSelect
                    timeIntervals={15}
                    dateFormat="HH:mm"
                    customInput={<CustomTimeInput />}
                  />
                </FormControl>
              </Flex>
              <Flex flexBasis={"50%"}>
                <FormControl>
                  <FormLabel>End Time</FormLabel>
                  <DatePicker
                    onChange={(date) => setFieldValue("heure_fin", moment(date).format('HH:mm'))}
                    selected={values.heure_fin ? moment(`1900-01-01T${values.heure_fin}`).toDate() : null}
                    showTimeSelect
                    timeIntervals={15}
                    dateFormat="HH:mm"
                    customInput={<CustomTimeInput />}
                  />
                </FormControl>
              </Flex>
            </Flex>

            <Field name="doctorants">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Associated Doctorants</FormLabel>
                  <Input
                    {...field}
                    value={field.value.join(', ') || ""}
                    placeholder="Enter associated doctorants IDs separated by commas"
                    onChange={(e) => setFieldValue("doctorants", e.target.value.split(',').map(id => id.trim()))}
                  />
                </FormControl>
              )}
            </Field>

            <Button mt={4} colorScheme={"whatsapp"} onClick={() => handleSubmit()}>
              {label}
            </Button>
            <Button mt={4} ml={4} colorScheme={"gray"} onClick={onClose}>
              Cancel
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ReunionForm;
