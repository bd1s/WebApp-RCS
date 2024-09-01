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

//     const downloadDocument = (url, titre) => {
//         try {
//             // Créer un lien temporaire pour télécharger le fichier
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', titre);
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
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
//                             onClick={() => downloadDocument(doc.fichier_url, doc.titre)} 
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


// //calendar
// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// const SharedDocuments = () => {
//     const [documents, setDocuments] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [date, setDate] = useState(new Date());

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

//     const downloadDocument = (url, titre) => {
//         try {
//             // Créer un lien temporaire pour télécharger le fichier
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', titre);
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//         } catch (err) {
//             console.error('Erreur lors du téléchargement du document:', err);
//             setError('Erreur lors du téléchargement du document.');
//         }
//     };

//     const documentsForSelectedDate = documents.filter(doc => {
//         const docDate = new Date(doc.createdAt);
//         return (
//             docDate.getFullYear() === date.getFullYear() &&
//             docDate.getMonth() === date.getMonth() &&
//             docDate.getDate() === date.getDate()
//         );
//     });

//     if (loading) {
//         return <p className="text-center text-gray-500">Chargement des documents...</p>;
//     }

//     if (error) {
//         return <p className="text-center text-red-500">{error}</p>;
//     }

//     return (
//         <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-md">
//             <h2 className="text-2xl font-semibold mb-4">Documents partagés avec vous</h2>
//             <Calendar
//                 onChange={setDate}
//                 value={date}
//                 tileContent={({ date, view }) =>
//                     view === 'month' && documents.some(doc => {
//                         const docDate = new Date(doc.createdAt);
//                         return (
//                             docDate.getFullYear() === date.getFullYear() &&
//                             docDate.getMonth() === date.getMonth() &&
//                             docDate.getDate() === date.getDate()
//                         );
//                     }) ? <div className="indicator bg-blue-500"></div> : null
//                 }
//             />
//             <h3 className="text-xl font-semibold mt-4">Documents partagés le {date.toLocaleDateString()} :</h3>
//             <ul className="space-y-4">
//                 {documentsForSelectedDate.map((doc) => (
//                     <li key={doc.id_document} className="p-4 border border-gray-200 rounded-md shadow-sm">
//                         <p className="text-lg font-semibold">{doc.titre}</p>
//                         <p className="text-gray-700">Partagé par: {doc.prenom} {doc.nom} ({doc.email})</p>
//                         <p className="text-gray-500">Date de partage: {new Date(doc.createdAt).toLocaleDateString()}</p>
//                         <button 
//                             onClick={() => downloadDocument(doc.fichier_url, doc.titre)} 
//                             className="mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
//                         >
//                             Télécharger
//                         </button>
//                     </li>
//                 ))}
//                 {documentsForSelectedDate.length === 0 && (
//                     <p className="text-center text-gray-500">Aucun document partagé à cette date.</p>
//                 )}
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
    const [searchDate, setSearchDate] = useState('');
    const [searchName, setSearchName] = useState('');
    const [view, setView] = useState('list'); // 'list' or 'timeline'

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

    const filteredDocuments = documents.filter(doc => {
        const docDate = new Date(doc.createdAt).toISOString().split('T')[0];
        const fullName = `${doc.prenom} ${doc.nom}`.toLowerCase();
        
        return (
            (searchDate ? docDate === searchDate : true) &&
            (searchName ? fullName.includes(searchName.toLowerCase()) : true)
        );
    });
    

    const getWeekNumber = (date) => {
        const start = new Date(date.getFullYear(), 0, 1);
        const diff = date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay / 7) + 1;
    };

    const getDocumentsByWeek = () => {
        const weeks = {};
        filteredDocuments.forEach(doc => {
            const docDate = new Date(doc.createdAt);
            const weekNumber = getWeekNumber(docDate);
            const month = docDate.toLocaleString('fr-FR', { month: 'long' });
            const year = docDate.getFullYear();
            const weekLabel = `Semaine ${weekNumber}, ${month}, ${year}`;

            if (!weeks[weekLabel]) {
                weeks[weekLabel] = [];
            }
            weeks[weekLabel].push(doc);
        });
        return weeks;
    };

    const documentsByWeek = getDocumentsByWeek();

    if (loading) {
        return <p className="text-center text-gray-500">Chargement des documents...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Documents partagés avec vous</h2>

            <div className="flex flex-col md:flex-row justify-between mb-4">
                <input
                    type="date"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                    className="p-2 mb-2 md:mb-0 md:mr-2 border border-gray-300 rounded-md"
                    placeholder="Recherche par date"
                />
                <input
                    type="text"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md"
                    placeholder="Recherche par nom complet"
                />
            </div>

            <div className="flex justify-between mb-4">
                <button
                    className={`p-2 rounded-md ${view === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setView('list')}
                >
                    Voir la liste
                </button>
                <button
                    className={`p-2 rounded-md ${view === 'timeline' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setView('timeline')}
                >
                    Voir par tableau de temps
                </button>
            </div>

            {view === 'list' && (
                <ul className="space-y-4">
                    {filteredDocuments.map((doc) => (
                        <li key={doc.id_document} className="p-4 border border-gray-200 rounded-md shadow-sm">
                            <p className="text-lg font-semibold">{doc.titre}</p>
                            <p className="text-gray-700">Partagé par: {doc.prenom} {doc.nom} ({doc.email})</p>
                            <p className="text-gray-500">Date de partage: {new Date(doc.createdAt).toLocaleDateString('fr-FR')}</p>
                            <button 
                                onClick={() => downloadDocument(doc.fichier_url, doc.titre)} 
                                className="mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                            >
                                Télécharger
                            </button>
                        </li>
                    ))}
                    {filteredDocuments.length === 0 && (
                        <p className="text-center text-gray-500">Aucun document trouvé.</p>
                    )}
                </ul>
            )}

            {view === 'timeline' && (
                <>
                    {Object.keys(documentsByWeek).map(week => (
                        <div key={week} className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">{week}</h3>
                            <ul className="space-y-2">
                                {documentsByWeek[week].map(doc => (
                                    <li key={doc.id_document} className="p-4 border border-gray-200 rounded-md shadow-sm">
                                        <p className="text-lg font-semibold">{doc.titre}</p>
                                        <p className="text-gray-700">Partagé par: {doc.prenom} {doc.nom} ({doc.email})</p>
                                        <p className="text-gray-500">Date de partage: {new Date(doc.createdAt).toLocaleDateString('fr-FR')}</p>
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
                    ))}
                </>
            )}
        </div>
    );
};

export default SharedDocuments;
