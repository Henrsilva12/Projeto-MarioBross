/*
OBJETIVO 1 - Quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer 

  - Passo 1 - Dar um jeito de pegar o elemento que representa o botão na tela usando o js
  - Passo 2 - Dar um jeito de identificar quando o usuário clicar no boão 
  - Passo 3 - Dar um jeito de pegar o elemento da modal do js
  - Passo 4 - Abrir o modal na tela

OBJETIVO 2 - Quando o usuário clicar no X devemos fechar o modal

- Passo 1 - Dar um jeito de pegar o elemento de fechar usando o js
- Passo 2 - Dar um jeito de identificar quando o usuário clicar no x
- Passo 3 - Fechar o modal na tela

*/

console.log('mostrar o document', document);

// Passo 1 - Dar um jeito de pegar o elemento que representa o botão na tela usando o js

//console.log(document.querySelector('.botao-trailer')); /* Aqui acessou um metódo, isso vê no console do inspencionar */

/* Tipos de Variaveis: var, let, const */

const botaoTrailer = document.querySelector('.botao-trailer');
/* Ao clicar em fechar, e se o video estiver em reprodução, ele vai continuar saindo o som do trailer, e para resolver isso pode usar API do YouTube ou:
*/

const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

//Passo 2 - Dar um jeito de identificar quando o usuário clicar no boão 

botaoTrailer.addEventListener("click", () => { /*isso é uma função, "Quando clicar no botão trailer executa uma acão" */
//console.log("Clicou no botão veja o trailer");
    // Passo 4 - Abrir o modal na tela
    modal.classList.add("aberto"); 
    video.setAttribute("src", linkDoVideo); /* Aqui vai fazer com que o video depois dele ter sido reaberto que esteka tudo certo e não com aquele erro*/
});
// Passo 3 - Dar um jeito de pegar o elemento da modal do js

//const modal = document.querySelector(".modal");

//OBJETIVO 2 - Quando o usuário clicar no X devemos fechar o modal

// Passo 1 - Dar um jeito de pegar o elemento de fechar usando o js
const botaoFecharModal = document.querySelector(".fechar-modal");

// Passo 2 - Dar um jeito de identificar quando o usuário clicar no X
botaoFecharModal.addEventListener("click", () => {
    // Passo 3 - Fechar o modal na tela
    modal.classList.remove("aberto");
    video.setAttribute("src", ""); /* Remoção da reprodução, depois que é fechada, mas depois que fechar e abre o video, ele não aparece mais, pois o src está vazio */
}); 








