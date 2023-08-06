import axios from "axios";

export default axios.create({
    baseURL: 'https://f877-201-20-177-117.ngrok-free.app' ,
    headers: {"ngrok-skip-browser-warning":"true"}
})