function escada(altura) {    
    let escada = [];
    for (let i = 1; i <= altura; i++) {
        escada.push(" ".repeat(altura - i) + "#".repeat(i));
    }
    return escada
}   