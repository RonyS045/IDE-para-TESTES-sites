let cart = [];

function addToCart(productId) {
    const productElement = document.querySelector(`[data-id="${productId}"]`);
    const productName = productElement.querySelector('.card-title').textContent;
    const productPrice = parseFloat(productElement.querySelector('.card-text').textContent.replace('R$', '').trim());

    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity++;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    updateCart();
}

function removeFromCart(productId) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex > -1) {
        cart[productIndex].quantity--;
        if (cart[productIndex].quantity === 0) {
            cart.splice(productIndex, 1);
        }
        updateCart();
    }
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    let totalPrice = 0;
    cart.forEach(product => {
        totalPrice += product.price * product.quantity;
        const cartRow = `
            <tr>
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>R$ ${product.price.toFixed(2)}</td>
                <td>
                    <button class="btn btn-danger" onclick="removeFromCart(${product.id})">Remover</button>
                </td>
            </tr>
        `;
        cartItemsElement.insertAdjacentHTML('beforeend', cartRow);
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Salvar o carrinho no localStorage
window.onbeforeunload = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

// Carregar carrinho ao abrir a página
window.onload = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
};


let toggler = document.getElementById("switch");

toggler.addEventListener("click", () => {
  //   if (toggler.checked === true) {
  //     document.body.style.backgroundColor = "black";
  //   } else {
  //     document.body.style.backgroundColor = "white";
  //   }

  toggler.checked === true
    ? (document.body.style.backgroundColor = "black")
    : (document.body.style.backgroundColor = "white");
});

