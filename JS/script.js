// Pegando todos os atributos que estão dentro do data-anime para fazer a animação
const items = document.querySelectorAll("[data-anime]");
let windowTop = window.pageYOffset + window.innerHeight * 0.98;
let lastWindowTop = 0;
let scrollingDown = true;

const animeScroll = () => {
    // Capturando a altura dos itens
    windowTop = window.pageYOffset + window.innerHeight * 0.98;

    // Verificando a direção do scroll
    if (windowTop > lastWindowTop) {
        scrollingDown = true;
    } else {
        scrollingDown = false;
    }
    lastWindowTop = windowTop;

    // Animação dos elementos
    items.forEach(element => {
        // Capturando a posição do elemento
        const elementTop = element.offsetTop + element.offsetHeight * 0.1;
        const elementBottom = element.offsetTop + element.offsetHeight * 1.9;

        // Animação quando o usuário está rolando para baixo
        if (scrollingDown && windowTop > elementTop) {
            element.classList.add("animate");
        } else if (scrollingDown && windowTop < elementTop) {
            element.classList.remove("animate");
        }

        // Animação quando o usuário está rolando para cima
        if (!scrollingDown && windowTop < elementBottom) {
            element.classList.remove("animate");
        } else if (!scrollingDown && windowTop > elementBottom) {
            element.classList.add("animate");
        }
    });
};

animeScroll();
window.addEventListener("scroll", animeScroll);




// Validação Formulário 
// Example starter JavaScript for disabling form submissions if there are invalid fields


// Modal

const modal = document.getElementById('modal');

function openModal(){
    modal.style.display = "flex";
}
function closeModal(){
    modal.style.display = "none";
}
