const div = document.createElement("div");
div.classList.add('cabecalho');
div.innerHTML = `

<div class="cabecalho__logo">
<a href="/"><img src="/src/img/logo-burguer.png" alt="Logo do site, um hambuguer" class="cabecalho__logo-img"></a>
</div>

<div class="cabecalho__menu">
<ul class="cabecalho__menu__lista">
  <li class="cabecalho__menu__lista-link">
    <a href="#" class="cabecalho__menu__lista-link-ancora">Home</a>
  </li>

  <li class="cabecalho__menu__lista-link">
    <a href="#" class="cabecalho__menu__lista-link-ancora">Cardapio</a>
  </li>

  <li class="cabecalho__menu__lista-link">
    <a href="#" class="cabecalho__menu__lista-link-ancora">Contato</a>
  </li>

  <li class="cabecalho__menu__lista-link">
    <a href="#" class="cabecalho__menu__lista-link-ancora">Feedbacks</a>
  </li>

  <li class="cabecalho__menu__lista-link">
    <img src="/src/img/modo-dia.png" alt="" class="cabecalho__menu__lista-link-img">
  </li>

</ul>
</div>

<div class="menu-burguer">
<img src="/src/img/modo-dia.png" alt="" class="cabecalho__menu__lista-link-img">
<i class="fa-solid fa-bars icone"></i>
</div>

<div class="menu-burguer-links " >
<li class="cabecalho__menu__lista-link">
  <a href="#" class="cabecalho__menu__lista-link-ancora">Home</a>
</li>

<li class="cabecalho__menu__lista-link">
  <a href="#" class="cabecalho__menu__lista-link-ancora">Cardapio</a>
</li>

<li class="cabecalho__menu__lista-link">
  <a href="#" class="cabecalho__menu__lista-link-ancora">Contato</a>
</li>

<li class="cabecalho__menu__lista-link">
  <a href="#" class="cabecalho__menu__lista-link-ancora">Feedbacks</a>
</li>

</div>

`
const header = document.querySelector('header')
header.appendChild(div);




const btnMenuBurguer = document.querySelector('.icone')
const menuBurguer = document.querySelector('.menu-burguer-links')

console.log(menuBurguer)

btnMenuBurguer.addEventListener('click', () =>{
    menuBurguer.classList.toggle('abrir-menu-burguer')
    const iconeMenu = menuBurguer.classList.contains('abrir-menu-burguer')

    btnMenuBurguer.classList = iconeMenu ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
})





