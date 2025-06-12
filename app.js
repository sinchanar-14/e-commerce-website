// Function to load products dynamically
function loadProducts() {
  document.getElementById("products").innerHTML = `
    <div class="product">
      <img src="images/product1.jpg" alt="Wireless Headphones" />
      <div class="product-content">
        <h3>Wireless Headphones</h3>
        <p>₹1,499</p>
        <button>Add to Cart</button>
      </div>
    </div>
    <div class="product">
      <img src="images/product2.jpg" alt="Bluetooth Speaker" />
      <div class="product-content">
        <h3>Bluetooth Speaker</h3>
        <p>₹999</p>
        <button>Add to Cart</button>
      </div>
    </div>
    <div class="product">
      <img src="images/product3.jpg" alt="Smart Watch" />
      <div class="product-content">
        <h3>Smart Watch</h3>
        <p>₹2,999</p>
        <button>Add to Cart</button>
      </div>
    </div>
    <div class="product">
      <img src="images/product4.jpg" alt="Sports Shoes" />
      <div class="product-content">
        <h3>Sports Shoes</h3>
        <p>₹1,199</p>
        <button>Add to Cart</button>
      </div>
    </div>
    <div class="product">
      <img src="images/product5.jpg" alt="Coffee Mug" />
      <div class="product-content">
        <h3>Coffee Mug</h3>
        <p>₹299</p>
        <button>Add to Cart</button>
      </div>
    </div>
    <div class="product">
      <img src="images/product6.jpg" alt="Laptop Backpack" />
      <div class="product-content">
        <h3>Laptop Backpack</h3>
        <p>₹1,899</p>
        <button>Add to Cart</button>
      </div>
    </div>
    <div class="product">
      <img src="images/product7.jpg" alt="Mobile Phone" />
      <div class="product-content">
        <h3>Mobile Phone</h3>
        <p>₹31,899</p>
        <button>Add to Cart</button>
      </div>
    </div>
    <div class="product">
      <img src="images/product8.jpg" alt="PS5" />
      <div class="product-content">
        <h3>PlayStation 5</h3>
        <p>₹54,999</p>
        <button>Add to Cart</button>
      </div>
    </div>
    <div class="product">
      <img src="images/product9.jpg" alt="Remote Car" />
      <div class="product-content">
        <h3>Remote Control Car</h3>
        <p>₹1,499</p>
        <button>Add to Cart</button>
      </div>
    </div>
    <div class="product">
      <img src="images/product10.jpg" alt="Power Bank" />
      <div class="product-content">
        <h3>Power Bank</h3>
        <p>₹1,299</p>
        <button>Add to Cart</button>
      </div>
    </div>
    <div class="product">
      <img src="images/product11.jpg" alt="Portable HandFan" />
      <div class="product-content">
        <h3>Portable HandFan</h3>
        <p>₹799</p>
        <button>Add to Cart</button>
      </div>
    </div>
    <div class="product">
      <img src="images/product12.jpg" alt="Telivision" />
      <div class="product-content">
        <h3>Telivision</h3>
        <p>₹19,999</p>
        <button>Add to Cart</button>
      </div>
    </div>
  `;
}

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Load products
  loadProducts();

  // Service Worker registration
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js')
      .then(() => console.log('✅ Service Worker Registered'))
      .catch(err => console.error('❌ Service Worker Registration Failed:', err));
  }

  // Ask for notification permission
  Notification.requestPermission()
    .then(permission => {
      if (permission === 'granted') {
        new Notification("Thanks for enabling notifications!");
      } else {
        console.log('Notification permission denied.');
      }
    })
    .catch(error => console.error('Notification error:', error));

  // Theme toggle functionality
  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggleBtn.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
    });
  }
});
