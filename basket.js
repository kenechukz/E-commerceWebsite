

  




let cart = JSON.parse(localStorage.getItem("product-data")) || [];





let j = 0;
let total = 0;
let deliveryFee = 0;
basketTable = document.getElementsByClassName('basket-table');
const cartItems = document.getElementById('cart-items');


function basket(){

  //basketTable = document.getElementsByClassName('basket-table');

// Assuming basketTable is correctly selected
/*
basketTable[0].innerHTML = `
  <table>
    <thead>
      <tr>
        <th style="width: 40%;">PRODUCT</th>
        <th style="width: 30%;">QUANTITY</th>
        <th>PRICE</th>
      </tr>
    </thead>
    <tbody id="cart-items">
    </tbody>
  </table>
`;
*/
const totalTable = document.getElementsByClassName('total-table');


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
    <td style="text-align: right; position: relative; left: 70px;"><a href="checkout.html"><button>Make Payment</button></a></td>
  </tr>


  </table>
`

}





//basketTable[0].innerHTML = `<h1>Your cart is empty</h1>`;

function updatecart(){
  if (cart.length == 0) {
    basketTable[0].innerHTML = "<h1>Your cart is empty</h1>";
  }
  else {
    basketTable[0].innerHTML = cart.map(item => {
      deliveryFee = 3;
      const { image, title, price } = item;
      return `
        <div class="basket-item">
          <img src=${image}>
          <p>${title}</p>
          <p>${price}</p>
        </div>
      `;
    }).join(''); // Join to convert array to string
  }


  

}


basket();



updatecart();



