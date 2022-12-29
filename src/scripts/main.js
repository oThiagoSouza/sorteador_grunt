document.addEventListener('DOMContentLoaded', function(e){
    
    document.getElementById('sorteador').addEventListener('submit', function(e){
        e.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('valor-sorteado').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})