// src/components/MessageForm.js
import React, { useState } from 'react';
import io from 'socket.io-client';

// Connecter le client Socket.IO au serveur
const socket = io('http://localhost:3001');

const MessageForm = () => {
    const [content, setContent] = useState('');

    const handleSendMessage = () => {
        if (content.trim()) {
            // Envoyer le message au serveur
            socket.emit('sendMessage', { content });
            setContent(''); // Réinitialiser le champ de texte
        }
    };

    return (
        <div>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Type your message here..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default MessageForm;
