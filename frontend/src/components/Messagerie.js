// src/App.js
import React from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

const Messagerie = () => {
    return (
        <div>
            <h1>Real-Time Messaging App</h1>
            <MessageList />
            <MessageForm />
        </div>
    );
};

export default Messagerie;
