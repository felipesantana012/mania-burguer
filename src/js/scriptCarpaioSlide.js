
let todosItens = []
cardapio.forEach((i) => {
    i.itens.forEach((item,idex) => {
        todosItens.push(item)


    })
})

todosItens.map((item, index) => {
    
    let slideItem = document.querySelector('.slide-item').cloneNode(true)
        // console.log(slideItem)
        
    document.querySelector('.slide-list').append(slideItem)
    // document.querySelector('.teste').append(slideItem)

    slideItem.setAttribute('data-index', index)
    slideItem.querySelector('.slide-image').src = item.img
    slideItem.querySelector('.slide-description h3').innerHTML = item.nome
        
})




            // < div class="slide-wrapper" data - slide="wrapper" >
            // <button class="slide-nav-button slide-nav-previous fas fa-chevron-left"
            //     data-slide="nav-previous-button"></button>
            // <button class="slide-nav-button slide-nav-next fas fa-chevron-right"
            //     data-slide="nav-next-button"></button>

            // <div class="slide-list" data-slide="list">

            //     <div class="slide-item" data-slide="item" data-index="0">
            //         <div class="slide-content">
            //             <img class="slide-image" src="/src/img/carrossel/hamguer.svg" alt="Hamburguer" />
            //             <div class="slide-description">
            //                 <h3>Hamburguers</h3>
            //             </div>
            //         </div>
            //     </div>
            // </div>

            // <div class="slide-controls" data-slide="controls-wrapper">
            // </div>
            // </div >