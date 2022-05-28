//botao leia mais
function leiaMais(){
    let pontos = document.getElementById("pontos");
    let maisTexto=document.getElementById("mais");
    let btnLeiaMais=document.getElementById("btnVerMais");
    if (pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="ver mais"
    }
    else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="ver menos"

    }
}

// botao de like

const buton = document.getElementById("coracao")
const like =document.getElementById("icon")
const count = document.getElementById("contador")
let clicked = false;
buton.addEventListener("click", () =>{
        if (!clicked){
            clicked = true;
            like.innerHTML = `<i class="fa-solid fa-heart"></i>`;
            count.textContent++
        }
        else{
            clicked=false;
            like.innerHTML = `<i class="fa-regular fa-heart">`;
            count.textContent--;
        }
    }
)
// botao de like post 1
const buton1 = document.getElementById("coracao1")
const like1 =document.getElementById("icon1")
const count1 = document.getElementById("contador1")
let clicked1 = false;
buton1.addEventListener("click", () =>{
        if (!clicked1){
            clicked1 = true;
            like1.innerHTML = `<i class="fa-solid fa-heart"></i>`;
            count1.textContent++
        }
        else{
            clicked1=false;
            like1.innerHTML = `<i class="fa-regular fa-heart">`;
            count1.textContent--;
        }
    }
)
//btnBold
const bold = document.getElementById("btnBold");
const content = document.getElementById("conteudo");
let clicked2 = false;
bold.addEventListener("click",()=>{

    if (!clicked2){
        clicked2=true;
        content.style.fontWeight="bold";
    }
    else {
        clicked2 = false;
        content.style.fontWeight="400";
    }
})
//btnItalic
const italic = document.getElementById("btnItalic");
let clicked3 = false;
italic.addEventListener("click",()=>{

    if (!clicked3){
        clicked3=true;
        content.style.fontStyle="italic";
    }
    else {
        clicked3 = false;
        content.style.fontStyle="normal";
    }
})
//criar topico
const topico = document.getElementById("topico");
const criarTopico = document.getElementById("criar-Topico");
const btnCriarTopico = document.getElementById("btnCriarTopico");
let clicked4 = false;
btnCriarTopico.addEventListener("click",()=>{

    if (!clicked4){
        clicked4=true;
        topico.style.display = "none";
        criarTopico.style.display="inline";

    }
})
//topico enviado
const btnEnviar = document.getElementById("btnEnviar")
const topicoEnviado = document.getElementById("topico-enviado1")
let clicked5 = false;

btnEnviar.addEventListener("click",()=>{

    if (!clicked5){
        clicked5=true;
        criarTopico.style.display = "none";
        topicoEnviado.style.display="inline";

    }
    else {
        criarTopico.style.display = "none";
        topicoEnviado.style.display="inline";
    }
})
//criar novo topico
const btnCriarNovoTopico = document.getElementById("novo-topico")
let clicked6 = false;
btnCriarNovoTopico.addEventListener("click",()=>{

    if (!clicked6){
        clicked6=true;
        criarTopico.style.display = "inline";
        topicoEnviado.style.display="none";

    }
})

//botao resposta
const btnresposta = document.getElementById("btnResposta");
const resposta = document.getElementById("respostas1");
let clicked7 = false;
btnresposta.addEventListener("click",()=>{

    if (!clicked7){
        clicked7=true;
        resposta.style.display="inline";

    }
})
resposta.addEventListener("click",()=>{

    if (resposta.style.display==="inline"){
        clicked7=false;
        resposta.style.display="none";

    }
})
//botao resposta1
const btnresposta1 = document.getElementById("btnRespostas");
const resposta1 = document.getElementById("respostas");
let clicked8 = false;
btnresposta1.addEventListener("click",()=>{

    if (!clicked8){
        clicked8=true;
        resposta1.style.display="inline";

    }
})
resposta1.addEventListener("click",()=>{

    if (resposta1.style.display==="inline"){
        clicked8=false;
        resposta1.style.display="none";

    }
})
//botao mobile
const btnMobile = document.getElementById("btnMobile");
const sideMenu = document.querySelector(".side-menu");
const slaca = document.querySelector(".retangle");
let clicked9 = false;
btnMobile.addEventListener("click",()=>{

    if (!clicked9){
        clicked9=true;
        sideMenu.style.display="inline";

    }
})

slaca.addEventListener("click",()=>{

    if (sideMenu.style.display==="inline"){
        clicked9=false;
        sideMenu.style.display="none";

    }
})
