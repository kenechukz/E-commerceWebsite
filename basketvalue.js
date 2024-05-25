
let quantity = localStorage.getItem("basket-quantity") || 0
let basketQuantity = document.getElementById("basket-quantity");

basketQuantity.innerHTML = `<p style="position: relative; left: 5px; bottom: 20px;">${quantity}</p>`