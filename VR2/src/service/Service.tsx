import axios from "axios"


const Service = axios.create({
    baseURL: "http://localhost:8080"
})


export default Service;