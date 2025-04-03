import moment from "moment";


function aplicarMascaraData(data: string) {
    if(data) {
        return moment(data).locale('pt-br').format('DD/MM/YYYY');
    }

    return data;
}

function aplicarMascaraDataHora(data: string) {
    if(data) {
        return moment(data).locale('pt-br').format('DD/MM/YYYY HH:mm:ss');
    }

    return data;
}

export {
    aplicarMascaraData,
    aplicarMascaraDataHora
}