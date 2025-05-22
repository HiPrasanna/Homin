
function getCart() {
  let cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}


function addToCart(product) {
  let cart = getCart();
  let existingProduct = cart.find(item => item.name === product.name);
  if (!existingProduct) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} added to cart!`);
  } else {
      alert("This item is already in your cart.");
  }
}

function buyNow(product) {
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "payment.html"; 
}




let products = [
  { name: "Lounge Chair", price: "₹4999", imageUrl: "assets/chair1.png" },
  { name: "Leather Armchair", price: "₹7499", imageUrl: "assets/5.png" },
  { name: "Luxury Lounge Set", price: "₹7500", imageUrl: "assets/shop1.png" },
  { name: "Wingback Chair", price: "₹6299", imageUrl: "assets/2.png" },
  { name: "Minimalist Decor Shelf", price: "₹3200", imageUrl: "assets/shop2.png" },
  { name: "Royal King Bed", price: "₹15000", imageUrl: "assets/shop3.png" },
  { name: "Artistic Sofa Set", price: "₹9800", imageUrl: "assets/shop4.png" },
  { name: "Dining Table Set", price: "₹12999", imageUrl: "assets/dinning.png" },
  { name: "Vintage Wood Cabinet", price: "₹6500", imageUrl: "assets/shop5.png" },
  { name: "Antique Side Table", price: "₹4200", imageUrl: "assets/shop6.png" },
  { name: "Contemporary TV Unit", price: "₹4999", imageUrl: "assets/shop7.png", offers: "Extra ₹400 off on orders above ₹5000" },
  { name: "Office Workstation Set", price: "₹12500", imageUrl: "assets/shop8.png" },
  { name: "Wicker Chair", price: "₹3999", imageUrl: "assets/modernchair.png" },
  { name: "Elegant Bedside Table", price: "₹5200", rating: 4.4, imageUrl: "assets/shop9.png" },
  { name: "Plush Accent Chair", price: "₹5200", rating: 4.6, imageUrl: "assets/shop10.png" },
  { name: "Traditional Table", price: "₹6800", imageUrl: "assets/shop11.png" },
  { name: "Round Ottoman Seat", price: "₹4500", imageUrl: "assets/shop12.png" },
  { name: "Wooden Bed", price: "₹9499", imageUrl: "assets/bedbg.png" },
  { name: "Modern Dining Set", price: "₹10500", imageUrl: "assets/shop13.png" },
  { name: "Pumpkin Inspired Sofa", price: "₹7300", imageUrl: "assets/shop14.png" },
  { name: "Nature-Theme Lounge", price: "₹9000", imageUrl: "assets/shop15.png" },
  { name: "Tufted Chair", price: "₹5199", imageUrl: "assets/chair3.png" },
  { name: "Retro Sofa", price: "₹8299", imageUrl: "assets/sofabig2.png" }
];


document.addEventListener("click", function(event) {
  if (event.target.classList.contains("addToCartBtn")) {
      let productId = parseInt(event.target.getAttribute("data-id"));
      if (!isNaN(productId) && products[productId]) {
          addToCart(products[productId]);
      } else {
          console.error("Invalid product ID");
      }
  }

  if (event.target.classList.contains("buyNowBtn")) {
      let productId = parseInt(event.target.getAttribute("data-id"));
      if (!isNaN(productId) && products[productId]) {
          buyNow(products[productId]);
      } else {
          console.error("Invalid product ID");
      }
  }
});


