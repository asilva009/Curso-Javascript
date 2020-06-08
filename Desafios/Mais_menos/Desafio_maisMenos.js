function maisMenos(numeros) {
    let positivos = 0;
    let zero = 0;
    let negativos = 0;    
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            positivos = positivos + 1;
        } else if (numeros[i 
        ] == 0) {
            zero = zero + 1;
        } else {
            negativos = negativos + 1;
        }
    }
        let resultado = [];
        let frPositivos =   positivos / numeros.length;
        resultado.push(frPositivos);
        let frZero = zero / numeros.length;
        resultado.push(frZero);
        let frNegativos = negativos / numeros.length;
        resultado.push(frNegativos);
        return resultado
}