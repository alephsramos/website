// Função para animar a digitação
function typeWriter() {
    const texto = "Bem vindo(a) ao meu site!";
    let i = 0;
    const speed = 50; // Velocidade da digitação em milissegundos

    function type() {
        if (i < texto.length) {
            document.getElementById("texto").innerHTML += texto.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Função para mostrar gradativamente a imagem "sobre mim"
function showSobreMimImg() {
    var sobreMimImg = document.getElementById('sobreMimImg');
    
    setTimeout(function() {
        sobreMimImg.classList.add('show');
    }, 400); // 400 milissegundos (1 segundo)
}

// Função para iniciar a animação quando a página é carregada
function handleAnimationOnLoad() {
    const icons = document.querySelectorAll('.img-bar');

    icons.forEach(icon => {
        icon.style.animationPlayState = 'running';
    });
}

// Função para verificar se um elemento está visível na tela
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}

// Função para lidar com o evento de rolar a página
function handleScrollAnimation() {
    var elementos = document.querySelectorAll('.animacao');
    
    elementos.forEach(function(elemento) {
        if (isElementInViewport(elemento)) {
            elemento.classList.add('aparecer');
        }
    });
}

// Executar funções quando a página é carregada
window.onload = function() {
    typeWriter(); // Iniciar a animação de digitação
    showSobreMimImg(); // Mostrar gradativamente a imagem "sobre mim"
    handleAnimationOnLoad(); // Iniciar a animação dos ícones
};

// Adicionar um ouvinte de evento para lidar com o evento de rolar a página
window.addEventListener('scroll', handleScrollAnimation);








