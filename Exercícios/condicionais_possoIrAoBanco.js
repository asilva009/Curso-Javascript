function possoIrAoBanco(diaDaSemana, horaAtual) {
    return (diaDaSemana!= "Sábado" && diaDaSemana!= "Domingo") && (horaAtual >= 9 && horaAtual <= 15);
}