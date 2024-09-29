
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
        const fetchDepartements = async () => {
            try {
                let response;
                if (role === 'enseignant') {
                    response = await axios.get('/departments');
                } else if (role === 'doctorant') {
                    response = await axios.get('/getDoctorantDepartments');
                }
                setDepartementOptions(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des départements:', error);
            }
        };

        if (role === 'enseignant' || role === 'doctorant') {
            fetchDepartements();
        }
    }, [role]);

    useEffect(() => {
        const fetchDoctorants = async () => {
            try {
                console.log('Département sélectionné:', departement); 
                if (role === 'doctorant' && departement) {
                    const response = await axios.get('/doctorantsByDepartment/${departement}', {
                        params: { departement } // Passez le paramètre correctement ici
                    });
                    console.log('Réponse du serveur pour les doctorants:', response.data); // Ajoutez ce log pour vérifier la réponse
                    setReceiverOptions(response.data);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des doctorants:', error);
            }
        };
    
        // Fetch doctorants only if the role is doctorant and a department is selected
        if (role === 'doctorant' && departement) {
            fetchDoctorants();
        }
    }, [role, departement]);
    

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                if (role && (role === 'enseignant' || role === 'administrateur')) {
                    const params = role === 'enseignant' ? { role, departement } : { role };
                    const response = await axios.get('/usersByRole', { params });
                    setReceiverOptions(response.data);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des utilisateurs:', error);
            }
        };

        // Fetch users only if the role is teacher or admin
        if (role === 'enseignant' || role === 'administrateur') {
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
                {(role === 'enseignant' || role === 'doctorant') && (
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

// import React, { useState, useEffect } from 'react';
// import axios from '../api/axios';
// import { jwtDecode as jwt_decode } from 'jwt-decode';

// const UploadDocument = () => {
//     const [titre, setTitre] = useState('');
//     const [file, setFile] = useState(null);
//     const [role, setRole] = useState('');
//     const [departement, setDepartement] = useState([]); // Tableau pour gérer plusieurs départements
//     const [departementOptions, setDepartementOptions] = useState([]);
//     const [receiverOptions, setReceiverOptions] = useState([]);
//     const [receiverId, setReceiverId] = useState('');

//     useEffect(() => {
//         const fetchDepartements = async () => {
//             try {
//                 let response;
//                 if (role === 'enseignant') {
//                     response = await axios.get('/departments');
//                 } else if (role === 'doctorant') {
//                     response = await axios.get('/getDoctorantDepartments');
//                 }
//                 setDepartementOptions(response.data);
//             } catch (error) {
//                 console.error('Erreur lors de la récupération des départements:', error);
//             }
//         };

//         if (role === 'enseignant' || role === 'doctorant') {
//             fetchDepartements();
//         }
//     }, [role]);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 if (role && departement.length > 0) {
//                     // Créer une query string pour les départements sélectionnés
//                     const query = departement.map(dep => `departements=${encodeURIComponent(dep)}`).join('&');
//                     const response = await axios.get(`/usersByDepartments?role=${role}&${query}`);
//                     setReceiverOptions(response.data);
//                 }
//             } catch (error) {
//                 console.error('Erreur lors de la récupération des utilisateurs:', error);
//             }
//         };

//         if (role && departement.length > 0) {
//             fetchUsers();
//         }
//     }, [role, departement]);

//     const handleRoleChange = (e) => {
//         setRole(e.target.value);
//         setDepartement([]);
//         setReceiverId('');
//     };

//     const handleDepartementToggle = (value) => {
//         setDepartement((prev) => 
//             prev.includes(value) 
//                 ? prev.filter(dep => dep !== value) 
//                 : [...prev, value]
//         );
//     };

//     const handleSelectAll = () => {
//         if (departement.length === departementOptions.length) {
//             setDepartement([]);
//         } else {
//             setDepartement(departementOptions.map(dep => dep));
//         }
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

//         let userId = null;
//         if (token) {
//             try {
//                 const decodedToken = jwt_decode(token);
//                 userId = decodedToken.userId || decodedToken.id || decodedToken.user_id;
//             } catch (err) {
//                 console.error('Erreur lors du décodage du token:', err);
//                 alert('Session invalide. Veuillez vous reconnecter.');
//                 return;
//             }
//         } else {
//             alert('Utilisateur non authentifié. Veuillez vous connecter.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append('titre', titre);
//         formData.append('id_utilisateur', userId);
//         formData.append('id_utilisateur_recepteur', receiverId);

//         try {
//             const documentResponse = await axios.post('/documents', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     'Authorization': `Bearer ${token}`
//                 }
//             });

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
//             console.error('Erreur lors de l\'upload ou du partage du document:', error.response ? error.response.data : error.message);
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
//                 {(role === 'enseignant' || role === 'doctorant') && (
//                     <div className="flex flex-col space-y-2">
//     <label className="font-medium">Département(s):</label>
//     <div className="relative">
//         <button
//             type="button"
//             className="w-full bg-gray-200 text-left rounded-md p-2 focus:outline-none"
//             onClick={() => document.getElementById('dropdown').classList.toggle('hidden')}
//         >
//             {departement.length > 0 ? 
//                 `Sélectionné: ${departement.join(', ')}` : 
//                 'Sélectionner des départements'}
//         </button>
//         <div id="dropdown" className="hidden absolute z-10 bg-white border border-gray-300 rounded-md shadow-md mt-1 w-full max-h-60 overflow-y-auto">
//             <div className="p-2">
//                 <label className="flex items-center">
//                     <input
//                         type="checkbox"
//                         checked={departement.length === departementOptions.length}
//                         onChange={handleSelectAll}
//                     />
//                     <span className="ml-2">Sélectionner Tout</span>
//                 </label>
//             </div>
//             {departementOptions.map(dep => (
//                 <label key={dep} className="flex items-center p-2 hover:bg-gray-100">
//                     <input
//                         type="checkbox"
//                         checked={departement.includes(dep)}
//                         onChange={() => handleDepartementToggle(dep)}
//                     />
//                     <span className="ml-2">{dep}</span>
//                 </label>
//             ))}
//         </div>
//     </div>
// </div>

//                 )}
//                 {role && (role !== 'enseignant' || departement.length > 0) && (
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
