
// Data



const products = [
    {
      id: 0,
      html: "jacket.html",
      image: "assets/images/monclizzy.jpg",
      title: "Moncler Vest",
      price: 100,
      quantity: 0,
  },
  
    {
      id: 1,
      html: "shoe1.html",
      image: "assets/images/yeezy-black-static.webp",
      title: "Yeezy Boost 350 V2 Reflective",
      price: 250,
      quantity: 0,
    },
  
    {
      id: 2,
      html: "hat.html",
      image: "assets/images/lv-clipse-hat-black.webp",
      title: "Louis Vuitton Eclipse Hat",
      price: 100,
      quantity: 0,
  
    },
  
    {
      id: 3,
      html: "shoe2.html",
      image: "assets/images/oncloud-black.avif",
      title: "OnCloud Runners",
      price: 130,
      quantity: 0,
  
    },
  
    {
      id: 4,
      html: "shoe3.html",
      image: "assets/images/nike-air-max-tw.avif",
      title: "Nike Air Max TW",
      price: 140,
      quantity: 0,
  
    },
  
    {
      id: 5,
      html: "tech.html",
      image: "assets/images/nike-tech-fleece-grey.jpeg",
      title: "Nike Tech Fleece",
      price: 200,
      quantity: 0,
  
    }
  
  
  ]

  
  let categories = [...new Set(products.map((item) => {return item}))]

  var cart = [];




// Header Div

let headerDiv = document.getElementById("header-div")

headerDiv.innerHTML = `<!-- Logo -->
      <a draggable="true" class="link-style" href="index.html">
      <img id="header-img" src="./assets/images/sourcedBycellz.jpg"/>
      </a>
      
      <!-- Nav bar-->
      <nav style="display: flex;">
        <ul>
          <!-- Search icon -->
          <div class="search-wrapper">
            <input search-bar id="search-bar" style="height: 20px; position: relative; top: 14px; left: 100px;" type="text" placeholder="Search..">
            <li id="search-icon"><a  draggable="true" class="link-style"><img id="icon-img" style="height: 12px; width: 12px;" src="./assets/images/search-icon.png"/>
          </div>
          <div style=" position: relative; top:30px; right: 250px;" product-cards-container class="product-cards">
            <template product-card-template>
              <div  class="card hide">
                
                <img product-img height="40px" width="40px" src="">
                <div product-text></div>

              </div>
            </template>
            
          </div>  

          
          </a>  </li>
          
          <li style="margin-left: 20px;">
            <!-- Products page -->
            <a draggable="true" class="link-style" href="products.html">Products</a>
            <ul class="dropdown">
              <li><a href="tech.html">Tracksuits</a></li>
              <li><a href="allshoes.html">Shoes</a></li>
              <li><a href="jacket.html">Coats and Jackets</a></li>
              <li><a href="hat.html">Hats and Scarfs</a></li>
            </ul>
          </li>
          <!-- Contact page -->
          <li><a draggable="true" class="link-style" href="contact.html">Contact</a></li>
          
        </ul>
        
        
        <div id="basket-quantity" style="border-radius: 20%; position: relative; left: 135px; top: 18px; width: 20px; height: 20px; background-color: red;">
          
          
        </div>
        

        <a draggable="true" class="link-style" href="basket.html">
          <svg class="basket-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
          </svg>
        </a>

        
      </nav>

      `


const clickMeButton = document.getElementById('search-icon');
const displayElement = document.getElementById('search-bar');
    
// Add a click event listener to the clickable element
clickMeButton.addEventListener('click', function() {
  // When clicked, toggle the display of the display element
  if (displayElement.style.display === 'none') {
    displayElement.style.display = 'block';
  } else {
          displayElement.style.display = 'none';
        }
      });

// Basket quantity
let quantity = localStorage.getItem("basket-quantity") || 0
let basketQuantity = document.getElementById("basket-quantity");

function updateValue(){
    
    basketQuantity.innerHTML = `<p style="position: relative; left: 5px; bottom: 20px;">${quantity}</p>`

}


updateValue()


// Searchbar
const productCardTemplate = document.querySelector("[product-card-template]");
const productCardsContainer = document.querySelector("[product-cards-container]")
const searchBar = document.querySelector("[search-bar]");

let items = [];

searchBar.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();

  

  items.forEach(item => {
    const isVisible = item.name.toLowerCase().includes(value);
    item.element.classList.toggle("hide", !isVisible);
  })

})

let productCard = document.querySelectorAll('.card');

items = categories.map(product => {
  const card = productCardTemplate.content.cloneNode(true).children[0];
  
  const name = card.querySelector("[product-text]");
  const img = card.querySelector("[product-img]");

  name.textContent = product.title;
  img.src = product.image;

    
  card.addEventListener('click', () => {
    window.location.href = product.html;
  });

  
  

  productCardsContainer.append(card);
  return {name: product.title, element: card}

});





document.getElementById('search-icon').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior

  const container = productCardsContainer;

  // Toggle the 'hidden' class on the container
  container.classList.toggle('hide');



});






// Add to cart
let itemQuantities = categories.map(item => item.quantity);


exists = JSON.parse(localStorage.getItem("item-quantities"));

dataSet = exists ?  JSON.parse(localStorage.getItem("item-quantities")) : localStorage.setItem("item-quantities", JSON.stringify(itemQuantities));

let itemQuantity = exists;

function addtocart(a) {
  idToCheck = a;
  

 ;

  
  console.log(categories[a]);
  quantity++;

  
  itemQuantity[a]++;
  localStorage.setItem("item-quantities",JSON.stringify(itemQuantity));
  console.log("item quantity: " + itemQuantity);


  localStorage.setItem("basket-quantity", quantity);
  basketQuantity.innerHTML = `<p style="position: relative; left: 5px; bottom: 20px;">${localStorage.getItem("basket-quantity")}</p>`;


  previousItems = localStorage.getItem("product-data");
  cart = previousItems ? JSON.parse(previousItems) : [];

  // Check if item already exists in the cart
  const cartItem = cart.find(item => item.id === idToCheck);
  if (!cartItem) {
    // Only push new item if it does not exist in the cart
    cart.push({ ...categories[a] });
    localStorage.setItem("product-data", JSON.stringify(cart));
  } else {
    console.log("Item already in cart");
  }
 
    
}