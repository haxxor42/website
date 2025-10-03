<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>

const musicas = [
  'https://youtu.be/eij0rOmSf5E',
];

// Cria o botão
const botao = document.createElement('button');
botao.textContent = '🎵 Música Aleatória';
Object.assign(botao.style, {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '12px 20px',
  backgroundColor: '#ff4d4d',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer',
  boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
  zIndex: '1000'
});
document.body.appendChild(botao);

// Cria a janelinha modal
const modal = document.createElement('div');
Object.assign(modal.style, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '800px',
  height: '450px',
  backgroundColor: '#000',
  borderRadius: '12px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
  zIndex: '1001',
  display: 'none',
  overflow: 'hidden'
});
document.body.appendChild(modal);

// Cria botão de fechar
const fechar = document.createElement('button');
fechar.textContent = '✖';
Object.assign(fechar.style, {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'transparent',
  color: 'white',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
  zIndex: '1002'
});
modal.appendChild(fechar);

// Cria o link embutido
const link = document.createElement('iframe');
Object.assign(link, {
  width: '100%',
  height: '100%',
  frameBorder: '0',
  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  allowFullscreen: true
});
modal.appendChild(link);

// Função para abrir vídeo
function abrirVideo() {
  const url = musicas[Math.floor(Math.random() * musicas.length)];
  link.src = url;
  modal.style.display = 'block';
}

// Função para fechar modal
fechar.addEventListener('click', () => {
  modal.style.display = 'none';
  link.src = '';
});

// Evento do botão
botao.addEventListener('click', abrirVideo);

