
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppChat.css';

const phoneNumber = '+918975040910'; // Replace with your desired phone number

const WhatsAppChat = () => {
    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-chat-icon"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp size={48} color="#ffffffff" />
        </a>
    );
};

export default WhatsAppChat;
