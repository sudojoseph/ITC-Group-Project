import axios from "axios";

const postThread = (body) => {
    try {
        const resp = axios.post('http://localhost:8070/thread',body, { "Content-Type": "multipart/form-data" });
        console.log(resp);
    } catch (error) {
        console.error(error);
    }
}

export { postThread };