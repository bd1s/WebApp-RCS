// require('dotenv').config(); // Assurez-vous que dotenv est configuré avant toute utilisation de process.env
// const http = require('http');
// const app = require('./App');
// const port = 3001;

// const server = http.createServer(app);
// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// console.log('EMAIL_FROM:', process.env.EMAIL_FROM);
// console.log('APP_PASSWORD:', process.env.APP_PASSWORD);


require('dotenv').config(); // Assurez-vous que dotenv est configuré avant toute utilisation de process.env
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const app = require('./App');
const port = 3001;

// Créer le serveur HTTP avec Express
const server = http.createServer(app);

// Initialiser Socket.IO avec le serveur HTTP
const io = socketIo(server);

// Événement de connexion Socket.IO
io.on('connection', (socket) => {
    console.log('New client connected');

    // Joindre une room basée sur l'ID de l'utilisateur
    socket.on('joinRoom', (userId) => {
        socket.join(userId);
        console.log(`User ${userId} joined room`);
    });

    // Écouter les messages envoyés par les clients
    socket.on('sendMessage', ({ receiverId, message }) => {
        console.log(`Message from ${socket.id} to ${receiverId}: ${message}`);
        // Envoyer le message uniquement au récepteur spécifié
        io.to(receiverId).emit('message', { content: message, senderId: socket.id });
    });

    // Événement de déconnexion
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Démarrer le serveur
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

console.log('EMAIL_FROM:', process.env.EMAIL_FROM);
console.log('APP_PASSWORD:', process.env.APP_PASSWORD);
