// import React from 'react';
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   Text,
//   Textarea,
//   IconButton
// } from "@chakra-ui/react";
// import { Field, Form, Formik } from "formik";
// import { useMemo } from 'react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { DeleteIcon } from "@chakra-ui/icons";
// import { useCreateReunion, useUpdateReunion, useDeleteReunion } from "./Requests";

// const CustomTimeInput = ({ value, onChange }) => (
//   <Input value={value} onChange={(e) => onChange && onChange(e.target.value)} width="100%" />
// );

// const ReunionForm = ({ reunion, onClose }) => {
//   const label = reunion?.id_reunion ? "Update" : "Create";

//   const initialValues = useMemo(() => ({
//     titre: reunion?.titre || "",
//     description: reunion?.description || "",
//     date: reunion?.date || "",
//     heure_debut: reunion?.heure_debut || "",
//     heure_fin: reunion?.heure_fin || ""
//   }), [reunion]);

//   const { mutateAsync: createReunion } = useCreateReunion();
//   const { mutateAsync: updateReunion } = useUpdateReunion();
//   const { mutateAsync: deleteReunion } = useDeleteReunion();

//   return (
//     <Box boxShadow={"2xl"} padding="10" rounded="xl" bg="white" width="100%">
//       <Formik
//         onSubmit={async (values) => {
//           if (!reunion?.id_reunion) {
//             await createReunion(values);
//           } else {
//             await updateReunion(values);
//           }
//           onClose(); // Fermer le formulaire après la soumission
//         }}
//         initialValues={initialValues}
//         enableReinitialize
//       >
//         {({ values, setFieldValue, handleSubmit }) => (
//           <Form>
//             <Flex justifyContent={"space-between"} alignItems="center">
//               <Box>
//                 <Text fontSize="4xl" mb={4}>{label} a meeting</Text>
//               </Box>
//               {reunion?.id_reunion && (
//                 <Box>
//                   <IconButton
//                     aria-label="delete"
//                     icon={<DeleteIcon />}
//                     onClick={async () => {
//                       await deleteReunion(reunion.id_reunion);
//                       onClose(); // Fermer le formulaire après la suppression
//                     }}
//                     colorScheme="red"
//                   />
//                 </Box>
//               )}
//             </Flex>

//             <Field name="titre">
//               {({ field }) => (
//                 <FormControl>
//                   <FormLabel>Title</FormLabel>
//                   <Input {...field} value={field.value || ""} />
//                 </FormControl>
//               )}
//             </Field>
//             <Field name="description">
//               {({ field }) => (
//                 <FormControl>
//                   <FormLabel>Description</FormLabel>
//                   <Textarea {...field} rows={4} value={field.value || ""} />
//                 </FormControl>
//               )}
//             </Field>
//             <Field name="date">
//               {({ field }) => (
//                 <FormControl>
//                   <FormLabel>Date</FormLabel>
//                   <DatePicker
//                     onChange={(date) => setFieldValue("date", date)}
//                     selected={new Date(values.date)}
//                     dateFormat="yyyy-MM-dd"
//                   />
//                 </FormControl>
//               )}
//             </Field>
//             <Flex gap={4} mt={4}>
//               <Flex flexBasis={"50%"}>
//                 <FormControl>
//                   <FormLabel>Start Time</FormLabel>
//                   <DatePicker
//                     onChange={(date) => setFieldValue("heure_debut", date)}
//                     selected={new Date(values.heure_debut)}
//                     showTimeSelect
//                     dateFormat="MMMM d, yyyy h:mm aa"
//                     customInput={<CustomTimeInput />}
//                   />
//                 </FormControl>
//               </Flex>
//               <Flex flexBasis={"50%"}>
//                 <FormControl>
//                   <FormLabel>End Time</FormLabel>
//                   <DatePicker
//                     onChange={(date) => setFieldValue("heure_fin", date)}
//                     selected={new Date(values.heure_fin)}
//                     showTimeSelect
//                     dateFormat="MMMM d, yyyy h:mm aa"
//                     customInput={<CustomTimeInput />}
//                   />
//                 </FormControl>
//               </Flex>
//             </Flex>

//             <Button mt={4} colorScheme={"whatsapp"} onClick={() => handleSubmit()}>
//               {label}
//             </Button>
//             <Button mt={4} ml={4} colorScheme={"gray"} onClick={onClose}>
//               Cancel
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     </Box>
//   );
// };

// export default ReunionForm;


// import React, { useMemo } from 'react';
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   Text,
//   Textarea,
//   IconButton
// } from "@chakra-ui/react";
// import { Field, Form, Formik } from "formik";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { DeleteIcon } from "@chakra-ui/icons";
// import { useCreateReunion, useUpdateReunion, useDeleteReunion } from "./Requests";

// const CustomTimeInput = ({ value, onChange }) => (
//   <Input value={value} onChange={(e) => onChange && onChange(e.target.value)} width="100%" />
// );

// const ReunionForm = ({ reunion, onClose, isCreating }) => {
//   const label = isCreating ? "Create" : "Update";

//   const initialValues = useMemo(() => ({
//     titre: reunion?.titre || "",
//     description: reunion?.description || "",
//     date: reunion?.date ? new Date(reunion.date) : null,
//     heure_debut: reunion?.heure_debut ? new Date(reunion.heure_debut) : null,
//     heure_fin: reunion?.heure_fin ? new Date(reunion.heure_fin) : null
//   }), [reunion]);

//   const { mutateAsync: createReunion } = useCreateReunion();
//   const { mutateAsync: updateReunion } = useUpdateReunion();
//   const { mutateAsync: deleteReunion } = useDeleteReunion();

//   return (
//     <Box boxShadow={"2xl"} padding="10" rounded="xl" bg="white" width="100%">
//       <Formik
//         onSubmit={async (values) => {
//   console.log("Submitting values:", values); // Vérifiez les valeurs soumises
//   try {
//     if (isCreating) {
//       await createReunion(values);
//     } else {
//       console.log("Updating reunion with ID:", reunion.id_reunion);
//       await updateReunion(values);
//     }
//     onClose(); // Fermer le formulaire après la soumission
//   } catch (error) {
//     console.error("Error submitting form:", error);
//   }
// }}

//         initialValues={initialValues}
//         enableReinitialize
//       >
//         {({ values, setFieldValue, handleSubmit }) => (
//           <Form>
//             <Flex justifyContent={"space-between"} alignItems="center">
//               <Box>
//                 <Text fontSize="4xl" mb={4}>{label} a meeting</Text>
//               </Box>
//               {!isCreating && reunion?.id_reunion && (
//                 <Box>
//                   <IconButton
//                     aria-label="delete"
//                     icon={<DeleteIcon />}
//                     onClick={async () => {
//                       await deleteReunion(reunion.id_reunion);
//                       onClose(); // Fermer le formulaire après la suppression
//                     }}
//                     colorScheme="red"
//                   />
//                 </Box>
//               )}
//             </Flex>

//             <Field name="titre">
//               {({ field }) => (
//                 <FormControl>
//                   <FormLabel>Title</FormLabel>
//                   <Input {...field} value={field.value || ""} autoComplete="off" />
//                 </FormControl>
//               )}
//             </Field>
//             <Field name="description">
//               {({ field }) => (
//                 <FormControl>
//                   <FormLabel>Description</FormLabel>
//                   <Textarea {...field} rows={4} value={field.value || ""} autoComplete="off" />
//                 </FormControl>
//               )}
//             </Field>
//             <Field name="date">
//               {({ field }) => (
//                 <FormControl>
//                   <FormLabel>Date</FormLabel>
//                   <DatePicker
//                     onChange={(date) => setFieldValue("date", date)}
//                     selected={values.date}
//                     dateFormat="yyyy-MM-dd"
//                     customInput={<Input />}
//                     autoComplete="off"
//                   />
//                 </FormControl>
//               )}
//             </Field>
//             <Flex gap={4} mt={4}>
//               <Flex flexBasis={"50%"}>
//                 <FormControl>
//                   <FormLabel>Start Time</FormLabel>
//                   <DatePicker
//                     onChange={(date) => setFieldValue("heure_debut", date)}
//                     selected={values.heure_debut}
//                     showTimeSelect
//                     dateFormat="MMMM d, yyyy h:mm aa"
//                     customInput={<CustomTimeInput />}
//                     autoComplete="off"
//                   />
//                 </FormControl>
//               </Flex>
//               <Flex flexBasis={"50%"}>
//                 <FormControl>
//                   <FormLabel>End Time</FormLabel>
//                   <DatePicker
//                     onChange={(date) => setFieldValue("heure_fin", date)}
//                     selected={values.heure_fin}
//                     showTimeSelect
//                     dateFormat="MMMM d, yyyy h:mm aa"
//                     customInput={<CustomTimeInput />}
//                     autoComplete="off"
//                   />
//                 </FormControl>
//               </Flex>
//             </Flex>

//             <Button mt={4} colorScheme={"whatsapp"} onClick={() => handleSubmit()}>
//               {label}
//             </Button>
//             <Button mt={4} ml={4} colorScheme={"gray"} onClick={onClose}>
//               Cancel
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     </Box>
//   );
// };

// export default ReunionForm;

// import React, { useMemo } from 'react';
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   Text,
//   Textarea,
//   IconButton
// } from "@chakra-ui/react";
// import { Field, Form, Formik } from "formik";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { DeleteIcon } from "@chakra-ui/icons";
// import { useCreateReunion, useUpdateReunion, useDeleteReunion } from "./Requests";

// const CustomTimeInput = ({ value, onChange }) => (
//   <Input value={value} onChange={(e) => onChange && onChange(e.target.value)} width="100%" />
// );

// const ReunionForm = ({ reunion, onClose, isCreating }) => {
//   const label = isCreating ? "Create" : "Update";

//   const initialValues = useMemo(() => ({
//     id_reunion: reunion?.id_reunion || "",
//     titre: reunion?.titre || "",
//     description: reunion?.description || "",
//     date: reunion?.date ? new Date(reunion.date) : null,
//     heure_debut: reunion?.heure_debut ? new Date(reunion.heure_debut) : null,
//     heure_fin: reunion?.heure_fin ? new Date(reunion.heure_fin) : null,
//     doctorants: reunion?.doctorants || []  // Inclusion de la liste des doctorants
//   }), [reunion]);

//   const { mutateAsync: createReunion } = useCreateReunion();
//   const { mutateAsync: updateReunion } = useUpdateReunion();
//   const { mutateAsync: deleteReunion } = useDeleteReunion();

//   return (
//     <Box boxShadow={"2xl"} padding="10" rounded="xl" bg="white" width="100%">
//       <Formik
//         onSubmit={async (values) => {
//           console.log("Submitting values:", values);
//           if (isCreating) {
//             await createReunion(values);
//           } else {
//             if (!values.id_reunion) {
//               console.error("Missing id_reunion for update.");
//               return;
//             }
//             await updateReunion(values);
//           }
//           onClose(); // Fermer le formulaire après la soumission
//         }}
//         initialValues={initialValues}
//         enableReinitialize
//       >
//         {({ values, setFieldValue, handleSubmit }) => (
//           <Form>
//             <Flex justifyContent={"space-between"} alignItems="center">
//               <Box>
//                 <Text fontSize="4xl" mb={4}>{label} a meeting</Text>
//               </Box>
//               {!isCreating && reunion?.id_reunion && (
//                 <Box>
//                   <IconButton
//                     aria-label="delete"
//                     icon={<DeleteIcon />}
//                     onClick={async () => {
//                       await deleteReunion(reunion.id_reunion);
//                       onClose(); // Fermer le formulaire après la suppression
//                     }}
//                     colorScheme="red"
//                   />
//                 </Box>
//               )}
//             </Flex>

//             <Field name="titre">
//               {({ field }) => (
//                 <FormControl>
//                   <FormLabel>Title</FormLabel>
//                   <Input {...field} value={field.value || ""} />
//                 </FormControl>
//               )}
//             </Field>
//             <Field name="description">
//               {({ field }) => (
//                 <FormControl>
//                   <FormLabel>Description</FormLabel>
//                   <Textarea {...field} rows={4} value={field.value || ""} />
//                 </FormControl>
//               )}
//             </Field>
//             <Field name="date">
//               {({ field }) => (
//                 <FormControl>
//                   <FormLabel>Date</FormLabel>
//                   <DatePicker
//                     onChange={(date) => setFieldValue("date", date)}
//                     selected={values.date}
//                     dateFormat="yyyy-MM-dd"
//                   />
//                 </FormControl>
//               )}
//             </Field>
//             <Flex gap={4} mt={4}>
//               <Flex flexBasis={"50%"}>
//                 <FormControl>
//                   <FormLabel>Start Time</FormLabel>
//                   <DatePicker
//                     onChange={(date) => setFieldValue("heure_debut", date)}
//                     selected={values.heure_debut}
//                     showTimeSelect
//                     dateFormat="MMMM d, yyyy h:mm aa"
//                     customInput={<CustomTimeInput />}
//                   />
//                 </FormControl>
//               </Flex>
//               <Flex flexBasis={"50%"}>
//                 <FormControl>
//                   <FormLabel>End Time</FormLabel>
//                   <DatePicker
//                     onChange={(date) => setFieldValue("heure_fin", date)}
//                     selected={values.heure_fin}
//                     showTimeSelect
//                     dateFormat="MMMM d, yyyy h:mm aa"
//                     customInput={<CustomTimeInput />}
//                   />
//                 </FormControl>
//               </Flex>
//             </Flex>

//             {/* Ajout de la gestion des doctorants */}
//             <Field name="doctorants">
//               {({ field }) => (
//                 <FormControl>
//                   <FormLabel>Associated Doctorants</FormLabel>
//                   <Input
//                     {...field}
//                     value={field.value || ""}
//                     placeholder="Enter associated doctorants IDs separated by commas"
//                     onChange={(e) => setFieldValue("doctorants", e.target.value.split(',').map(id => id.trim()))}
//                   />
//                 </FormControl>
//               )}
//             </Field>

//             <Button mt={4} colorScheme={"whatsapp"} onClick={() => handleSubmit()}>
//               {label}
//             </Button>
//             <Button mt={4} ml={4} colorScheme={"gray"} onClick={onClose}>
//               Cancel
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     </Box>
//   );
// };

// export default ReunionForm;




//finaly ca marche
// import React, { useMemo } from 'react';
// import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";
// import { Field, Form, Formik } from "formik";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import moment from 'moment';
// import { useCreateReunion, useUpdateReunion, useDeleteReunion } from "./Requests";

// const CustomTimeInput = ({ value, onChange }) => (
//   <Input
//     value={value || ""}
//     onChange={(e) => onChange(e.target.value)}
//     width="100%"
//   />
// );

// const ReunionForm = ({ reunion, onClose, isCreating }) => {
//   const label = isCreating ? "Create" : "Update";

//   // Fonction pour convertir les valeurs en objets Date
//   const parseDate = (dateStr, timeStr) => {
//     return dateStr && timeStr ? moment(`${dateStr}T${timeStr}`).toDate() : null;
//   };

//   // Initialisation des valeurs
//   const initialValues = useMemo(() => ({
//     id_reunion: reunion?.id_reunion || "",
//     titre: reunion?.titre || "",
//     description: reunion?.description || "",
//     date: reunion?.date || "",
//     heure_debut: reunion?.heure_debut || "",
//     heure_fin: reunion?.heure_fin || "",
//     doctorants: reunion?.doctorants || []
//   }), [reunion]);

//   const { mutateAsync: createReunion } = useCreateReunion();
//   const { mutateAsync: updateReunion } = useUpdateReunion();
//   const { mutateAsync: deleteReunion } = useDeleteReunion();

//   return (
//     <Box boxShadow={"2xl"} padding="10" rounded="xl" bg="white" width="100%">
//       <Formik
//         initialValues={initialValues}
//         enableReinitialize
//         onSubmit={async (values) => {
//           const formattedValues = {
//             ...values,
//             date: moment(values.date).format('YYYY-MM-DD'),
//             heure_debut: moment(values.heure_debut, 'HH:mm').format('HH:mm'),
//             heure_fin: moment(values.heure_fin, 'HH:mm').format('HH:mm'),
//           };
//           if (isCreating) {
//             await createReunion(formattedValues);
//           } else {
//             if (!values.id_reunion) {
//               console.error("Missing id_reunion for update.");
//               return;
//             }
//             await updateReunion(formattedValues);
//           }
//           onClose(); // Fermer le formulaire après la soumission
//         }}
//       >
//         {({ values, setFieldValue, handleSubmit }) => (
//           <Form>
//             <Flex justifyContent={"space-between"} alignItems="center">
//               <Box>
//                 <Text fontSize="4xl" mb={4}>{label} a meeting</Text>
//               </Box>
//               {!isCreating && reunion?.id_reunion && (
//                 <Box>
//                   <Button
//                     onClick={async () => {
//                       await deleteReunion(reunion.id_reunion);
//                       onClose(); // Fermer le formulaire après la suppression
//                     }}
//                     colorScheme="red"
//                   >
//                     Delete
//                   </Button>
//                 </Box>
//               )}
//             </Flex>

//             <Field name="titre">
//               {({ field }) => (
//                 <FormControl>
//                   <FormLabel>Title</FormLabel>
//                   <Input {...field} value={field.value || ""} />
//                 </FormControl>
//               )}
//             </Field>
//             <Field name="description">
//               {({ field }) => (
//                 <FormControl>
//                   <FormLabel>Description</FormLabel>
//                   <Textarea {...field} rows={4} value={field.value || ""} />
//                 </FormControl>
//               )}
//             </Field>
//             <Field name="date">
//               {({ field }) => (
//                 <FormControl>
//                   <FormLabel>Date</FormLabel>
//                   <DatePicker
//                     onChange={(date) => setFieldValue("date", moment(date).format('YYYY-MM-DD'))}
//                     selected={values.date ? moment(values.date).toDate() : null}
//                     dateFormat="yyyy-MM-dd"
//                   />
//                 </FormControl>
//               )}
//             </Field>
//             <Flex gap={4} mt={4}>
//               <Flex flexBasis={"50%"}>
//                 <FormControl>
//                   <FormLabel>Start Time</FormLabel>
//                   <DatePicker
//                     onChange={(date) => setFieldValue("heure_debut", moment(date).format('HH:mm'))}
//                     selected={values.heure_debut ? moment(values.date + 'T' + values.heure_debut, 'YYYY-MM-DDTHH:mm').toDate() : null}
//                     showTimeSelect
//                     timeIntervals={15}
//                     dateFormat="h:mm aa"
//                     customInput={<CustomTimeInput />}
//                   />
//                 </FormControl>
//               </Flex>
//               <Flex flexBasis={"50%"}>
//                 <FormControl>
//                   <FormLabel>End Time</FormLabel>
//                   <DatePicker
//                     onChange={(date) => setFieldValue("heure_fin", moment(date).format('HH:mm'))}
//                     selected={values.heure_fin ? moment(values.date + 'T' + values.heure_fin, 'YYYY-MM-DDTHH:mm').toDate() : null}
//                     showTimeSelect
//                     timeIntervals={15}
//                     dateFormat="h:mm aa"
//                     customInput={<CustomTimeInput />}
//                   />
//                 </FormControl>
//               </Flex>
//             </Flex>

//             <Field name="doctorants">
//               {({ field }) => (
//                 <FormControl>
//                   <FormLabel>Associated Doctorants</FormLabel>
//                   <Input
//                     {...field}
//                     value={field.value.join(', ') || ""}
//                     placeholder="Enter associated doctorants IDs separated by commas"
//                     onChange={(e) => setFieldValue("doctorants", e.target.value.split(',').map(id => id.trim()))}
//                   />
//                 </FormControl>
//               )}
//             </Field>

//             <Button mt={4} colorScheme={"whatsapp"} onClick={() => handleSubmit()}>
//               {label}
//             </Button>
//             <Button mt={4} ml={4} colorScheme={"gray"} onClick={onClose}>
//               Cancel
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     </Box>
//   );
// };

// export default ReunionForm;




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
