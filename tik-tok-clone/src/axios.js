import axios from "axios";

const instance = axios.create({
    baseURL: "https://tik-tok-clone-ankur9699.herokuapp.com/",
})

export default instance;