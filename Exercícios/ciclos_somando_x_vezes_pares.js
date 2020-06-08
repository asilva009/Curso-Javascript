function somaDosPares(x) {
    let soma = 0;
    for (let i = 0; i <= x; i++) {
        if (i % 2 == 0) {
            soma = soma + i;
        }        
    }
    return(soma)
}