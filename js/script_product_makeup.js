let cart = [];
const deliveryCharge = 10;

function addToCart(name, price) {
    const item = cart.find(product => product.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(name) {
    cart = cart.filter(product => product.name !== name);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";
    let subtotal = 0;
    let itemCount = 0;

    cart.forEach(product => {
        const itemTotal = product.price * product.quantity;
        subtotal += itemTotal;
        itemCount += product.quantity;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            ${product.name} (${product.quantity}) - $${itemTotal.toFixed(2)}
            <button onclick="removeFromCart('${product.name}')">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });

    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("itemCount").textContent = itemCount;
    const total = subtotal + deliveryCharge;
    document.getElementById("total").textContent = total.toFixed(2);
}

function proceedToCheckout() {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!fullName || !email || !address || !phone) {
        alert("Please fill in all customer details.");
        return;
    }

    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your cart before proceeding to checkout.");
        return;
    }

    alert(`Thank you for your order, ${fullName}! Your total is $${document.getElementById("total").textContent}.`);
    // Reset cart and form
    cart = [];
    updateCart();
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
}
