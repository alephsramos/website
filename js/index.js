
/* efeito do mexer do mouse */
document.addEventListener('DOMContentLoaded', function() {
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
});

/* efeito do click */

document.addEventListener('DOMContentLoaded', function() {
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

/* efeito mensagem aparece na tela */
document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');
    var closeButton = document.getElementById('close-btn');

    function showPopup() {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    }

    function hidePopup() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }

    // Mostrar o popup ao carregar a página
    showPopup();

    // Fechar o popup ao clicar fora dele ou no botão de fechar
    overlay.addEventListener('click', hidePopup);
    closeButton.addEventListener('click', hidePopup);
});

var lastScrollTop = 0;


// Obtém o botão e a div que contém as imagens
