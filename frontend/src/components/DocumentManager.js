// src/components/DocumentManager.js
import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

function DocumentManager() {
    const [file, setFile] = useState(null);
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        // Fetch the list of documents from the server when the component mounts
        const fetchDocuments = async () => {
            try {
                const response = await axios.get('/documents');
                setDocuments(response.data);
            } catch (error) {
                console.error('Erreur lors du chargement des documents', error);
            }
        };

        fetchDocuments();
    }, []);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('document', file);

        try {
            await axios.post('/documents/upload', formData);
            alert('Document uploadé avec succès !');
            setFile(null);

            // // Re-fetch the documents after upload
            // const response = await axios.get('/api/documents');
            // setDocuments(response.data);
        } catch (error) {
            console.error('Erreur lors de l\'upload du document', error);
        }
    };

    const handleDownload = (idDocument) => {
        // window.location.href = `/documents/${idDocument}/download`;
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Gestion des Documents</h1>

            {/* Section d'Upload de Document */}
            <div className="bg-white shadow-md rounded-lg p-4 mb-6">
                <h2 className="text-xl font-semibold mb-2">Importer un Document</h2>
                <form onSubmit={handleUpload} className="flex items-center space-x-4">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="border rounded px-4 py-2"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Upload
                    </button>
                </form>
            </div>

            {/* Section Liste des Documents */}
            <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-2">Documents Disponibles</h2>
                {documents.length === 0 ? (
                    <p className="text-gray-600">Aucun document disponible.</p>
                ) : (
                    <ul className="space-y-2">
                        {documents.map((doc) => (
                            <li
                                key={doc.id}
                                className="flex justify-between items-center border rounded px-4 py-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleDownload(doc.id)}
                            >
                                <span>{doc.nom}</span>
                                <button
                                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                >
                                    Télécharger
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default DocumentManager;
