import Service from "./Service";

// Mude para exportações nomeadas
export const obterTodos = () => {
    return Service.get("/produtos")
        .then(response => response.data);
}

export const cadastrar = (produto) => {
    
    return Service.post("/produtos", produto)
        .then(response => response.data);
}

export const atualizar = (produto) => {
    
    return Service.put(`/produtos/${produto.id}`, produto)
        .then(response => response.data);
}

export const deletar = (produto) => {
    
    return Service.delete(`/produtos/${produto.id}`, produto)
        .then(response => response.data);
}