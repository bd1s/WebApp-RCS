// import React, { useMemo } from 'react';
// import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";
// import { Field, Form, Formik } from "formik";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import moment from 'moment';
// import { useCreateEvent, useUpdateEvent, useDeleteEvent } from "./Requests";

// const CustomTimeInput = ({ value, onChange }) => (
//   <Input
//     value={value || ""}
//     onChange={(e) => onChange(e.target.value)}
//     width="100%"
//   />
// );

// const EventForm = ({ event, onClose, isCreating }) => {
//   const label = isCreating ? "Create" : "Update";

//   // Fonction pour convertir les valeurs en objets Date
//   const parseDate = (dateStr, timeStr) => {
//     return dateStr && timeStr ? moment(`${dateStr}T${timeStr}`).toDate() : null;
//   };

//   // Initialisation des valeurs
//   const initialValues = useMemo(() => ({
//     id_event: event?.id_event || "",
//     title: event?.title || "",
//     description: event?.description || "",
//     date: event?.date || "",
//     start_time: event?.start_time || "",
//     end_time: event?.end_time || "",
//   }), [event]);

//   const { mutateAsync: createEvent } = useCreateEvent();
//   const { mutateAsync: updateEvent } = useUpdateEvent();
//   const { mutateAsync: deleteEvent } = useDeleteEvent();

//   return (
//     <Box boxShadow={"2xl"} padding="10" rounded="xl" bg="white" width="100%">
//       <Formik
//         initialValues={initialValues}
//         enableReinitialize
//         onSubmit={async (values) => {
//           const formattedValues = {
//             ...values,
//             date: moment(values.date).format('YYYY-MM-DD'),
//             start_time: moment(values.start_time, 'HH:mm:ss').format('HH:mm:ss'),
//             end_time: moment(values.end_time, 'HH:mm:ss').format('HH:mm:ss'),
//           };
//           if (isCreating) {
//             await createEvent(formattedValues);
//           } else {
//             if (!values.id_event) {
//               console.error("Missing id_event for update.");
//               return;
//             }
//             await updateEvent(formattedValues);
//           }
//           onClose(); // Fermer le formulaire après la soumission
//         }}
//       >
//         {({ values, setFieldValue, handleSubmit }) => (
//           <Form>
//             <Flex justifyContent={"space-between"} alignItems="center">
//               <Box>
//                 <Text fontSize="4xl" mb={4}>{label} an Event</Text>
//               </Box>
//               {!isCreating && event?.id_event && (
//                 <Box>
//                   <Button
//                     onClick={async () => {
//                       await deleteEvent(event.id_event);
//                       onClose(); // Fermer le formulaire après la suppression
//                     }}
//                     colorScheme="red"
//                   >
//                     Delete
//                   </Button>
//                 </Box>
//               )}
//             </Flex>

//             <Field name="title">
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
//                     selected={parseDate(values.date, values.start_time)}
//                     onChange={(date) => setFieldValue('date', moment(date).format('YYYY-MM-DD'))}
//                     dateFormat="yyyy/MM/dd"
//                     placeholderText="Select date"
//                   />
//                 </FormControl>
//               )}
//             </Field>
//             <Field name="start_time">
//               {({ field }) => (
//                 <FormControl>
//                   <FormLabel>Start Time</FormLabel>
//                   <CustomTimeInput
//                     value={values.start_time}
//                     onChange={(value) => setFieldValue('start_time', value)}
//                   />
//                 </FormControl>
//               )}
//             </Field>
//             <Field name="end_time">
//               {({ field }) => (
//                 <FormControl>
//                   <FormLabel>End Time</FormLabel>
//                   <CustomTimeInput
//                     value={values.end_time}
//                     onChange={(value) => setFieldValue('end_time', value)}
//                   />
//                 </FormControl>
//               )}
//             </Field>
//             <Flex mt={4} justifyContent={"flex-end"}>
//               <Button
//                 colorScheme="teal"
//                 mr={4}
//                 onClick={handleSubmit}
//               >
//                 {label}
//               </Button>
//               <Button
//                 variant="outline"
//                 onClick={onClose}
//               >
//                 Cancel
//               </Button>
//             </Flex>
//           </Form>
//         )}
//       </Formik>
//     </Box>
//   );
// };

// export default EventForm;






// import React, { useMemo } from 'react';
// import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";
// import { Field, Form, Formik } from "formik";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import moment from 'moment';
// import { useCreateEvent, useUpdateEvent, useDeleteEvent } from "./Requests";
// import CustomTimeInput from './CustomTimeInput'; 


// const CustomTimeInput = ({ value, onChange }) => (
//   <Input
//     value={value || ""}
//     onChange={(e) => onChange(e.target.value)}
//     width="100%"
//   />
// );

// const EventForm = ({ event, onClose, isCreating }) => {
//   const label = isCreating ? "Create" : "Update";

//   // Fonction pour convertir les valeurs en objets Date
//   const parseDate = (dateStr, timeStr) => {
//     return dateStr && timeStr ? moment(`${dateStr}T${timeStr}`).toDate() : null;
//   };

//   // Initialisation des valeurs
//   const initialValues = useMemo(() => ({
//     id: event?.id || "",
//     titre: event?.titre || "",
//     description: event?.description || "",
//     date: event?.date || "",
//     heure_debut: event?.heure_debut || "",
//     heure_fin: event?.heure_fin || ""
//   }), [event]);

//   const { mutateAsync: createEvent } = useCreateEvent();
//   const { mutateAsync: updateEvent } = useUpdateEvent();
//   const { mutateAsync: deleteEvent } = useDeleteEvent();

//   return (
//     <Box boxShadow={"2xl"} padding="10" rounded="xl" bg="white" width="100%">
//       <Formik
//         initialValues={initialValues}
//         enableReinitialize
//         onSubmit={async (values) => {
//           const formattedValues = {
//             ...values,
//             date: moment(values.date).format('YYYY-MM-DD'),
//             heure_debut: moment(values.date + 'T' + values.heure_debut, 'YYYY-MM-DDTHH:mm').format('HH:mm'),
//             heure_fin: moment(values.date + 'T' + values.heure_fin, 'YYYY-MM-DDTHH:mm').format('HH:mm'),
//           };
//           if (isCreating) {
//             await createEvent(formattedValues);
//           } else {
//             if (!values.id) {
//               console.error("Missing id for update.");
//               return;
//             }
//             await updateEvent(formattedValues);
//           }
//           onClose(); // Fermer le formulaire après la soumission
//         }}
//       >
//         {({ values, setFieldValue, handleSubmit }) => (
//           <Form>
//             <Flex justifyContent={"space-between"} alignItems="center">
//               <Box>
//                 <Text fontSize="4xl" mb={4}>{label} an Event</Text>
//               </Box>
//               {!isCreating && event?.id && (
//                 <Box>
//                   <Button
//                     onClick={async () => {
//                       await deleteEvent(event.id);
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

// export default EventForm;




// import React, { useMemo } from 'react';
// import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";
// import { Field, Form, Formik } from "formik";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import moment from 'moment';
// import { useCreateEvent, useUpdateEvent, useDeleteEvent } from "./Requests";
// import CustomTimeInput from './CustomTimeInput'; 

// const EventForm = ({ event, onClose, isCreating }) => {
//   const label = isCreating ? "Create" : "Update";

//   // Fonction pour convertir les valeurs en objets Date
//   const parseDate = (dateStr, timeStr) => {
//     return dateStr && timeStr ? moment(`${dateStr}T${timeStr}`).toDate() : null;
//   };

//   // Initialisation des valeurs
//   const initialValues = useMemo(() => ({
//     id: event?.id || "",
//     titre: event?.titre || "",
//     description: event?.description || "",
//     date: event?.date || "",
//     heure_debut: event?.heure_debut || "",
//     heure_fin: event?.heure_fin || ""
//   }), [event]);

//   const { mutateAsync: createEvent } = useCreateEvent();
//   const { mutateAsync: updateEvent } = useUpdateEvent();
//   const { mutateAsync: deleteEvent } = useDeleteEvent();

//   return (
//     <Box boxShadow={"2xl"} padding="10" rounded="xl" bg="white" width="100%">
//       <Formik
//         initialValues={initialValues}
//         enableReinitialize
//         onSubmit={async (values) => {
//           const formattedValues = {
//             ...values,
//             date: moment(values.date).format('YYYY-MM-DD'),
//             heure_debut: moment(values.date + 'T' + values.heure_debut, 'YYYY-MM-DDTHH:mm').format('HH:mm'),
//             heure_fin: moment(values.date + 'T' + values.heure_fin, 'YYYY-MM-DDTHH:mm').format('HH:mm'),
//           };
//           if (isCreating) {
//             await createEvent(formattedValues);
//           } else {
//             if (!values.id) {
//               console.error("Missing id for update.");
//               return;
//             }
//             await updateEvent(formattedValues);
//           }
//           onClose(); // Fermer le formulaire après la soumission
//         }}
//       >
//         {({ values, setFieldValue, handleSubmit }) => (
//           <Form>
//             <Flex justifyContent={"space-between"} alignItems="center">
//               <Box>
//                 <Text fontSize="4xl" mb={4}>{label} an Event</Text>
//               </Box>
//               {!isCreating && event?.id && (
//                 <Box>
//                   <Button
//                     onClick={async () => {
//                       await deleteEvent(event.id);
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

// export default EventForm;





// import React, { useMemo } from 'react';
// import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";
// import { Field, Form, Formik } from "formik";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import moment from 'moment';
// import { useCreateEvent, useUpdateEvent, useDeleteEvent } from "./Requests";
// import CustomTimeInput from './CustomTimeInput'; 

// const EventForm = ({ event, onClose, isCreating }) => {
//   const label = isCreating ? "Create" : "Update";

//   // Fonction pour convertir les valeurs en objets Date
//   const parseDate = (dateStr, timeStr) => {
//     return dateStr && timeStr ? moment(`${dateStr}T${timeStr}`).toDate() : null;
//   };

//   // Initialisation des valeurs
//   const initialValues = useMemo(() => ({
//     id: event?.id || "",
//     titre: event?.titre || "",
//     description: event?.description || "",
//     date: event?.date || "",
//     heure_debut: event?.heure_debut || "",
//     heure_fin: event?.heure_fin || ""
//   }), [event]);

//   const { mutateAsync: createEvent } = useCreateEvent();
//   const { mutateAsync: updateEvent } = useUpdateEvent();
//   const { mutateAsync: deleteEvent } = useDeleteEvent();

//   return (
//     <Box boxShadow={"2xl"} padding="10" rounded="xl" bg="white" width="100%">
//       <Formik
//         initialValues={initialValues}
//         enableReinitialize
//         onSubmit={async (values) => {
//           const formattedValues = {
//             ...values,
//             date: moment(values.date).format('YYYY-MM-DD'),
//             heure_debut: moment(values.date + 'T' + values.heure_debut, 'YYYY-MM-DDTHH:mm').format('HH:mm'),
//             heure_fin: moment(values.date + 'T' + values.heure_fin, 'YYYY-MM-DDTHH:mm').format('HH:mm'),
//           };
//           if (isCreating) {
//             await createEvent(formattedValues);
//           } else {
//             if (!values.id) {
//               console.error("Missing id for update.");
//               return;
//             }
//             await updateEvent(formattedValues);
//           }
//           onClose(); // Fermer le formulaire après la soumission
//         }}
//       >
//         {({ values, setFieldValue, handleSubmit }) => (
//           <Form>
//             <Flex justifyContent={"space-between"} alignItems="center">
//               <Box>
//                 <Text fontSize="4xl" mb={4}>{label} an Event</Text>
//               </Box>
//               {!isCreating && event?.id && (
//                 <Box>
//                   <Button
//                     onClick={async () => {
//                       if (event.id) {
//                         await deleteEvent(event.id);
//                         onClose(); // Fermer le formulaire après la suppression
//                       } else {
//                         console.error("No event ID to delete.");
//                       }
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

// export default EventForm;








import React, { useMemo } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { useCreateEvent, useUpdateEvent, useDeleteEvent } from "./Requests";
import CustomTimeInput from './CustomTimeInput'; 

const EventForm = ({ event, onClose, isCreating }) => {
  const label = isCreating ? "Create" : "Update";

  // Fonction pour convertir les valeurs en objets Date
  const parseDate = (dateStr, timeStr) => {
    return dateStr && timeStr ? moment(`${dateStr}T${timeStr}`).toDate() : null;
  };

  // Initialisation des valeurs
  const initialValues = useMemo(() => ({
    id: event?.id || "",
    titre: event?.titre || "",
    description: event?.description || "",
    date: event?.date || "",
    heure_debut: event?.heure_debut || "",
    heure_fin: event?.heure_fin || ""
  }), [event]);

  const { mutateAsync: createEvent } = useCreateEvent();
  const { mutateAsync: updateEvent } = useUpdateEvent();
  const { mutateAsync: deleteEvent } = useDeleteEvent();

  return (
    <Box boxShadow={"2xl"} padding="10" rounded="xl" bg="white" width="100%">
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={async (values) => {
          const formattedValues = {
            ...values,
            date: moment(values.date).format('YYYY-MM-DD'),
            heure_debut: moment(values.date + 'T' + values.heure_debut, 'YYYY-MM-DDTHH:mm').format('HH:mm'),
            heure_fin: moment(values.date + 'T' + values.heure_fin, 'YYYY-MM-DDTHH:mm').format('HH:mm'),
          };
          if (isCreating) {
            await createEvent(formattedValues);
          } else {
            if (!event.id) {
              console.error("Missing id for update.");
              return;
            }
            await updateEvent(formattedValues);
          }
          onClose(); // Fermer le formulaire après la soumission
        }}
      >
        {({ values, setFieldValue, handleSubmit }) => (
          <Form>
            <Flex justifyContent={"space-between"} alignItems="center">
              <Box>
                <Text fontSize="4xl" mb={4}>{label} an Event</Text>
              </Box>
              {!isCreating && event?.id && (
                <Box>
                  <Button
                    onClick={async () => {
                      if (event.id) {
                        await deleteEvent(event.id);
                        onClose(); // Fermer le formulaire après la suppression
                      } else {
                        console.error("No event ID to delete.");
                      }
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
                    selected={values.heure_debut ? moment(values.date + 'T' + values.heure_debut, 'YYYY-MM-DDTHH:mm').toDate() : null}
                    showTimeSelect
                    timeIntervals={15}
                    dateFormat="h:mm aa"
                    customInput={<CustomTimeInput />}
                  />
                </FormControl>
              </Flex>
              <Flex flexBasis={"50%"}>
                <FormControl>
                  <FormLabel>End Time</FormLabel>
                  <DatePicker
                    onChange={(date) => setFieldValue("heure_fin", moment(date).format('HH:mm'))}
                    selected={values.heure_fin ? moment(values.date + 'T' + values.heure_fin, 'YYYY-MM-DDTHH:mm').toDate() : null}
                    showTimeSelect
                    timeIntervals={15}
                    dateFormat="h:mm aa"
                    customInput={<CustomTimeInput />}
                  />
                </FormControl>
              </Flex>
            </Flex>
            <Flex mt={4} justifyContent="flex-end" gap={4}>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="submit" colorScheme="blue">
                {label}
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default EventForm;
