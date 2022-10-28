function essaPalavraEUmPalidromo(palavra) {

    var letrasSeparadas = palavra.toLowerCase().split("");
    var palavraAoContrario = letrasSeparadas.reverse("");
    palavraAoContrario = palavraAoContrario.join("");

    if (palavra.toLowerCase() === palavraAoContrario.toLowerCase()) {
        console.log('A palavra ' + palavra + ' é um palídromo!');
    } else {
        console.log('A palavra ' + palavra + ' não é um palídromo!');
    }
}


essaPalavraEUmPalidromo("Ovo");
essaPalavraEUmPalidromo("Árvore");
essaPalavraEUmPalidromo("Rever");
essaPalavraEUmPalidromo("Lucas");