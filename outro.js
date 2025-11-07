
const botaoPausar = document.getElementById('pauseMusica');
const botaoTocar = document.getElementById('playAleatoria');

const musicas = [
  'cQFEcBIf8z0-f9d440edee365a24d320c15dc7e6b118622.mp3',
  'fNracXPHEic-3fbc0c846e7e3706a69c22e240a3b933989.mp3'
];

let aleatoria = musicas[Math.floor(Math.random() * musicas.length)];
let audio = new Audio(aleatoria);

function TocarMusica(){

  if(!audio.paused && audio.currentTime > 0 && !audio.ended){
    PausarMusica()
  }

  aleatoria = musicas[Math.floor(Math.random() * musicas.length)];
  audio = new Audio(aleatoria);
  audio.volume = 1.0;
  audio.play(); 

}

function PausarMusica(){
  audio.pause(); 
}

botaoTocar.addEventListener('click', () => {
  TocarMusica()
});

botaoPausar.addEventListener('click', () => {
 PausarMusica()
});
