
const products = [
  {
    id: 0,
    html: "jacket.html",
    image: "assets/images/monclizzy.jpg",
    title: "Moncler Vest",
    price: 100,
},

  {
    id: 1,
    html: "shoe1.html",
    image: "assets/images/yeezy-black-static.webp",
    title: "Yeezy Boost 350 V2 Reflective",
    price: 250,
  },

  {
    id: 2,
    html: "hat.html",
    image: "assets/images/lv-clipse-hat-black.webp",
    title: "Louis Vuitton Eclipse Hat",
    price: 100,

  },

  {
    id: 3,
    html: "shoe2.html",
    image: "assets/images/oncloud-black.avif",
    title: "OnCloud Runners",
    price: 130,

  },

  {
    id: 4,
    html: "shoe3.html",
    image: "assets/images/nike-air-max-tw.avif",
    title: "Nike Air Max TW",
    price: 140,

  },

  {
    id: 5,
    html: "tech.html",
    image: "assets/images/nike-tech-fleece-grey.jpeg",
    title: "Nike Tech Fleece",
    price: 200,

  }


]



const categories = [...new Set(products.map((item) => {return item}))]
let i = 0;

 




var cart = [];

function addtocart(a){
  console.log(categories[a])
  quantity++;
  localStorage.setItem("basket-quantity", quantity)
  basketQuantity.innerHTML = `<p style="position: relative; left: 5px; bottom: 20px;">${localStorage.getItem("basket-quantity")}</p>`
  cart.push({...categories[a]});
  localStorage.setItem("product-data",JSON.stringify(cart))
  //displaycart();

}




function displaycart(a){
  let j = 0;
  // changes location of browser
  window.document.location = './basket.html';

  if(cart.length==0){
    document.getElementById('basket-table').innerHTML = "Your cart is empty";
  }
  else{
    document.getElementById('basket-table').innerHTML = cart.map((items) =>
    {
      var {image, title, price} = items;

      return `
        hi
        <div>
          <img src=${image}>
          <p>${title}</p>
          <p>${price}</p>
        </div>
      `;

    })
  }

}


  