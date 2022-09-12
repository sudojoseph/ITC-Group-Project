import axios from "axios";

const postThread = (body) => {
    try {
        const resp = axios.post('http://localhost:8070/thread',body);
        console.log(resp);
    } catch (error) {
        console.error(error);
    }
}

export { postThread };