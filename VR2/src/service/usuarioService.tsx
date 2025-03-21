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

const autenticado = {
    token: 'sjkaklshuiqon-_(0123ksadjlksjd',
    usuario: usuario
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
        
        email = email && email.toLowerCase();

        if( email  != "admin@admin.com" || senha != "123456") {
            return reject("Usuário ou senha invalidos!")
        }
        return resolve(autenticado)
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