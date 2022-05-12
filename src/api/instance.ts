import axios from 'axios';

export const instanceInmet = axios.create({
  baseURL: 'https://apiprevmet3.inmet.gov.br/',
  timeout: 1000,
});
