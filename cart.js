
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}


function displayCart() {
  let cart = getCart();
  let cartContainer = document.getElementById("cartItems");
  let totalPrice = 0;
  
  cartContainer.innerHTML = ""; 

  if (cart.length === 0) {
      cartContainer.innerHTML = "<p class='text-center'>Your cart is empty.</p>";
      document.getElementById("totalPrice").innerText = "₹0";
      return;
  }

  cart.forEach((item, index) => {
      totalPrice += parseInt(item.price.replace("₹", "").replace(",", ""));

      let div = document.createElement("div");
      div.classList.add("col-md-4", "mb-3");
      div.innerHTML = `
          <div class="card">
              <img src="${item.imageUrl}" class="card-img-top" alt="${item.name}">
              <div class="card-body text-center">
                  <h5 class="card-title">${item.name}</h5>
                  <p class="card-text">Price: ${item.price}</p>
                  <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
              </div>
          </div>
      `;
      cartContainer.appendChild(div);
  });

  document.getElementById("totalPrice").innerText = `₹${totalPrice}`;
}


function removeFromCart(index) {
  let cart = getCart();
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}


function clearCart() {
  localStorage.removeItem("cart");
  displayCart();
}


function checkout() {
  let cart = getCart();
  if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
  }
  window.location.href = "payment.html";
}


displayCart();