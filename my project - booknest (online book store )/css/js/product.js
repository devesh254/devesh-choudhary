function displayProducts(filteredProducts = products) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  filteredProducts.forEach(product => {
    container.innerHTML += `
      <div class="card">
        <h3>${product.title}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

function searchProduct() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchValue)
    );
    displayProducts(filtered);
}

displayProducts();