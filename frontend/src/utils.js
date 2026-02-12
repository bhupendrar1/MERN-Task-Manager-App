import { toast } from 'react-toastify';

export const notify = (message, type) => {
    toast[type](message);
}

// For local development, point the frontend to your local Express server.
// Make sure your backend (index.js) is running on this port.
export const API_URL = 'http://localhost:8080';