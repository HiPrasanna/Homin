
// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Product Database (Example)
const products ={
 1: {
    name: "Lounge Chair",
    description: "Elegant lounge chair with a minimalist design and soft fabric.",
    primaryMaterial: "Fabric with wooden legs",
    seatingCapacity: 1,
    dimensions: "32” x 30” x 35”",
    warranty: "2 years",
    price:  "₹4999",
    rating: 4.5,
    category: "Living Room Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/chair1.png",
    offers: "10% off on first purchase"
  },
  2:{
    name: "Leather Armchair",
    description: "Luxurious leather armchair with sturdy steel legs.",
    primaryMaterial: "Genuine leather with steel frame",
    seatingCapacity: 1,
    dimensions: "34” x 32” x 36”",
    warranty: "3 years",
    price:  "₹7499",
    rating: 4.8,
    category: "Living Room Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/5.png",
    offers: "₹500 off on prepaid orders"
  },
 3: {
    name: "Luxury Lounge Set",
    description: "Modern and cozy seating for ultimate relaxation.",
    primaryMaterial: "High-density foam with velvet upholstery",
    seatingCapacity: 3,
    dimensions: "80” x 35” x 32”",
    warranty: "2 years",
    price:  "₹7500",
    rating: 4.7,
    category: "Living Room Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/shop1.png",
    offers: "Buy 2 & get extra 15% off"
  },
 4: {
    name: "Wingback Chair",
    description: "Stylish wingback chair with ergonomic design.",
    primaryMaterial: "Fabric with solid wood legs",
    seatingCapacity: 1,
    dimensions: "36” x 32” x 40”",
    warranty: "2 years",
    price:  "₹6299",
    rating: 4.6,
    category: "Living Room Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/2.png",
    offers: "₹300 off on UPI payments"
  },
 5: {
    name: "Minimalist Decor Shelf",
    description: "Elegant display shelf to enhance your space.",
    primaryMaterial: "Engineered wood",
    dimensions: "40” x 12” x 48”",
    warranty: "3 years",
    price:  "₹3200",
    rating: 4.5,
    category: "Home Decor",
    stockAvailability: "In Stock",
    imageUrl: "assets/shop2.png",
    offers: "Flat ₹200 off on purchases above ₹3000"
  },
 6: {
    name: "Royal King Bed",
    description: "Premium wooden bed with soft cushioning.",
    primaryMaterial: "Solid wood with upholstered headboard",
    dimensions: "78” x 72” x 48”",
    warranty: "5 years",
    price:  "₹15000",
    rating: 4.9,
    category: "Bedroom Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/shop3.png",
    offers: "Free installation + Extra ₹1000 off on credit cards"
  },
 7: {
    name: "Artistic Sofa Set",
    description: "Unique designer sofa with vibrant aesthetics.",
    primaryMaterial: "Fabric with wooden frame",
    seatingCapacity: 3,
    dimensions: "84” x 36” x 34”",
    warranty: "3 years",
    price:  "₹9800",
    rating: 4.8,
    category: "Living Room Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/shop4.png",
    offers: "20% off for Prime Members"
  },
  8:{
    name: "Dining Table Set",
    description: "Premium wooden dining set featuring a table and six chairs.",
    primaryMaterial: "Solid wood",
    seatingCapacity: 6,
    dimensions: "72” x 36” x 30”",
    warranty: "4 years",
    price:  "₹12999",
    rating: 4.7,
    category: "Dining Room Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/dinning.png",
    offers: "Extra 10% off on festive sale"
  },
  9:{
    name: "Vintage Wood Cabinet",
    description: "Classic handcrafted wooden storage unit.",
    primaryMaterial: "Solid wood",
    dimensions: "50” x 20” x 36”",
    warranty: "3 years",
    price: "₹6500",
    rating: 4.7,
    category: "Storage Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/shop5.png",
    offers: "Flat ₹500 off on prepaid orders"
  },
  10:{
    name: "Antique Side Table",
    description: "Beautifully carved table with vintage charm.",
    primaryMaterial: "Teak wood",
    dimensions: "24” x 24” x 28”",
    warranty: "3 years",
    price: "₹4200",
    rating: 4.6,
    category: "Home Decor",
    stockAvailability: "In Stock",
    imageUrl: "assets/shop6.png",
    offers: "10% off on first order"
  },
 11: {
    name: "Contemporary TV Unit",
    description: "Modern media console for organized storage.",
    primaryMaterial: "Engineered wood",
    dimensions: "55” x 18” x 24”",
    warranty: "2 years",
    price: "₹4999",
    rating: 4.5,
    category: "Living Room Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/shop7.png",
    offers: "Extra ₹400 off on orders above ₹5000"
  },
  12:{
    name: "Office Workstation Set",
    description: "Professional desk setup with ample storage.",
    primaryMaterial: "Engineered wood",
    dimensions: "60” x 28” x 30”",
    warranty: "3 years",
    price: "₹12500",
    rating: 4.9,
    category: "Office Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/shop8.png",
    offers: "Extra ₹1,500 off on ICICI Cards"
  },
  13:{
    name: "Wicker Chair",
    description: "Cozy outdoor wicker chair with plush cushions.",
    primaryMaterial: "Synthetic rattan with metal frame",
    seatingCapacity: 1,
    dimensions: "36” x 34” x 32”",
    warranty: "2 years",
    price: "₹3999",
    rating: 4.5,
    category: "Outdoor Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/modernchair.png",
    offers: "₹200 cashback on UPI payments"
  },
  14:{
    name: "Elegant Bedside Table",
    description: "Stylish and compact nightstand.",
    primaryMaterial: "Engineered wood",
    dimensions: "20” x 18” x 24”",
    warranty: "2 years",
    price: "₹3800",
    rating: 4.4,
    category: "Bedroom Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/shop9.png",
    offers: "Extra 5% off on credit card payments"
  },
  15:{
    name: "Plush Accent Chair",
    description: "Comfortable and stylish lounge chair.",
    primaryMaterial: "Fabric with wooden legs",
    seatingCapacity: 1,
    dimensions: "34” x 32” x 36”",
    warranty: "3 years",
    price: "₹5200",
    ratin: 4.6,
    category: "Living Room Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/shop10.png",
    offers: "₹500 off on purchases above ₹5000"
  },
 16: {
    name: "Traditional Table",
    description: "Intricately designed wooden center table.",
    primaryMaterial: "Solid wood",
    dimensions: "28” x 28” x 30”",
    warranty: "3 years",
    price: "₹6800",
    rating: 4.7,
    category: "Home Decor",
    stockAvailability: "In Stock",
    imageUrl: "assets/shop11.png",
    offers: "10% off on festive sale"
  },
  17:{
    name: "Round Ottoman Seat",
    description: "Soft and spacious ottoman for relaxation.",
    primaryMaterial: "Velvet upholstery with wooden base",
    dimensions: "30” x 30” x 18”",
    warranty: "2 years",
    price:  "₹4500",
    rating: 4.6,
    category: "Seating",
    stockAvailability: "In Stock",
    imageUrl: "assets/shop12.png",
    offers: "10% off on first order"
  },
  18:{
    name: "Wooden Bed",
    description: "Sturdy wooden bed frame with a sleek and high-quality finish.",
    primaryMaterial: "Solid wood with plywood base",
    dimensions: "78” x 60” x 40”",
    warranty: "5 years",
    price:  "₹9499",
    rating: 4.8,
    category: "Bedroom Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/bedbg.png",
    offers: "Flat ₹500 off on prepaid orders"
  },
  19:{
    
    name: "Modern Dining Set",
    description: "Chic dining table with cozy seating.",
    primaryMaterial: "Teak wood with cushioned chairs",
    dimensions: "60” x 36” x 30”",
    warranty: "3 years",
    price:  "₹10500",
    rating: 4.7,
    category: "Dining Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/shop13.png",
    offers: "Extra ₹1,000 off on orders above ₹10,000"
  },
 20: {
    name: "Pumpkin Inspired Sofa",
    description: "Unique and playful design for a cozy feel.",
    primaryMaterial: "Velvet upholstery with foam filling",
    dimensions: "72” x 40” x 32”",
    warranty: "3 years",
    price:  "₹7300",
    rating: 4.6,
    category: "Living Room Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/shop14.png",
    offers: "Festive discount of 15% available"
  },
  21:{
    name: "Nature-Theme Lounge",
    description: "Earthy aesthetics with elegant finish.",
    primaryMaterial: "Solid wood with fabric upholstery",
    dimensions: "72” x 36” x 30”",
    warranty: "3 years",
    price:  "₹9000",
    rating: 4.9,
    category: "Seating",
    stockAvailability: "In Stock",
    imageUrl: "assets/shop15.png",
    offers: "₹750 off on orders above ₹8000"
  },
  22:{
    name: "Tufted Chair",
    description: "Modern tufted chair with soft upholstery and a stylish design.",
    primaryMaterial: "Fabric with wooden legs",
    dimensions: "32” x 30” x 36”",
    warranty: "2 years",
    price:  "₹5199",
    rating: 4.5,
    category: "Living Room Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/chair3.png",
    offers: "₹200 cashback on UPI payments"
  },
  23:{
    name: "Retro Sofa",
    description: "Vibrant orange sofa with a retro design.",
    primaryMaterial: "Leatherette upholstery with wooden frame",
    dimensions: "80” x 34” x 32”",
    warranty: "3 years",
    price:  "₹8299",
    rating: 4.7,
    category: "Living Room Furniture",
    stockAvailability: "In Stock",
    imageUrl: "assets/sofabig2.png",
    offers: "Extra ₹500 off on orders above ₹8000"
  }
}
// Display Product Details if Exists
if (products[productId]) {
    document.getElementById("product-name").innerText = products[productId].name;
    document.getElementById("product-desc").innerText = products[productId].description;
    document.getElementById("product-price").innerText = products[productId].price;
    document.getElementById("product-image").src = products[productId].imageUrl;
    document.getElementById("product-material").innerText = products[productId].primaryMaterial;
    document.getElementById("product-dimensions").innerText = products[productId].dimensions;
    document.getElementById("product-warranty").innerText = products[productId].warranty;
    document.getElementById("product-offers").innerText = products[productId].offers;
    document.getElementById("product-stock").innerText = products[productId].stockAvailability;
} else {
    document.querySelector(".container").innerHTML = "<h2>Product Not Found</h2>";
}