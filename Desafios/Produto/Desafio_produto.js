function produto(numeros) {
    let produto = 1;
    for (let i = 0; i < numeros.length; i++) {
        produto = produto * numeros[i];
    }
    return produto;
}