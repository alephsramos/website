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






function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
  }
  
  function handleScroll() {
    var elementos = document.querySelectorAll('.animacao');
    
    elementos.forEach(function(elemento) {
      if (isElementInViewport(elemento)) {
        elemento.classList.add('aparecer');
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);