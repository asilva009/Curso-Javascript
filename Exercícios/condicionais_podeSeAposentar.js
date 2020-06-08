function podeSeAposentar (idade,sexo,anosContribuicao) {
    return (idade >= 60 && sexo == "F" ||  idade >= 65 && sexo == "M") && anosContribuicao >=30 
}