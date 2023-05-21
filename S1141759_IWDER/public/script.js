/*Custom Cursor*/
function moveCustomCursor(e) {
  var customCursor = document.querySelector(".custom-cursor");
  customCursor.style.left = e.pageX + "px";
  customCursor.style.top = e.pageY + "px";
}

document.addEventListener("mousemove", moveCustomCursor);




/*Index.html Carousel John Wick Foto's */
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

// Updated JavaScript
function setCarouselHeight() {
  const carousel = document.querySelector(".carousel");
  const activeSlide = carousel.querySelector("[data-active] img");
  carousel.style.height = activeSlide.offsetHeight + "px";
}

window.addEventListener("resize", setCarouselHeight);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    setCarouselHeight();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  setCarouselHeight();
});



/*Add to cart Producten Merch.html*/
document.addEventListener('DOMContentLoaded', () => {
  const cartCounter = document.querySelector('[data-cart-counter]');
  const cartPopup = document.querySelector('[data-cart-popup]');
  const cartItems = document.querySelector('[data-cart-items]');
  const checkoutButton = document.querySelector('[data-checkout]');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  let cart = [];

  function updateCartCounter() {
    cartCounter.textContent = cart.length;
  }

  function updateCartPopup() {
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = `${item} (Item ${index + 1})`;
      cartItems.appendChild(li);
    });
  }

  addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const product = button.getAttribute('data-product');
      cart.push(product);
      updateCartCounter();
      updateCartPopup();
    });
  });

  cartCounter.parentElement.addEventListener("click", () => {
    cartPopup.style.display = cartPopup.style.display === "block" ? "none" : "block";
  });

  checkoutButton.addEventListener('click', () => {
    if (cart.length > 0) {
      alert(`You have successfully checked out ${cart.length} item(s)!`);
      cart = [];
      updateCartCounter();
      updateCartPopup();
      cartPopup.style.display = 'none';
    } else {
      alert('Your cart is empty. Please add some items to it first.');
    }
  });
});

document.addEventListener("mousemove", moveCustomCursor);




/* Prijs Add To Cart*/
// Get the elements from the DOM
const cartCounter = document.querySelector("#cart-counter");
const cartItems = document.querySelector("#cart-items");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Initialize an empty cart
let cart = [];

// Update the cart counter
function updateCartCounter() {
  cartCounter.textContent = cart.length;
}

// Update the cart popup
function updateCartPopup() {
  cartItems.innerHTML = "";

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} (Item ${index + 1}) - $${item.price}`;
    cartItems.appendChild(li);
  });

  // Add the cart total to the list
  const liTotal = document.createElement("li");
  liTotal.style.fontWeight = "bold";
  liTotal.textContent = `Total: $${totalPrice}`;
  cartItems.appendChild(liTotal);
}

addToCartButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const product = {
      name: button.getAttribute("data-product"),
      price: parseFloat(button.getAttribute("data-price")),
    };
    cart.push(product);
    updateCartCounter();
    updateCartPopup();
  });
});


  function playGunshot() {
    var gunshot = document.getElementById("gunshot");
    gunshot.play();
  }
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const audio = document.getElementById("gunshot");
    audio.play();
    audio.addEventListener("ended", () => {
      window.location.href = e.target.href;
    });
  });
});