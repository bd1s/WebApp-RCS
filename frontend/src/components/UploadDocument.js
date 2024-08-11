
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
    
//         const formData = new FormData();
//         formData.append('titre', titre);
//         formData.append('fichier', file);
//         formData.append('id_utilisateur', userId);
    
//         try {
//             const response = await axios.post('/documents', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     'Authorization': `Bearer ${token}`
//                 }
//             });
//             const id_document = response.data.id_document;
    
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


import React, { useState } from 'react';
import axios from '../api/axios';

const UploadDocument = () => {
    const [titre, setTitre] = useState('');
    const [file, setFile] = useState(null);
    const [receiverName, setReceiverName] = useState({ nom: '', prenom: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
    
        // 1. Upload the file to DigitalOcean Spaces
        const formData = new FormData();
        formData.append('file', file);
        
        let fileUrl;
        try {
            const uploadResponse = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            fileUrl = uploadResponse.data.fileUrl; // URL du fichier dans DigitalOcean Spaces
        } catch (uploadError) {
            console.error("Erreur lors de l'upload du fichier:", uploadError);
            alert('Erreur lors de l\'upload du fichier');
            return;
        }
    
        // 2. Create the document in the backend with the file URL
        try {
            const response = await axios.post('/documents', {
                titre,
                fichier_url: fileUrl, // Envoyer l'URL du fichier au lieu du fichier lui-même
                id_utilisateur: userId
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const id_document = response.data.id_document;
    
            // 3. Share the document
            await axios.post('/documents/share', {
                id_document,
                nom_complet_recepteur: receiverName
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            alert('Document partagé avec succès!');
        } catch (error) {
            console.error("Erreur lors du partage du document:", error);
            alert('Erreur lors du partage du document');
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
                        onChange={(e) => setFile(e.target.files[0])} 
                        required 
                        className="border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="font-medium">Nom du Récepteur:</label>
                    <div className="flex space-x-2">
                        <input 
                            type="text" 
                            placeholder="Nom"
                            value={receiverName.nom} 
                            onChange={(e) => setReceiverName({ ...receiverName, nom: e.target.value })} 
                            required 
                            className="border border-gray-300 rounded-md p-2 flex-1"
                        />
                        <input 
                            type="text" 
                            placeholder="Prénom"
                            value={receiverName.prenom} 
                            onChange={(e) => setReceiverName({ ...receiverName, prenom: e.target.value })} 
                            required 
                            className="border border-gray-300 rounded-md p-2 flex-1"
                        />
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                >
                    Partager Document
                </button>
            </form>
        </div>
    );
};

export default UploadDocument;
