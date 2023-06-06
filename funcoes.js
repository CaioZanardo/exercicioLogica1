function exercicioUm() {
    
    var nomeUm = prompt("Digite o nome do primeiro usuario");
    var idadeUm = prompt("Digite sua idade");
    var nomeDois = prompt("Digite o do segundo usuario");
    var idadeDois = prompt("Digite sua idade");


    if (idadeUm >= 18){
        alert( nomeUm + " voce é maior de idade");
    }

    else{

    alert( nomeUm + " voce é menor de idade");
    }
}