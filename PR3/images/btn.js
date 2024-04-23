const button = document.querySelector(".addtocart");
const done = document.querySelector(".done");
console.log(button);
let added = false;
button.addEventListener("click", () => {
  if (added) {
    done.style.transform = "translate(-110%) skew(-40deg)";
    added = false;
  } else {
    done.style.transform = "translate(0px)";
    added = true;
  }
});

let cart = [];
let total = 0;

function addToCart(itemName) {
  let price;
  switch (itemName) {
    case "Burger":
      price = 10;
      break;
    case "Pizza":
      price = 12;
      break;
    default:
      price = 0;
  }
  cart.push({ name: itemName, price });
  total += price;
  updateCart();
}

function updateCart() {
  let cartItem = document.getElementById("cart-items");
  cartItem.innerHTML = "";
  cart.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price}`;
    cartItem.appendChild(li);
  });
  document.getElementById("total").textContent = total;
}
