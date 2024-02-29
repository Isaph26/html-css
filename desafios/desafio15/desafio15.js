const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0)
let acertou = false
contador = 3

function gerador(){
    let chute = parseInt(document.getElementById('randomnum').value)
    let res = document.getElementById('resultado')

        if (!chute) {
            alert("Por favor, insira um número.")
            return // Sai da função se o campo estiver vazio
        }
        if (acertou) {
            res.innerHTML = "<p>Você já acertou! Reinicie o jogo para jogar novamente.</p>";
            return; // Sai da função se já tiver acertado
        }

        if (contador > 0) {
            if (chute === numeroAdivinhacao) {
                res.innerHTML = `<p>Parabéns você acertou! O número era ${numeroAdivinhacao}</p>`
                acertou = true
                setTimeout(reiniciarJogo, 2000)
            } else {
                contador-- // Decrementa o número de tentativas restantes
                res.innerHTML = `<p>Você errou, tente novamente. Restam ${contador} tentativas.</p>`
            }   
        } else {
            res.innerHTML = `Que pena! Infelizmente você esgotou todas as tentativas. O número correto era ${numeroAdivinhacao}`
            setTimeout(reiniciarJogo, 2000)
        }
}

function reiniciarJogo() {
    //Código para reiniciar o jogo
    location.reload() //Recarrega a página para reiniciar o jogo
}    

// Captura a tecla Enter e chama a função gerador()
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita que a página seja recarregada
        gerador();
    }
})