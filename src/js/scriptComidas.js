
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
                        <button class="comida__descricoes-btn">Adicionar</button>
                        <div class="comida__descricoes-contador">
                            <i class="fa-solid fa-plus" data-aumentar-quantidade></i>
                            <span data-quantidade-produto>0</span>
                            <i class="fa-solid fa-minus" data-diminuir-quantidade></i>
                        </div>
    
                    </div>
                </div>
    
                <div class="comida__img">
                    <img src="${item.img}" alt="${item.nome}"
                        class="comida__img-imagem">
                </div>
            </div>
            `
           
            });
        });
