function possoIrAoBanco(diaDaSemana, horaAtual) {
    return (diaDaSemana!= "S�bado" && diaDaSemana!= "Domingo") && (horaAtual >= 9 && horaAtual <= 15);
}