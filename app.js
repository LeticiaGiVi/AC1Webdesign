const main = document.querySelector('#main')
const banners = document.querySelector('#banner')
const lista1 = document.querySelector('#lista1')
const lista2 = document.querySelector('#lista2')
const lista3 = document.querySelector('#lista3')
const cards = document.querySelector('#cards')
const divformulario = document.querySelector('#formulario')
const footer = document.querySelector('footer')

document.addEventListener('DOMContentLoaded',()=>{
    const banner = document.createElement('img')
    banner.src="Banner.png"
    banners.append(banner)
    banner.style.width = '100%'



    const informacoes =["nome: Leticia","Idade: 17","endereço: em casa","número: 111111111", "email: email@email.com"]
    const [topic1,topic2,topic3,topic4,topic5] = informacoes
    const itemLista1 = document.createElement('li')
    lista1.append(itemLista1)
    itemLista1.innerHTML= topic1

    const itemLista2 = document.createElement('li')
    lista1.append(itemLista2)
    itemLista2.innerHTML= topic2

    const itemLista3 = document.createElement('li')
    lista1.append(itemLista3)
    itemLista3.innerHTML= topic3

    const itemLista4 = document.createElement('li')
    lista1.append(itemLista4)
    itemLista4.innerHTML= topic4

    const itemLista5 = document.createElement('li')
    lista1.append(itemLista5)
    itemLista5.innerHTML= topic5

    const informacoes2 =["nome: Giovanna","Idade: 17","endereço: a casa dela né","número: 222222", "email: sbfvs2@email.com"]
    const [topic21,topic22,topic23,topic24,topic25] = informacoes2

    const itemLista21 = document.createElement('li')
    lista2.append(itemLista21)
    itemLista21.innerHTML= topic21

    const itemLista22 = document.createElement('li')
    lista2.append(itemLista22)
    itemLista22.innerHTML= topic22

    const itemLista23 = document.createElement('li')
    lista2.append(itemLista23)
    itemLista23.innerHTML= topic23

    const itemLista24 = document.createElement('li')
    lista2.append(itemLista24)
    itemLista24.innerHTML= topic24

    const itemLista25 = document.createElement('li')
    lista2.append(itemLista25)
    itemLista25.innerHTML= topic25

    const informacoes3 =["nome: Gabriela","Idade: 16","endereço: a casa dela né parte2","número: 33333", "email: sbfvs3@email.com"]
    const [topic31,topic32,topic33,topic34,topic35] = informacoes3

    const itemLista31 = document.createElement('li')
    lista3.append(itemLista31)
    itemLista31.innerHTML= topic31

    const itemLista32 = document.createElement('li')
    lista3.append(itemLista32)
    itemLista32.innerHTML= topic32

    const itemLista33 = document.createElement('li')
    lista3.append(itemLista33)
    itemLista33.innerHTML= topic33

    const itemLista34 = document.createElement('li')
    lista3.append(itemLista34)
    itemLista34.innerHTML= topic34

    const itemLista35 = document.createElement('li')
    lista3.append(itemLista35)
    itemLista35.innerHTML= topic35



    const card1 = document.createElement("div");
    card1.innerHTML = `
    <img src="" alt="">
    <br>
    <h1>web development</h1>
    <p>lorem</p>
    `;
    cards.append(card1);
    card1.className= 'aparenciaCard';

    const card2 = document.createElement("div");
    card2.innerHTML = `
    <img src="" alt="">
    <br>
    <h1>Design</h1>
    <p>lorem</p>
    `;
    cards.append(card2);
    card2.className= 'aparenciaCard';

    const card3 = document.createElement("div");
    card3.innerHTML = `
    <img src="" alt="">
    <br>
    <h1>persistencia e fé</h1>
    <p>lorem</p>
    `;
    cards.append(card3);
    card3.className= 'aparenciaCard';

    

    const formulario = document.createElement("form");
    formulario.innerHTML = `
    <div class="form-group">
      <label for="exampleInputEmail1">Endereço de email</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email">
    </div>
    <br>
    <div class="form-group">
      <label for="exampleInputPassword1">Senha</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">
    </div>
    <br>
    <button type="submit" class="btn btn-primary">Enviar</button>
    `;
    divformulario.append(formulario);


    
    const conteudo = document.createElement("p");
    conteudo.textContent = 'CopyRight © 2024 leticia Giovanna Gabriela | All Rights Reserved';
    footer.append(conteudo);
})
