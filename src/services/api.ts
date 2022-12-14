import axios from 'axios';
import io from 'socket.io-client';

export const api = axios.create({
  baseURL: 'http://localhost:3002',
});

const socket = io('http://localhost:3005');

export default socket;
