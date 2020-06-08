function acontece(alunosEntraram, qtdeMinima) {
    let quantidade = 0;
    for (let i = 0; i < alunosEntraram.length; i++) {
        if (alunosEntraram[i] <= 0) {
            quantidade = quantidade + 1;
        }
    }
    return quantidade >= qtdeMinima
}
function aberturas(alunosDiaDaSemana,qtdeMinima){
    let statusDaAula = [];
    for (let i = 0; i < alunosDiaDaSemana.length;i++) {
        statusDaAula[i] = acontece(alunosDiaDaSemana[i],qtdeMinima)
    }
    return statusDaAula;
}

