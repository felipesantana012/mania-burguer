
let todosItens = []
cardapio.forEach((i) => {
    i.itens.forEach((item,idex) => {
        todosItens.push(item)
    })
})

todosItens.map((item, index) => {
    
    let slideItem = document.querySelector('.slide-item').cloneNode(true)

    document.querySelector('.slide-list').append(slideItem)
    // document.querySelector('.teste').append(slideItem)

    slideItem.setAttribute('data-index', index)
    slideItem.querySelector('.slide-image').src = item.img
    slideItem.querySelector('.slide-description h3').innerHTML = item.nome
        
})







