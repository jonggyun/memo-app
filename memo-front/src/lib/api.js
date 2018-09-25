import axios from 'axios';
//import queryString from 'querystring';

export const getFolderList = () => axios.get(`/api/memos`);
export const createFolder = ({folderName}) => axios.post('/api/memos', {folderName});