import axios from 'axios';
//import queryString from 'querystring';

export const getFolderList = () => axios.get(`/api/memos`);
export const createFolder = ({folderName}) => axios.post('/api/memos', {folderName});
export const deleteFolder = ({id}) => axios.delete(`/api/memos/${id}`, {id});
export const getMemoList = ({id}) => axios.get(`/api/memos/${id}/memo`);