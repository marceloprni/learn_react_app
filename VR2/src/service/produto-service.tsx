
import Service from "./Service";

function obterTodos() {
    return new Promise((resolve, reject) => {
        return Service.get("/produtos")
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    })
}


export default obterTodos; 