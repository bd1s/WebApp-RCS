// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios';

// const SharedDocuments = () => {
//     const [documents, setDocuments] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchSharedDocuments = async () => {
//             try {
//                 // Récupérer le token depuis localStorage
//                 const token = localStorage.getItem('token');
                
//                 // Appeler l'API pour récupérer les documents partagés
//                 const response = await axios.get('/documents/shared', {
//                     headers: {
//                         'Authorization': `Bearer ${token}`
//                     }
//                 });
                
//                 setDocuments(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError('Erreur lors de la récupération des documents');
//                 setLoading(false);
//             }
//         };

//         fetchSharedDocuments();
//     }, []);

//     const handleDownload = async (id_document) => {
//         try {
//             // Récupérer le token depuis localStorage
//             const token = localStorage.getItem('token');

//             // Appeler l'API pour télécharger le document
//             const response = await axios.get(`/documents/download/${id_document}`, {
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 },
//                 responseType: 'blob' // Important pour le téléchargement de fichiers
//             });

//             // Créer un lien pour télécharger le fichier
//             const url = window.URL.createObjectURL(new Blob([response.data]));
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', response.headers['content-disposition'].split('filename=')[1]);
//             document.body.appendChild(link);
//             link.click();
//             link.remove();
//         } catch (err) {
//             console.error('Erreur lors du téléchargement du document:', err);
//             alert('Erreur lors du téléchargement du document');
//         }
//     };

//     if (loading) {
//         return <div>Chargement des documents...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     return (
//         <div>
//             <h2>Documents Partagés</h2>
//             <ul>
//                 {documents.map(document => (
//                     <li key={document.id_document}>
//                         {document.titre}
//                         <button onClick={() => handleDownload(document.id_document)}>Télécharger</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default SharedDocuments;




// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios';

// const SharedDocuments = () => {
//     const [documents, setDocuments] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Récupérer les documents partagés
//         const fetchDocuments = async () => {
//             try {
//                 const response = await axios.get('/documents/shared');
//                 console.log('Documents partagés reçus:', response.data); // Log des données reçues
//                 setDocuments(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 console.error('Erreur lors de la récupération des documents partagés:', err);
//                 setError('Erreur lors de la récupération des documents partagés.');
//                 setLoading(false);
//             }
//         };

//         fetchDocuments();
//     }, []);

//     const downloadDocument = async (id_document, titre) => {
//         try {
//             const response = await axios.get(`/documents/${id_document}/download`, {
//                 responseType: 'blob', // important pour gérer les fichiers binaires
//             });

//             console.log('Téléchargement du document:', { id_document, titre }); // Log des informations du document téléchargé

//             // Créer un lien pour télécharger le fichier
//             const url = window.URL.createObjectURL(new Blob([response.data]));
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', titre); // nom du fichier
//             document.body.appendChild(link);
//             link.click();

//             // Nettoyer l'URL après le téléchargement
//             window.URL.revokeObjectURL(url);
//         } catch (err) {
//             console.error('Erreur lors du téléchargement du document:', err);
//             setError('Erreur lors du téléchargement du document.');
//         }
//     };

//     if (loading) {
//         return <p>Chargement des documents...</p>;
//     }

//     if (error) {
//         return <p>{error}</p>;
//     }

//     return (
//         <div>
//             <h2>Documents partagés avec vous</h2>
//             <ul>
//                 {documents.map((doc) => (
//                     <li key={doc.id_document}>
//                         <p><strong>{doc.titre}</strong></p>
//                         <p>Partagé par: {doc.prenom} {doc.nom} ({doc.email})</p>
//                         <p>Date de partage: {new Date(doc.createdAt).toLocaleDateString()}</p>
//                         <button onClick={() => downloadDocument(doc.id_document, doc.titre)}>
//                             Télécharger
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default SharedDocuments;


// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios';

// const SharedDocuments = () => {
//     const [documents, setDocuments] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchDocuments = async () => {
//             try {
//                 const response = await axios.get('/documents/shared');
//                 setDocuments(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 console.error('Erreur lors de la récupération des documents partagés:', err);
//                 setError('Erreur lors de la récupération des documents partagés.');
//                 setLoading(false);
//             }
//         };

//         fetchDocuments();
//     }, []);

//     const downloadDocument = async (id_document, titre) => {
//         try {
//             const response = await axios.get(`/documents/${id_document}/download`, {
//                 responseType: 'blob',
//             });

//             const url = window.URL.createObjectURL(new Blob([response.data]));
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', titre);
//             document.body.appendChild(link);
//             link.click();
//             window.URL.revokeObjectURL(url);
//         } catch (err) {
//             console.error('Erreur lors du téléchargement du document:', err);
//             setError('Erreur lors du téléchargement du document.');
//         }
//     };

//     if (loading) {
//         return <p className="text-center text-gray-500">Chargement des documents...</p>;
//     }

//     if (error) {
//         return <p className="text-center text-red-500">{error}</p>;
//     }

//     return (
//         <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-md">
//             <h2 className="text-2xl font-semibold mb-4">Documents partagés avec vous</h2>
//             <ul className="space-y-4">
//                 {documents.map((doc) => (
//                     <li key={doc.id_document} className="p-4 border border-gray-200 rounded-md shadow-sm">
//                         <p className="text-lg font-semibold">{doc.titre}</p>
//                         <p className="text-gray-700">Partagé par: {doc.prenom} {doc.nom} ({doc.email})</p>
//                         <p className="text-gray-500">Date de partage: {new Date(doc.createdAt).toLocaleDateString()}</p>
//                         <button 
//                             onClick={() => downloadDocument(doc.id_document, doc.titre)} 
//                             className="mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
//                         >
//                             Télécharger
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default SharedDocuments;

import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const SharedDocuments = () => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await axios.get('/documents/shared');
                setDocuments(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Erreur lors de la récupération des documents partagés:', err);
                setError('Erreur lors de la récupération des documents partagés.');
                setLoading(false);
            }
        };

        fetchDocuments();
    }, []);

    const downloadDocument = (url, titre) => {
        try {
            // Créer un lien temporaire pour télécharger le fichier
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', titre);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (err) {
            console.error('Erreur lors du téléchargement du document:', err);
            setError('Erreur lors du téléchargement du document.');
        }
    };

    if (loading) {
        return <p className="text-center text-gray-500">Chargement des documents...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Documents partagés avec vous</h2>
            <ul className="space-y-4">
                {documents.map((doc) => (
                    <li key={doc.id_document} className="p-4 border border-gray-200 rounded-md shadow-sm">
                        <p className="text-lg font-semibold">{doc.titre}</p>
                        <p className="text-gray-700">Partagé par: {doc.prenom} {doc.nom} ({doc.email})</p>
                        <p className="text-gray-500">Date de partage: {new Date(doc.createdAt).toLocaleDateString()}</p>
                        <button 
                            onClick={() => downloadDocument(doc.fichier_url, doc.titre)} 
                            className="mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                        >
                            Télécharger
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SharedDocuments;
