function caloriasDeTrote(x) {
    let qtdeCalorias  = 0;
    for (let i = 0; i < x; i++) {
        qtdeCalorias =  qtdeCalorias + (5 * (i+1));
    }
    return(qtdeCalorias);
}