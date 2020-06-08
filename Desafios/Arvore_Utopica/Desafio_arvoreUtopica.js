function alturaArvoreUtopica(ciclos){
    let altura = 1;
    for (let i = 0; i < ciclos; i++) {
        if (i % 2 == 0) {
            altura = altura * 2;
        } else {
            altura = altura + 1;
        }
    }
    return altura
}