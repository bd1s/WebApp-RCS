// src/components/MessageList.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

// Connecter le client Socket.IO au serveur
const socket = io('http://localhost:3001');

const MessageList = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Écouter les messages reçus du serveur
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        // Nettoyer l'écouteur lorsque le composant est démonté
        return () => socket.off('message');
    }, []);

    return (
        <div>
            {messages.map((msg, index) => (
                <div key={index}>
                    <p>{msg.content}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default MessageList;
