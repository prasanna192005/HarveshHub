document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".product");
    const totalPriceSpan = document.querySelector("#total-price");
    const totalItemsSpan = document.querySelector("#total-items");
    const cartTotal = document.querySelector(".cart-total");

    let total = 0;
    let items = 0;

    // Function to update total price and items count
    function updateCartTotal() {
        total = 0;
        items = 0;
        products.forEach(product => {
            const price = parseFloat(product.querySelector(".product-price").innerText.replace("Rs. ", ""));
            const quantity = parseInt(product.querySelector(".product-quantity input").value);
            const offer = parseFloat(product.querySelector(".product-offer").innerText);
            total += (price * (1 - offer / 100)) * quantity;
            items += quantity;
        });
        totalPriceSpan.textContent = "Rs. " + total.toFixed(2);
        totalItemsSpan.textContent = items;
    }

    // Initial update
    updateCartTotal();

    // Event listeners for quantity change
    products.forEach(product => {
        const quantityInput = product.querySelector(".product-quantity input");
        const decreaseBtn = product.querySelector(".quantity-btn.decrease");
        const increaseBtn = product.querySelector(".quantity-btn.increase");

        decreaseBtn.addEventListener("click", function() {
            let value = parseInt(quantityInput.value);
            if (value > 1) {
                quantityInput.value = value - 1;
                updateCartTotal();
            }
        });

        increaseBtn.addEventListener("click", function() {
            let value = parseInt(quantityInput.value);
            quantityInput.value = value + 1;
            updateCartTotal();
        });

        quantityInput.addEventListener("change", function() {
            updateCartTotal();
        });
    });

    // Event listener for remove button
    products.forEach(product => {
        const removeButton = product.querySelector(".product-remove");
        removeButton.addEventListener("click", function() {
            product.remove();
            updateCartTotal();
            if (products.length === 0) {
                cartTotal.style.display = "none";
            }
        });
    });
});
