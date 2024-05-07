
let sectionCategoriasCards = document.querySelector('.todas__comidas__pratos__categorias')
cardapio.forEach(itemCategoria => {

    let comidas = document.createElement('div')
    comidas.classList.add('comidas')
    sectionCategoriasCards.append(comidas)

    let tituloCategoria = document.createElement('h2')
    tituloCategoria.classList.add('comida__titulo')
    tituloCategoria.id = itemCategoria.categoria

    tituloCategoria.textContent = itemCategoria.categoria

    let cardsComida = document.createElement('div')
    cardsComida.classList.add('comida__cards')
    comidas.append(tituloCategoria)
    itemCategoria.itens.forEach(item => {


        comidas.append(cardsComida)

        cardsComida.innerHTML += ` 
            <div class="comida__card__descricoes__img">
                <div class="comida__descricoes">
                    <h3 class="comida__descricoes-nome" data-nome-produto>${item.nome}</h3>
                    <ul class="comida__descricoes_informacoes">
                        <li class="comida__descricoes_informacoes-item">${item.tipo}</li>
                        <li class="comida__descricoes_informacoes-item preco-comida">Por: <strong
                                data-valor-pizza-camarao>${item.precoOriginal.toFixed(2)}</strong></li>
                    </ul>
                    <p class="comida__descricoes-final">${item.descricao}</p>
                    <div class="comida__descricoes-btn-icon">
                        <button class="comida__descricoes-btn" data-pegar-elemento >Pedir</button>
                        <div class="comida__descricoes-contador">
                            <i class="fa-solid fa-plus" data-aumentar-quantidade></i>
                            <span data-quantidade-produto>0</span>
                            <i class="fa-solid fa-minus" data-diminuir-quantidade></i>
                        </div>
    
                    </div>
                    <span class="menssagem__error"></span>
                </div>
    
                <div class="comida__img">
                    <img src="${item.img}" alt="${item.nome}"
                        class="comida__img-imagem">
                </div>
            </div>
            `

    });
});



    let btnItem = document.querySelectorAll('.comida__descricoes-btn')
    let quantidadeProduto = document.querySelectorAll("[data-quantidade-produto]");
    let menssagemError = document.querySelectorAll(".menssagem__error");

    btnItem.forEach((item, index) => {
        item.setAttribute('data-pegar-elemento', index);
        item.addEventListener('click', () => {
            
            quantidadeProduto[index].getAttribute("data-quantidade-produto");
            let quantidade = parseInt(quantidadeProduto[index].textContent)
            if(quantidade>0){
                
                menssagemError[index].style.display = "none"
                addValorMenssagem(todosItens[index],quantidade)           
            }else{  
                menssagemError[index].textContent = "Selecione no mínimo 1 item."; 
                menssagemError[index].style.display = "inline"

            }   
            
        })
    })


    function addValorMenssagem(item, quantidade){
        let valorFinalItem = item.precoOriginal * quantidade
        let menssagem = ` ${quantidade} x ${item.nome} no valor de ${item.precoOriginal}. Total a Pagar: ${valorFinalItem.toFixed(2)}. `

        const urlWhatsApp = `https://wa.me/5581988742454?text=${encodeURIComponent(menssagem)}`;
        window.open(urlWhatsApp);
        
    }
    

    
 let btnPromocao = document.querySelector('.prato__descricoes-btn')
   

    btnPromocao.addEventListener('click', () => {
        let h3 = document.querySelector('.prato__titulo').textContent
        let nome = document.querySelector('.prato__descricoes-nome').textContent
        let tamanho = document.querySelector('.prato__descricoes_informacoes-item').textContent
        let precoOriginal = document.querySelector('.preco-original').textContent
        let precoFinal = document.querySelector('.preco-final').textContent

        let menssagem = `${h3}: ${nome} ${tamanho} ${precoOriginal} ${precoFinal} `

        const urlWhatsApp = `https://wa.me/5581988742454?text=${encodeURIComponent(menssagem)}`;
        window.open(urlWhatsApp);
    })
    
      


