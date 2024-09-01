
// import React, { useState } from 'react';
// import axios from '../api/axios';

// const UploadDocument = () => {
//     const [titre, setTitre] = useState('');
//     const [file, setFile] = useState(null);
//     const [receiverName, setReceiverName] = useState({ nom: '', prenom: '' });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         const token = localStorage.getItem('token');
//         const userId = localStorage.getItem('userId');
    
//         // 1. Upload the file to DigitalOcean Spaces
//         const formData = new FormData();
//         formData.append('file', file);
        
//         let fileUrl;
//         try {
//             const uploadResponse = await axios.post('/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     'Authorization': `Bearer ${token}`
//                 }
//             });
//             fileUrl = uploadResponse.data.fileUrl; // URL du fichier dans DigitalOcean Spaces
//         } catch (uploadError) {
//             console.error("Erreur lors de l'upload du fichier:", uploadError);
//             alert('Erreur lors de l\'upload du fichier');
//             return;
//         }
    
//         // 2. Create the document in the backend with the file URL
//         try {
//             const response = await axios.post('/documents', {
//                 titre,
//                 fichier_url: fileUrl, // Envoyer l'URL du fichier au lieu du fichier lui-même
//                 id_utilisateur: userId
//             }, {
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 }
//             });
//             const id_document = response.data.id_document;
    
//             // 3. Share the document
//             await axios.post('/documents/share', {
//                 id_document,
//                 nom_complet_recepteur: receiverName
//             }, {
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 }
//             });
    
//             alert('Document partagé avec succès!');
//         } catch (error) {
//             console.error("Erreur lors du partage du document:", error);
//             alert('Erreur lors du partage du document');
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
//                         onChange={(e) => setFile(e.target.files[0])} 
//                         required 
//                         className="border border-gray-300 rounded-md p-2"
//                     />
//                 </div>
//                 <div className="flex flex-col space-y-2">
//                     <label className="font-medium">Nom du Récepteur:</label>
//                     <div className="flex space-x-2">
//                         <input 
//                             type="text" 
//                             placeholder="Nom"
//                             value={receiverName.nom} 
//                             onChange={(e) => setReceiverName({ ...receiverName, nom: e.target.value })} 
//                             required 
//                             className="border border-gray-300 rounded-md p-2 flex-1"
//                         />
//                         <input 
//                             type="text" 
//                             placeholder="Prénom"
//                             value={receiverName.prenom} 
//                             onChange={(e) => setReceiverName({ ...receiverName, prenom: e.target.value })} 
//                             required 
//                             className="border border-gray-300 rounded-md p-2 flex-1"
//                         />
//                     </div>
//                 </div>
//                 <button 
//                     type="submit" 
//                     className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
//                 >
//                     Partager Document
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default UploadDocument;












// import React, { useState, useEffect } from 'react';
// import axios from '../api/axios';

// const UploadDocument = () => {
//     const [titre, setTitre] = useState('');
//     const [file, setFile] = useState(null);
//     const [role, setRole] = useState('');
//     const [receiverOptions, setReceiverOptions] = useState([]);
//     const [receiverId, setReceiverId] = useState('');
//     const [fileUrl, setFileUrl] = useState('');

//     useEffect(() => {
//         if (role) {
//             // Fetch users based on selected role
//             const fetchUsers = async () => {
//                 try {
//                     const response = await axios.get('/usersByRole', {
//                         params: { role }
//                     });
//                     setReceiverOptions(response.data);
//                 } catch (error) {
//                     console.error('Erreur lors de la récupération des utilisateurs:', error);
//                 }
//             };
//             fetchUsers();
//         }
//     }, [role]);

//     const handleRoleChange = (e) => {
//         setRole(e.target.value);
//         setReceiverId(''); // Reset receiver ID when role changes
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
        
//         // 1. Upload the file to DigitalOcean Spaces
//         const formData = new FormData();
//         formData.append('file', file);
        
//         try {
//             const uploadResponse = await axios.post('/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     'Authorization': `Bearer ${token}`
//                 }
//             });
//             setFileUrl(uploadResponse.data.fileUrl); // Set file URL

//             // 2. Create the document in the backend with the file URL
//             const documentResponse = await axios.post('/documents', {
//                 titre,
//                 fichier_url: uploadResponse.data.fileUrl,
//                 id_utilisateur: userId
//             }, {
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 }
//             });
//             const id_document = documentResponse.data.id_document;

//             // 3. Share the document
//             await axios.post('/documents/share', {
//                 id_document,
//                 id_utilisateur_recepteur: receiverId // Use receiver ID directly
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
//                 {role && (
//                     <div className="flex flex-col space-y-2">
//                         <label className="font-medium">Nom du Récepteur:</label>
//                         <select 
//                             value={receiverId}
//                             onChange={handleReceiverChange}
//                             className="border border-gray-300 rounded-md p-2"
//                         >
//                             <option value="">Sélectionner un récepteur</option>
//                             {receiverOptions.map((user) => (
//                                 <option key={user.id} value={user.id}>
//                                     {user.nom} {user.prenom}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                 )}
//                 <button 
//                     type="submit" 
//                     className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
//                 >
//                     Partager Document
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default UploadDocument;






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
//         if (role === 'enseignant') {
//             const fetchDepartements = async () => {
//                 try {
//                     const response = await axios.get('/departments');
//                     setDepartementOptions(response.data);
//                 } catch (error) {
//                     console.error('Erreur lors de la récupération des départements:', error);
//                 }
//             };
//             fetchDepartements();
//         }if (role === 'doctorant') {
//             const fetchDepartements = async () => {
//                 try {
//                     const response = await axios.get('/doctorantDepartments');
//                     setDepartementOptions(response.data);
//                 } catch (error) {
//                     console.error('Erreur lors de la récupération des départements des doctorants:', error);
//                 }
//             };
//             fetchDepartements();
//         }
//     }, [role]);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const params = role === 'enseignant' ? { role, departement } : { role };
//                 const response = await axios.get('/usersByRole', { params });
//                 setReceiverOptions(response.data);
//             } catch (error) {
//                 console.error('Erreur lors de la récupération des utilisateurs:', error);
//             }
//         };

//         if (role) {
//             if (role === 'enseignant' && departement) {
//                 fetchUsers();
//             } else if (role !== 'enseignant') {
//                 fetchUsers();
//             }
//         }
//     }, [role, departement]);

//     const handleRoleChange = (e) => {
//         setRole(e.target.value);
//         setDepartement(''); 
//         setReceiverId(''); 
//     };

//     const handleDepartementChange = (e) => {
//         setDepartement(e.target.value);
//         setReceiverId(''); // Reset receiver ID when department changes
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

const UploadDocument = () => {
    const [titre, setTitre] = useState('');
    const [file, setFile] = useState(null);
    const [role, setRole] = useState('');
    const [departement, setDepartement] = useState('');
    const [departementOptions, setDepartementOptions] = useState([]);
    const [receiverOptions, setReceiverOptions] = useState([]);
    const [receiverId, setReceiverId] = useState('');
    const [fileUrl, setFileUrl] = useState('');

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
        setDepartement(''); // Réinitialiser le département lorsque le rôle change
        setReceiverId(''); // Réinitialiser l'ID du récepteur lorsque le rôle change
    };

    const handleDepartementChange = (e) => {
        setDepartement(e.target.value);
        setReceiverId(''); // Réinitialiser l'ID du récepteur lorsque le département change
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
        const userId = localStorage.getItem('userId');

        // 1. Upload the file
        const formData = new FormData();
        formData.append('file', file);

        try {
            const uploadResponse = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            setFileUrl(uploadResponse.data.fileUrl);

            // 2. Create the document
            const documentResponse = await axios.post('/documents', {
                titre,
                fichier_url: uploadResponse.data.fileUrl,
                id_utilisateur: userId
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            // 3. Share the document
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
            console.error('Erreur lors de l\'upload ou du partage du document:', error);
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
