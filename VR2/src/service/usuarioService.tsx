import Service from "./Service";

const usuario = {
    id: 1,
    nome: "João",
    email: "joao@gmail.com",
    perfil: {
        id: 1,
        descricao: "manager"
    }
}

/*
function login(email, senha) {
    return new Promise((resolve, reject) => {
        return Service.post("/api/login", { email, senha })
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
} */



function login(email, senha) {
    return new Promise((resolve, reject) => {
        if( email  != "admin@admin.com" || senha != "123456") {
            return reject("Usuário ou senha invalidos!")
        }
        return resolve(usuario)
    })
}    

function obterTodos() {
    return new Promise((resolve, reject) => {
        return Service.get("/api/login")
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
}



export  { 
    login,
    obterTodos
 };