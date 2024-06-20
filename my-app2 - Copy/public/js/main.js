




let i = 0; 





document.getElementById('main-div').innerHTML = categories.map((item) => {

    // We are mapping "item" and the following HTML code to the different sets in the the arrays "products"

    var {html, image, title, price,quantity} = item;

    return(
      `<div class="card-img"> 
          <a href=${html}><img src=${image}></a>
          <p class="card-text"> ${title} <br/>€ ${price} </p>
          <div>` + 
            "<button onclick='addtocart("+(i++)+")' class='card-text'>ADD TO CART</button>" +
      `   </div>
      </div>`  
      


    )



}).join('')












  