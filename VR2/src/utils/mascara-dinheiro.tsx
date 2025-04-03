
const mascaraDinheiroDuasCasa = (valor: number) => {
    const valorFormatado = valor.toLocaleString('pt-BR', {
        minimumFractionDigits:  2
    });

    return valorFormatado;
}

const mascaraDinheiroReal = (valor: number) => {
    const valorFormatado = valor.toLocaleString('pt-BR', {
        minimumFractionDigits:  2,
        style: 'currency',
        currency: 'BRL'
    });

    return valorFormatado;
}


export {
    mascaraDinheiroReal,
    mascaraDinheiroDuasCasa
}