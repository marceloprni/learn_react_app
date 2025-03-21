import axios from "axios"


const Service = axios.create({
    baseURL: "http://localhost:3400"
})


export default Service;