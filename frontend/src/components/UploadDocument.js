// import React, { useState, useEffect } from 'react';
// import axios from '../api/axios';

// const UploadDocument = () => {
//     const [titre, setTitre] = useState('');
//     const [file, setFile] = useState(null);
//     const [role, setRole] = useState('');
//     const [departement, setDepartement] = useState('');
//     const [departementOptions, setDepartementOptions] = useState([]);
//     const [receiverOptions, setReceiverOptions] = useState([]);
//     const [receiverId, setReceiverId] = useState('');
//     const [fileUrl, setFileUrl] = useState('');

//     useEffect(() => {
//         if (role === 'enseignant' || role === 'doctorant') {
//             const fetchDepartements = async () => {
//                 try {
//                     const response = await axios.get('/departments');
//                     setDepartementOptions(response.data);
//                 } catch (error) {
//                     console.error('Erreur lors de la récupération des départements:', error);
//                 }
//             };
//             fetchDepartements();
//         }
//     }, [role]);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 if (role === 'doctorant' && departement) {
//                     const response = await axios.get('/doctorantsByDepartment', {
//                         params: { departement }
//                     });
//                     setReceiverOptions(response.data);
//                 } else if (role) {
//                     const params = role === 'enseignant' ? { role, departement } : { role };
//                     const response = await axios.get('/usersByRole', { params });
//                     setReceiverOptions(response.data);
//                 }
//             } catch (error) {
//                 console.error('Erreur lors de la récupération des utilisateurs:', error);
//             }
//         };

//         if (role) {
//             fetchUsers();
//         }
//     }, [role, departement]);

//     const handleRoleChange = (e) => {
//         setRole(e.target.value);
//         setDepartement(''); // Réinitialiser le département lorsque le rôle change
//         setReceiverId(''); // Réinitialiser l'ID du récepteur lorsque le rôle change
//     };

//     const handleDepartementChange = (e) => {
//         setDepartement(e.target.value);
//         setReceiverId(''); // Réinitialiser l'ID du récepteur lorsque le département change
//     };

//     const handleReceiverChange = (e) => {
//         setReceiverId(e.target.value);
//     };

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const token = localStorage.getItem('token');
//         const userId = localStorage.getItem('userId');

//         // 1. Upload the file
//         const formData = new FormData();
//         formData.append('file', file);

//         try {
//             const uploadResponse = await axios.post('/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     'Authorization': `Bearer ${token}`
//                 }
//             });
//             setFileUrl(uploadResponse.data.fileUrl);

//             // 2. Create the document
//             const documentResponse = await axios.post('/documents', {
//                 titre,
//                 fichier_url: uploadResponse.data.fileUrl,
//                 id_utilisateur: userId
//             }, {
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 }
//             });

//             // 3. Share the document
//             await axios.post('/documents/share', {
//                 id_document: documentResponse.data.id_document,
//                 id_utilisateur_recepteur: receiverId
//             }, {
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 }
//             });

//             alert('Document partagé avec succès!');
//         } catch (error) {
//             console.error('Erreur lors de l\'upload ou du partage du document:', error);
//             alert('Erreur lors de l\'upload ou du partage du document');
//         }
//     };

//     return (
//         <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md">
//             <h2 className="text-2xl font-semibold mb-4">Importer et Partager un Document</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="flex flex-col">
//                     <label className="mb-1 font-medium">Titre du Document:</label>
//                     <input 
//                         type="text" 
//                         value={titre} 
//                         onChange={(e) => setTitre(e.target.value)} 
//                         required 
//                         className="border border-gray-300 rounded-md p-2"
//                     />
//                 </div>
//                 <div className="flex flex-col">
//                     <label className="mb-1 font-medium">Fichier:</label>
//                     <input 
//                         type="file" 
//                         onChange={handleFileChange} 
//                         required 
//                         className="border border-gray-300 rounded-md p-2"
//                     />
//                 </div>
//                 <div className="flex flex-col space-y-2">
//                     <label className="font-medium">Rôle du Récepteur:</label>
//                     <select 
//                         value={role}
//                         onChange={handleRoleChange}
//                         className="border border-gray-300 rounded-md p-2"
//                     >
//                         <option value="">Sélectionner un rôle</option>
//                         <option value="doctorant">Doctorant</option>
//                         <option value="administrateur">Administrateur</option>
//                         <option value="enseignant">Enseignant</option>
//                     </select>
//                 </div>
//                 {role === 'enseignant' && (
//                     <div className="flex flex-col space-y-2">
//                         <label className="font-medium">Département:</label>
//                         <select 
//                             value={departement}
//                             onChange={handleDepartementChange}
//                             className="border border-gray-300 rounded-md p-2"
//                         >
//                             <option value="">Sélectionner un département</option>
//                             {departementOptions.map(dep => (
//                                 <option key={dep} value={dep}>{dep}</option>
//                             ))}
//                         </select>
//                     </div>
//                 )}
//                 {role === 'doctorant' && (
//                     <div className="flex flex-col space-y-2">
//                         <label className="font-medium">Département:</label>
//                         <select 
//                             value={departement}
//                             onChange={handleDepartementChange}
//                             className="border border-gray-300 rounded-md p-2"
//                         >
//                             <option value="">Sélectionner un département</option>
//                             {departementOptions.map(dep => (
//                                 <option key={dep} value={dep}>{dep}</option>
//                             ))}
//                         </select>
//                     </div>
//                 )}
//                 {role && (role !== 'enseignant' || departement) && (
//                     <div className="flex flex-col space-y-2">
//                         <label className="font-medium">Nom du Récepteur:</label>
//                         <select 
//                             value={receiverId}
//                             onChange={handleReceiverChange}
//                             className="border border-gray-300 rounded-md p-2"
//                         >
//                             <option value="">Sélectionner un récepteur</option>
//                             {receiverOptions.map(user => (
//                                 <option key={user.id} value={user.id}>{user.prenom} {user.nom}</option>
//                             ))}
//                         </select>
//                     </div>
//                 )}
//                 <button 
//                     type="submit"
//                     className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
//                 >
//                     Partager le Document
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default UploadDocument;




import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { jwtDecode as jwt_decode } from 'jwt-decode';

const UploadDocument = () => {
    const [titre, setTitre] = useState('');
    const [file, setFile] = useState(null);
    const [role, setRole] = useState('');
    const [departement, setDepartement] = useState('');
    const [departementOptions, setDepartementOptions] = useState([]);
    const [receiverOptions, setReceiverOptions] = useState([]);
    const [receiverId, setReceiverId] = useState('');

    useEffect(() => {
        if (role === 'enseignant' || role === 'doctorant') {
            const fetchDepartements = async () => {
                try {
                    const response = await axios.get('/departments');
                    setDepartementOptions(response.data);
                } catch (error) {
                    console.error('Erreur lors de la récupération des départements:', error);
                }
            };
            fetchDepartements();
        }
    }, [role]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                if (role === 'doctorant' && departement) {
                    const response = await axios.get('/doctorantsByDepartment', {
                        params: { departement }
                    });
                    setReceiverOptions(response.data);
                } else if (role) {
                    const params = role === 'enseignant' ? { role, departement } : { role };
                    const response = await axios.get('/usersByRole', { params });
                    setReceiverOptions(response.data);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des utilisateurs:', error);
            }
        };

        if (role) {
            fetchUsers();
        }
    }, [role, departement]);

    const handleRoleChange = (e) => {
        setRole(e.target.value);
        setDepartement(''); 
        setReceiverId('');
    };

    const handleDepartementChange = (e) => {
        setDepartement(e.target.value);
        setReceiverId('');
    };

    const handleReceiverChange = (e) => {
        setReceiverId(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
    
        // Décodez le token pour obtenir l'ID de l'utilisateur
        let userId = null;
        if (token) {
            try {
                const decodedToken = jwt_decode(token);
                userId = decodedToken.userId || decodedToken.id || decodedToken.user_id;
            } catch (err) {
                console.error('Erreur lors du décodage du token:', err);
                alert('Session invalide. Veuillez vous reconnecter.');
                return;
            }
        } else {
            alert('Utilisateur non authentifié. Veuillez vous connecter.');
            return;
        }
    
        // Création du document avec le fichier
        const formData = new FormData();
        formData.append('file', file);
        formData.append('titre', titre);
        formData.append('id_utilisateur', userId);
        formData.append('id_utilisateur_recepteur', receiverId);
    
        // Log des données envoyées
        console.log('Données envoyées au backend:');
        console.log('Titre:', titre);
        console.log('ID Utilisateur:', userId);
        console.log('ID Utilisateur Récepteur:', receiverId);
        console.log('Fichier:', file);
    
        try {
            // 1. Upload and create the document
            const documentResponse = await axios.post('/documents', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
    
            // 2. Share the document
            await axios.post('/documents/share', {
                id_document: documentResponse.data.id_document,
                id_utilisateur_recepteur: receiverId
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            alert('Document partagé avec succès!');
        } catch (error) {
            console.error('Erreur lors de l\'upload ou du partage du document:', error.response ? error.response.data : error.message);
            alert('Erreur lors de l\'upload ou du partage du document');
        }
    };
    
    

    return (
        <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Importer et Partager un Document</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Titre du Document:</label>
                    <input 
                        type="text" 
                        value={titre} 
                        onChange={(e) => setTitre(e.target.value)} 
                        required 
                        className="border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Fichier:</label>
                    <input 
                        type="file" 
                        onChange={handleFileChange} 
                        required 
                        className="border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="font-medium">Rôle du Récepteur:</label>
                    <select 
                        value={role}
                        onChange={handleRoleChange}
                        className="border border-gray-300 rounded-md p-2"
                    >
                        <option value="">Sélectionner un rôle</option>
                        <option value="doctorant">Doctorant</option>
                        <option value="administrateur">Administrateur</option>
                        <option value="enseignant">Enseignant</option>
                    </select>
                </div>
                {role === 'enseignant' && (
                    <div className="flex flex-col space-y-2">
                        <label className="font-medium">Département:</label>
                        <select 
                            value={departement}
                            onChange={handleDepartementChange}
                            className="border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Sélectionner un département</option>
                            {departementOptions.map(dep => (
                                <option key={dep} value={dep}>{dep}</option>
                            ))}
                        </select>
                    </div>
                )}
                {role === 'doctorant' && (
                    <div className="flex flex-col space-y-2">
                        <label className="font-medium">Département:</label>
                        <select 
                            value={departement}
                            onChange={handleDepartementChange}
                            className="border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Sélectionner un département</option>
                            {departementOptions.map(dep => (
                                <option key={dep} value={dep}>{dep}</option>
                            ))}
                        </select>
                    </div>
                )}
                {role && (role !== 'enseignant' || departement) && (
                    <div className="flex flex-col space-y-2">
                        <label className="font-medium">Nom du Récepteur:</label>
                        <select 
                            value={receiverId}
                            onChange={handleReceiverChange}
                            className="border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Sélectionner un récepteur</option>
                            {receiverOptions.map(user => (
                                <option key={user.id} value={user.id}>{user.prenom} {user.nom}</option>
                            ))}
                        </select>
                    </div>
                )}
                <button 
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
                >
                    Partager le Document
                </button>
            </form>
        </div>
    );
};

export default UploadDocument;
