import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://burger-react-9b871.firebaseio.com/'
});


export default instance;