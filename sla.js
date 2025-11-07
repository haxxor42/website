const tagnome = document.querySelector("#nome");
const tagemail = document.querySelector("#email");
const tagsenha = document.querySelector("#senha");
const btncadastrar = document.querySelector("#cadastrar");

const tagloginemail = document.querySelector("#emaillogin");
const tagloginsenha = document.querySelector("#senhalogin");
const tagbtnlogin = document.querySelector("#Login");

const btniniciar = document.querySelector("#inicio");
const btnsair = document.querySelector("#desconectar");
//const exibirnome = document.querySelector("#exibirusuario");

let cadastrar = JSON.parse(localStorage.getItem("usuario")) || [];
let usuariologado = JSON.parse(localStorage.getItem("usuariologado")) || null;


if(window.location.pathname.endsWith("sla.html")){

btncadastrar.addEventListener("click",
function(){

const nome = tagnome.value;
const email = tagemail.value;
const senha = tagsenha.value;

if(nome === "" | email === "" | senha === ""){

alert("Preencha todos os campos")

}
else{

const usuario = { nome: nome, email: email, senha: senha}

cadastrar.push(usuario);

localStorage.setItem("usuario" , JSON.stringify(cadastrar));

Swal.fire('Cadastro', 'Cadastro realizado com sucesso!', 'success');

}

tagemail.value = "";
tagnome.value = "";
tagsenha.value = "";

})

tagbtnlogin.addEventListener("click",
function(){

const emaillogin = tagloginemail.value;
const senhalogin = tagloginsenha.value;

const existe = cadastrar.find(function(usuario){
         return usuario.email === emaillogin && usuario.senha === senhalogin
    })

   if(existe) {
    Swal.fire({
        title: "Login",
        text: "Login realizado com sucesso!",
        icon: "success"
      }).then((result) => {
        
        logado = { nome: existe.nome , email: existe.email};
        localStorage.setItem("usuariologado", JSON.stringify(logado));
        window.location.href = "outro.html";

      })
    
   }else{
    Swal.fire({
        title: "Usuário não encontrado",
        text: "Login não realizado!",
        icon: "warning"
      });
   }

})
}




if(window.location.pathname.endsWith("outro.html")){
btnsair.addEventListener("click", function(){
localStorage.removeItem("usuariologado");
usuariologado = null;
window.location.href = "sla.html";
})

btniniciar.addEventListener("click", function(){
    window.location.href = "quiz.html";
})

}