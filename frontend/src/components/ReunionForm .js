

// import React, { useEffect, useMemo, useState } from 'react';
// import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Textarea, Select } from "@chakra-ui/react";
// import { Field, Form, Formik } from "formik";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import moment from 'moment';
// import CustomTimeInput from './CustomTimeInput'; 
// import { useCreateReunion, useUpdateReunion, useDeleteReunion } from "./Requests";
// import axios from 'axios';

// const ReunionForm = ({ reunion, onClose, isCreating }) => {
//   const [departments, setDepartments] = useState([]);
//   const [doctorants, setDoctorants] = useState([]);
//   const [selectedDepartment, setSelectedDepartment] = useState("");

//   const label = isCreating ? "Create" : "Update";

//   const initialValues = useMemo(() => ({
//     id_reunion: reunion?.id_reunion || "",
//     titre: reunion?.titre || "",
//     description: reunion?.description || "",
//     date: reunion?.date || "",
//     heure_debut: reunion?.heure_debut || "",
//     heure_fin: reunion?.heure_fin || "",
//     doctorants: reunion?.doctorants || []
//   }), [reunion]);

//   useEffect(() => {
//     const fetchDepartments = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/api/reunions/departements');
//         setDepartments(response.data);
//       } catch (error) {
//         console.error("Error fetching departments:", error);
//       }
//     };

//     fetchDepartments();
//   }, []);

//   useEffect(() => {
//     if (selectedDepartment) {
//       const fetchDoctorants = async () => {
//         try {
//           const response = await axios.get(`http://localhost:3001/api/reunions/doctorants/departement/${selectedDepartment}`);
//           setDoctorants(response.data);
//         } catch (error) {
//           console.error("Error fetching doctorants:", error);
//         }
//       };
  
//       fetchDoctorants();
//     }
//   }, [selectedDepartment]);

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
//           onClose();
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
//                       onClose();
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
//                     selected={values.heure_debut ? moment(`1900-01-01T${values.heure_debut}`).toDate() : null}
//                     showTimeSelect
//                     timeIntervals={15}
//                     dateFormat="HH:mm"
//                     customInput={<CustomTimeInput />}
//                   />
//                 </FormControl>
//               </Flex>
//               <Flex flexBasis={"50%"}>
//                 <FormControl>
//                   <FormLabel>End Time</FormLabel>
//                   <DatePicker
//                     onChange={(date) => setFieldValue("heure_fin", moment(date).format('HH:mm'))}
//                     selected={values.heure_fin ? moment(`1900-01-01T${values.heure_fin}`).toDate() : null}
//                     showTimeSelect
//                     timeIntervals={15}
//                     dateFormat="HH:mm"
//                     customInput={<CustomTimeInput />}
//                   />
//                 </FormControl>
//               </Flex>
//             </Flex>

//             <Field name="departement">
//               {({ field }) => (
//                 <FormControl>
//                   <FormLabel>Select Department</FormLabel>
//                   <Select
//                     {...field}
//                     placeholder="Select a department"
//                     onChange={(e) => {
//                       setSelectedDepartment(e.target.value);
//                       setFieldValue("departement", e.target.value);
//                     }}
//                   >
//                     {departments.map((dept, index) => (
//                       <option key={index} value={dept}>{dept}</option>
//                     ))}
//                   </Select>
//                 </FormControl>
//               )}
//             </Field>

//             <Field name="doctorants">
//   {({ field, form }) => (
//     <FormControl>
//       <FormLabel>Select Doctorants</FormLabel>
//       <Flex direction="column">
//         {doctorants.map((doc) => (
//           <Box key={doc.id}>
//             <input
//               type="checkbox"
//               id={`doctorant-${doc.id}`}
//               name={field.name}
//               value={doc.id}
//               checked={field.value.includes(doc.id)}
//               onChange={(e) => {
//                 const selectedDoctorants = [...field.value];
//                 if (e.target.checked) {
//                   selectedDoctorants.push(doc.id);
//                 } else {
//                   const index = selectedDoctorants.indexOf(doc.id);
//                   if (index > -1) {
//                     selectedDoctorants.splice(index, 1);
//                   }
//                 }
//                 form.setFieldValue(field.name, selectedDoctorants);
//               }}
//             />
//             <label htmlFor={`doctorant-${doc.id}`}>{`${doc.nom} ${doc.prenom}`}</label>
//           </Box>
//         ))}
//       </Flex>
//     </FormControl>
//   )}
// </Field>




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


import React, { useEffect, useMemo, useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Textarea, Select, Checkbox, Collapse } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import CustomTimeInput from './CustomTimeInput'; 
import { useCreateReunion, useUpdateReunion, useDeleteReunion } from "./Requests";
import axios from 'axios';

const ReunionForm = ({ reunion, onClose, isCreating }) => {
  const [departments, setDepartments] = useState([]);
  const [doctorants, setDoctorants] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  const label = isCreating ? "Create" : "Update";

  const initialValues = useMemo(() => ({
    id_reunion: reunion?.id_reunion || "",
    titre: reunion?.titre || "",
    description: reunion?.description || "",
    date: reunion?.date || "",
    heure_debut: reunion?.heure_debut || "",
    heure_fin: reunion?.heure_fin || "",
    doctorants: reunion?.doctorants || []
  }), [reunion]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/reunions/departements');
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  useEffect(() => {
    if (selectedDepartment) {
      const fetchDoctorants = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/api/reunions/doctorants/departement/${selectedDepartment}`);
          setDoctorants(response.data);
        } catch (error) {
          console.error("Error fetching doctorants:", error);
        }
      };
  
      fetchDoctorants();
    }
  }, [selectedDepartment]);

  const { mutateAsync: createReunion } = useCreateReunion();
  const { mutateAsync: updateReunion } = useUpdateReunion();
  const { mutateAsync: deleteReunion } = useDeleteReunion();

  const handleSelectChange = (form, field, docId, checked) => {
    const selectedDoctorants = [...field.value];
    if (checked) {
      selectedDoctorants.push(docId);
    } else {
      const index = selectedDoctorants.indexOf(docId);
      if (index > -1) {
        selectedDoctorants.splice(index, 1);
      }
    }
    form.setFieldValue(field.name, selectedDoctorants);
    setSelectAll(selectedDoctorants.length === doctorants.length);
  };

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
          onClose();
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
                      onClose();
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

            <Field name="departement">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Select Department</FormLabel>
                  <Select
                    {...field}
                    placeholder="Select a department"
                    onChange={(e) => {
                      setSelectedDepartment(e.target.value);
                      setFieldValue("departement", e.target.value);
                    }}
                  >
                    {departments.map((dept, index) => (
                      <option key={index} value={dept}>{dept}</option>
                    ))}
                  </Select>
                </FormControl>
              )}
            </Field>

            <Field name="doctorants">
  {({ field, form }) => (
    <FormControl>
      <FormLabel>Select Doctorants</FormLabel>
      <Flex direction="column" mt={2}>
        {/* Bouton pour afficher/masquer le dropdown */}
        <Button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          colorScheme="blue"
        >
          {isDropdownOpen ? "Hide Doctorants" : "Show Doctorants"}
        </Button>

        {/* Dropdown avec les doctorants */}
        <Collapse in={isDropdownOpen}>
          <Box 
            overflowY="auto"      
            maxH="80px"          
            borderWidth="1px"     
            borderRadius="md"     
            p={2}                
            mt={2}                
          >
            {/* Checkbox pour tout sélectionner */}
            <Checkbox
              isChecked={selectAll}
              onChange={(event) => {
                const checked = event.target.checked;
                setSelectAll(checked);
                const allDoctorantIds = doctorants.map(doc => doc.id);
                form.setFieldValue(field.name, checked ? allDoctorantIds : []); 
              }}
            >
              Select All
            </Checkbox>
            
            {/* Liste des doctorants en cases à cocher */}
            <Box mt={2} display="flex" flexDirection="column"> {/* Ajout d'un display flex direction column */}
              {doctorants.map((doc) => (
                <Checkbox
                  key={doc.id}
                  id={`doctorant-${doc.id}`}
                  name={field.name}
                  value={doc.id}
                  isChecked={field.value.includes(doc.id)} 
                  onChange={(e) => handleSelectChange(form, field, doc.id, e.target.checked)} 
                  width="100%" 
                >
                  {`${doc.nom} ${doc.prenom}`}  
                </Checkbox>
              ))}
            </Box>
          </Box>
        </Collapse>
      </Flex>
    </FormControl>
  )}
</Field>



            <Button colorScheme="blue" type="submit" onClick={handleSubmit}>
              {label}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ReunionForm;
