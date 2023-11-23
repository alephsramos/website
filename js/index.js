document.addEventListener('DOMContentLoaded', function() {
    /* Efeito do Mexer do Mouse */
    document.addEventListener('mousemove', function(e) {
        const fumaça = document.createElement('div');
        fumaça.classList.add('faísca');
        document.body.appendChild(fumaça);

        const tamanho = Math.random() * 10 + 5;
        fumaça.style.width = tamanho + 'px';
        fumaça.style.height = tamanho + 'px';

        const posX = e.pageX + Math.random() * 20 - 10;
        const posY = e.pageY + Math.random() * 20 - 10;
        fumaça.style.left = posX + 'px';
        fumaça.style.top = posY + 'px';

        const tempo = Math.random() * 0.5 + 0.3;
        fumaça.style.animation = `smokeAnimation ${tempo}s linear`;

        fumaça.addEventListener('animationend', function() {
            fumaça.remove();
        });
    });

    /* Efeito do Click */
    document.addEventListener('click', function(e) {
        const efeito = document.createElement('div');
        efeito.classList.add('efeito');
        document.body.appendChild(efeito);

        const tamanho = Math.random() * 10 + 5;
        efeito.style.width = tamanho + 'px';
        efeito.style.height = tamanho + 'px';

        const posX = e.clientX - tamanho / 4;
        const posY = e.clientY - tamanho / 4;
        efeito.style.left = posX + 'px';
        efeito.style.top = posY + 'px';

        const tempo = Math.random() * 0.5 + 0.3;
        efeito.style.animation = `efeitoAnimation ${tempo}s linear`;

        efeito.addEventListener('animationend', function() {
            efeito.remove();
        });
    });
});

function typeWriter() {
    const texto = "Bem vindo(a) ao meu site!";
    let i = 0;
    const speed = 0; // Velocidade da digitação em milissegundos

    function type() {
        if (i < texto.length) {
            document.getElementById("texto").innerHTML += texto.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Inicia a animação quando a página é carregada
window.onload = function() {
    typeWriter();
};


window.addEventListener('DOMContentLoaded', function() {
    var sobreMimImg = document.getElementById('sobreMimImg');
    
    setTimeout(function() {
        sobreMimImg.classList.add('show'); // Adiciona a classe 'show' para tornar a imagem visível gradativamente
    }, 400); // 1 segundo
});


const icons = document.querySelectorAll('.img-bar');

function handleAnimation() {
    icons.forEach(icon => {
        icon.style.animationPlayState = 'running'; // inicia a animação
    })
}

window.addEventListener('load', handleAnimation);