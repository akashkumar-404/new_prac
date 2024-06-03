import axios from 'axios';

const API_URL = 'https://reqres.in/api';

export async function login(email: string, password: string) {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response;
}
