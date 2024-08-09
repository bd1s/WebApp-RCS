// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios';
// import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

// const DoctorantRequestsforAdmin = () => {
//     const [requests, setRequests] = useState([]);

//     useEffect(() => {
//         const fetchRequests = async () => {
//             try {
//                 const response = await axios.get('/admin/doctorant-requests');
//                 setRequests(response.data);
//             } catch (error) {
//                 console.error('Error fetching doctorant requests:', error);
//             }
//         };

//         fetchRequests();
//     }, []);

//     return (
//         <Table>
//             <Thead>
//                 <Tr>
//                     <Th>ID Demande</Th>
//                     <Th>Type de Demande</Th>
//                     <Th>Statut</Th>
//                     <Th>Date de Soumission</Th>
//                     <Th>Nom</Th>
//                     <Th>Prénom</Th>
//                     <Th>Département</Th>
//                 </Tr>
//             </Thead>
//             <Tbody>
//                 {requests.map((request) => (
//                     <Tr key={request.id_demande}>
//                         <Td>{request.id_demande}</Td>
//                         <Td>{request.type_demande}</Td>
//                         <Td>{request.statut}</Td>
//                         <Td>{request.date_soumission}</Td>
//                         <Td>{request.nom}</Td>
//                         <Td>{request.prenom}</Td>
//                         <Td>{request.departement_doctorant}</Td>
//                     </Tr>
//                 ))}
//             </Tbody>
//         </Table>
//     );
// };

// export default DoctorantRequestsforAdmin;



// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios';

// const DoctorantRequestsforAdmin = () => {
//   const [requests, setRequests] = useState([]);

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
//             <tr key={request.id_demande}>
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
//     </div>
//   );
// };

// export default DoctorantRequestsforAdmin;



import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import RequestDetails from './RequestDetails';

const DoctorantRequestsforAdmin = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);

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
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Doctorant Requests</h1>
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
      {selectedRequest && (
        <RequestDetails request={selectedRequest} />
      )}
    </div>
  );
};

export default DoctorantRequestsforAdmin;
