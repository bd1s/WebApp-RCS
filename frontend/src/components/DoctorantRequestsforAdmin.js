// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios';
// import RequestDetails from './RequestDetails';

// const DoctorantRequestsforAdmin = () => {
//   const [requests, setRequests] = useState([]);
//   const [selectedRequest, setSelectedRequest] = useState(null);

//   useEffect(() => {
//     // Fetch the data from the backend
//     axios.get('/admin/doctorant-requests')
//       .then(response => {
//         setRequests(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching doctorant requests:', error);
//       });
//   }, []);

//   const handleRowClick = (request) => {
//     setSelectedRequest(request);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Doctorant Requests</h1>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="px-4 py-2 border-b">ID Demande</th>
//             <th className="px-4 py-2 border-b">Type Demande</th>
//             <th className="px-4 py-2 border-b">Statut</th>
//             <th className="px-4 py-2 border-b">Date de Soumission</th>
//             <th className="px-4 py-2 border-b">Nom</th>
//             <th className="px-4 py-2 border-b">Prénom</th>
//             <th className="px-4 py-2 border-b">Département</th>
//           </tr>
//         </thead>
//         <tbody>
//           {requests.map((request) => (
//             <tr 
//               key={request.id_demande} 
//               onClick={() => handleRowClick(request)}
//               className="cursor-pointer hover:bg-gray-100"
//             >
//               <td className="px-4 py-2 border-b text-center">{request.id_demande}</td>
//               <td className="px-4 py-2 border-b text-center">{request.type_demande}</td>
//               <td className="px-4 py-2 border-b text-center">{request.statut}</td>
//               <td className="px-4 py-2 border-b text-center">{request.date_soumission}</td>
//               <td className="px-4 py-2 border-b text-center">{request.nom}</td>
//               <td className="px-4 py-2 border-b text-center">{request.prenom}</td>
//               <td className="px-4 py-2 border-b text-center">{request.departement}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {selectedRequest && (
//         <RequestDetails request={selectedRequest} />
//       )}
//     </div>
//   );
// };

// export default DoctorantRequestsforAdmin;

import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import RequestDetails from './RequestDetails';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react";

const DoctorantRequestsforAdmin = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // Fetch the data from the backend
    axios.get('/admin/doctorant-requests')
      .then(response => {
        setRequests(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctorant requests:', error);
      });
  }, []);

  const handleRowClick = (request) => {
    setSelectedRequest(request);
    onOpen(); // Ouvrir la modale lors du clic sur une ligne
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Doctorant Requests</h1>

      {/* Conteneur avec scrolling */}
      <div style={{ height: '500px', overflowY: 'scroll', border: '1px solid #ccc' }}>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">ID Demande</th>
              <th className="px-4 py-2 border-b">Type Demande</th>
              <th className="px-4 py-2 border-b">Statut</th>
              <th className="px-4 py-2 border-b">Date de Soumission</th>
              <th className="px-4 py-2 border-b">Nom</th>
              <th className="px-4 py-2 border-b">Prénom</th>
              <th className="px-4 py-2 border-b">Département</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr 
                key={request.id_demande} 
                onClick={() => handleRowClick(request)}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="px-4 py-2 border-b text-center">{request.id_demande}</td>
                <td className="px-4 py-2 border-b text-center">{request.type_demande}</td>
                <td className="px-4 py-2 border-b text-center">{request.statut}</td>
                <td className="px-4 py-2 border-b text-center">{request.date_soumission}</td>
                <td className="px-4 py-2 border-b text-center">{request.nom}</td>
                <td className="px-4 py-2 border-b text-center">{request.prenom}</td>
                <td className="px-4 py-2 border-b text-center">{request.departement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal pour afficher les détails de la demande */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Détails de la Demande</ModalHeader>
          <ModalBody>
            {selectedRequest && (
              <RequestDetails request={selectedRequest} />
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DoctorantRequestsforAdmin;
