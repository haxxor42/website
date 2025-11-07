 const enunciado = document.querySelector("#enunciado");
 const alternativa1 = document.querySelector("#alternativa1");
 const alternativa2 = document.querySelector("#alternativa2");
 const alternativa3 = document.querySelector("#alternativa3");
 const alternativa4 = document.querySelector("#alternativa4");

 const btnSair = document.querySelector("#desconectar")

const usuariologado = JSON.parse(localStorage.getItem("usuariologado"))

const perguntas = 
[
    {pergunta:"Qual a doença que Ozzy Osbourne tinha?", alternativas:["Parkinson","Câncer","AIDS ","Tuberculose"], correta:0},
{pergunta:"Quem é conhecido como Rei do Pop?", alternativas:["Elvis Presley","Michael jackson","Prince","Marth Luther King"], correta:1},
{pergunta:"Qual o nome verdadeiro da cantora Lady Gaga", alternativas:["Maria Julieta","Stefani Germanotta","Robyn Fentry","Gabrielly Germanotta"], correta:1},
{pergunta:"Qual cantor brasileiro é conhecido como o Rei \ Rainha da música rômantica?", alternativas:["Leila Moreno","Caetano Veloso","Chico Boarque","Roberto Carlos"], correta:3},
{pergunta:"Qual foi o ano do primeiro Rock in Rio?", alternativas:["1973","1974","1985","1986"], correta:2},
{pergunta:"Qual foi o evento mais trágico da história da música?", alternativas:["Woodstock 99","Rock in Rio","Lollapalooza","Tomorrowland"], correta:0},
{pergunta:"Qual o álbum mais vendido de todos os tempos", alternativas:["Back in Black - ACDC","The Dark Side of the Moon - Pink Floyd","Thriller - Michael Jackson","Number of the Beast - Iron Maiden"], correta:2},
{pergunta:"Qual dessas músicas não é um samba?", alternativas:["Evidências","O Mundo é um Moinho","Aquarela do Brasil","Feitiço da Vila"], correta:0}, ]

let perguntaAtual = 0
let pontos = 0

if (!usuariologado){
window.location.href = "sla.html";
}

function carregarPergunta(){
    enunciado.textContent = perguntas[perguntaAtual].pergunta
    alternativa1.textContent = perguntas[perguntaAtual].alternativas[0]
    alternativa2.textContent = perguntas[perguntaAtual].alternativas[1]
    alternativa3.textContent = perguntas[perguntaAtual].alternativas[2]
    alternativa4.textContent = perguntas[perguntaAtual].alternativas[3]
}

alternativa1.addEventListener("click", function(){verificarresposta(0)})
alternativa2.addEventListener("click", function(){verificarresposta(1)})
alternativa3.addEventListener("click", function(){verificarresposta(2)})
alternativa4.addEventListener("click", function(){verificarresposta(3)})

function verificarresposta(alternativaselecionada){

    if(alternativaselecionada == perguntas[perguntaAtual].correta){
        pontos++;
        alert("respondeu certo")
    }else{
        alert("respondeu errado")
    }

    if(perguntaAtual < perguntas.length -1){
        perguntaAtual++;
        carregarPergunta()
    }else{
        alternativa1.style.display = "none";
        alternativa2.style.display = "none";
        alternativa3.style.display = "none";
        alternativa4.style.display = "none";
        enunciado.innerHTML = `Você acertou ${pontos} de 10 perguntas`;

if(usuariologado && cadastrar.length > 0){
const existe = cadastro.find(function (usuario){
    return usuario.email === usuariologado.email;
});
if(existe){
    existe.pontuacao = pontos;
}
}
localStorage.setItem("usuarios", JSON.stringify(cadastro));

        alert("acabou o quiz")
    }
}

carregarPergunta()

//codigo da musica de fundo
const botaoPausar = document.getElementById('pauseMusica');
const botaoTocar = document.getElementById('playAleatoria');

const musicas = [
  'cQFEcBIf8z0-f9d440edee365a24d320c15dc7e6b118622.mp3',
  'fNracXPHEic-3fbc0c846e7e3706a69c22e240a3b933989.mp3',
 'Lady Gaga - Judas (Official Music Video)(MP3_160K).mp3',
 'Michael Jackson - Billie Jean (Official Video)(MP3_160K).mp3',
 'OZZY OSBOURNE - _No More Tears_ (Official Video)(MP3_160K).mp3',
 'Queen - I Want to Break Free (Official Lyric Video)(MP3_160K).mp3'
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


btnSair.addEventListener("click", function(){
  window.location.href = "outro.html";
})
