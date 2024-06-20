

  




cart = JSON.parse(localStorage.getItem("product-data")) || [];
let j = 0;
let total = 0;
let deliveryFee = 3;
basketTable = document.getElementsByClassName('basket-table');
const cartItems = document.getElementById('cart-items');
const totalTable = document.getElementsByClassName('total-table');


function updateCart(){
  if (cart.length == 0) {
    basketTable[0].innerHTML = "<h1>Your cart is empty</h1>";
    deliveryFee = 0;

  }
  else {
    deliveryFee = 3;
    basketTable[0].innerHTML = cart.map(item => {
      const {id, image, title, price, quantity } = item;
      return `
        <div class="basket-item">
          <img src=${image}>
          <div class="basket-item-txt">
            <p>${title}</p>
            <p style="margin-bottom: 80px;"></br>€${price * itemQuantity[id]}</p>
            <div class="basket-item-icons">
              <svg id="remove-icon"  onclick="removeItem(${id})" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
              <svg onclick="decrement(${id})" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
              </svg>
              ${itemQuantity[id]} 
              <svg onclick="increment(${id})" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
              </svg>
              
            </div>
          </div>
        </div>
      `;
    }).join(''); // Join to convert array to string
  }

}

function updatePrice(){
  total = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * itemQuantity[currentItem.id];
  }, 0);

  totalTable[0].innerHTML = `
  <table>
  <tr>
    <td><hr style="background-color: white; position: relative; bottom: 50px;" width="800px"></hr></td>
  </tr>
  <tr>
    <td>Subtotal</td>
    <td>€ ${total}</td>
  </tr>
  <tr>
    <td>Delivery</td>
    <td>€ ${deliveryFee}</td>
  </tr>
  <tr>
    <td>Total</td>
    <td>€ ${total + deliveryFee}</td>
  </tr>

  <tr>
    <td style="text-align: right; position: relative; left: 70px;"><button onclick="validatePayment()" class="pay-button">Pay</button></td>
  </tr>


  </table>
  `;



  
  console.log(total); // Output: 60
  
}

function validatePayment (){
  if(total === 0){
    window.alert('Add something to basket first before paying');
  }
  else{
    window.location.href = 'checkout.html';
    cart.length=0;
    quantity = 0;
    
    itemQuantity = itemQuantity.map(() => 0);

    localStorage.setItem("item-quantities",JSON.stringify(itemQuantity));
    localStorage.setItem("basket-quantity", quantity);
    localStorage.setItem("product-data", JSON.stringify(cart));
    updateAll();

  }
}

function removeItem(id){  
  let selectedItem = id;
  let currQuantity = itemQuantity[id];
  console.log(selectedItem);
  cart = cart.filter((x) => x.id !== selectedItem)
  localStorage.setItem("product-data", JSON.stringify(cart));

  console.log(cart);  

  quantity-= currQuantity;
  
  itemQuantity[id] -= currQuantity;
  localStorage.setItem("item-quantities",JSON.stringify(itemQuantity));
  localStorage.setItem("basket-quantity", quantity);
  updateAll();

}

function decrement(id){
  if (itemQuantity[id] > 1){
    itemQuantity[id]--;
    quantity--;
    localStorage.setItem("item-quantities",JSON.stringify(itemQuantity));
    localStorage.setItem("basket-quantity", quantity);
    updateAll();
  }
  else{
    removeItem(id)
  }
  
  
}

function increment(id){
  itemQuantity[id]++;
  quantity++;
  localStorage.setItem("item-quantities",JSON.stringify(itemQuantity));
  localStorage.setItem("basket-quantity", quantity);
  updateAll();
}

function updateAll(){
  updateCart(); // updates items in cart
  updateValue(); // updates quantity of basket
  updatePrice(); // updates price
}



updateCart();

updatePrice();




