let sidebar = document.getElementById('sidebarCart')
let total = document.getElementById('total')
let showCart = () => {
    sidebar.style.width = '300px'

}
let products = [
    {
        id:1,
        name: "Breakfast",
        price: "350,00",
        image: 'product1.png'
    },
    {
        id:2,
        name: "Lunch",
        price: "400,00",
        image: 'product2.png'
    },
    {
        id:3,
        name: "Dinner",
        price: "630,00",
        image: 'product3.png'
    }
]
let displayFood = () => {
products.forEach(product => {
    let productDiv = document.createElement('div')
    productDiv.className = 'productDiv'
    productDiv.innerHTML = `
    <img src="${product.image}">
    <p>${product.name}</p>
    <p id="price">${product.price}</p>
    `
    let addToCartBtn = document.createElement('button')
    addToCartBtn.className = 'cartBtn'
    addToCartBtn.innerText = 'Add to cart'
    productDiv.appendChild(addToCartBtn)
    document.getElementById('foodsDiv').appendChild(productDiv)
    let addToCart = () => {
        addToCartBtn.addEventListener('click', () => {
            let cartDiv = document.createElement('div')
            cartDiv.className = 'cartDiv'
            cartDiv.innerHTML = `
            <img src="${product.image}">
            <p>${product.name}</p>
            <p id="price">${product.price}</p>
            `
            document.getElementById('sidebarCart').appendChild(cartDiv)
            let price = document.getElementById('price')
            total.innerText = Number(price.innerText) + Number(total.innerText)
            console.log(total)
    
        })
    }
    addToCart()
    
})
}
displayFood();
