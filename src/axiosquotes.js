import axios from "axios";

const instance = axios.create({
    baseURL: "https://alfarugalibrary.firebaseio.com/"
})

export default instance;