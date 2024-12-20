<script>
    // Example product
    const products = [
        { id: 1, name: "Black Hoodie", price: 50, image: "hoodie1.jpg" },
        { id: 2, name: "White Hoodie", price: 60, image: "hoodie2.jpg" },
    ];

    // Add product to cart
    function addToCart(productId) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const product = products.find(p => p.id === productId);

        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    }

    // Display cart items
    function displayCart() {
        const cartContainer = document.querySelector(".cart-items");
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        let total = 0;

        cartContainer.innerHTML = "";

        cart.forEach(item => {
            total += item.price * item.quantity;
            cartContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-details">
                        <h2>${item.name}</h2>
                        <p>Price: $${item.price}</p>
                        <label for="quantity-${item.id}">Quantity:</label>
                        <input type="number" id="quantity-${item.id}" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            `;
        });

        document.querySelector(".cart-summary h2").textContent = `Total: $${total}`;
    }

    // Update quantity
    function updateQuantity(productId, quantity) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const item = cart.find(p => p.id === productId);
        if (item) {
            item.quantity = parseInt(quantity);
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCart();
        }
    }

    // Remove item
    function removeFromCart(productId) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter(p => p.id !== productId);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }

    // Initialize cart display
    document.addEventListener("DOMContentLoaded", displayCart);
</script>
