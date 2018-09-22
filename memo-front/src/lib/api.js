import axios from 'axios';
import queryString from 'querystring';

export const getFolderList = () => axios.get(`/api/memos`).then((response) => { console.log("response",response); return response;} );