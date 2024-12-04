/* let DEFINE A VARIÁVEL
DOCUMENT = HTML
querySelector = Selecionar ou pegar um item HTML
addEventListener = Ouvi um comando e te avisa quando algo acontecer
*/

let botaoSom = document.querySelector('.botao-som')
let video = document.querySelector('.video')
let botao = document.querySelector('.link-info')
let modal = document.querySelector('.modal')
let audio = document.querySelector('.tudum')

botaoSom.addEventListener("click", ligaSom) /* CHAMAR FUNÇÃO */

function ligaSom() {
    video.muted = !video.muted /*! = inverso / inverte tudo */
}

// MOSTRA MODAL

botao.addEventListener('click', mostrarModal)
modal.addEventListener('click', esconderModal)


function mostrarModal() {
    modal.style.display = 'block'

}

function esconderModal() {
    modal.style.display = 'none'
}

// Tocar o TUNDUM

window.addEventListener('load', tocarAudio)

function tocarAudio() {
    audio.play()
}