function add_item(ele) {
  let productprice = ele.parentElement.querySelector("p span").innerHTML;
  let productname =
    ele.parentElement.parentElement.querySelector("h4").innerHTML;
  let productimage = ele.parentElement.parentElement.querySelector("img").src;
  console.log(productprice, productname, productimage);

  let shopping_cart = JSON.parse(localStorage.getItem("shopping_cart"));
  if (shopping_cart === null) shopping_cart = [];

  let product = {
    productprice: productprice,
    productname: productname,
    productimage: productimage,
  };

  shopping_cart.push(product);

  localStorage.setItem("shopping_cart", JSON.stringify(shopping_cart));

  display_shoppingcart();
}

function display_shoppingcart() {
  let shopping_cart = JSON.parse(localStorage.getItem("shopping_cart"));
  if (shopping_cart === null) shopping_cart = [];

  let content = "";
  let total = 0;
  shopping_cart.forEach((product, index) => {
    content += `
    <div class="cart_item">
        <img src="${product.productimage}" alt="cart item image" />
        <h4>${product.productname}</h4>
        <h4>$${product.productprice}</h4>
        <button onclick="remove_item(${index})" class="removebtn">Remove</button>
    </div>
    `;
    total += parseInt(product.productprice);
  });

  document.getElementById("shoppingcart_container").innerHTML = content;
  document.getElementById("totalamount").innerHTML = "$" + total;
  document.getElementById("item_count").innerHTML = shopping_cart.length;
}

function remove_item(index) {
  let shopping_cart = JSON.parse(localStorage.getItem("shopping_cart"));
  if (shopping_cart === null) shopping_cart = [];

  shopping_cart.splice(index, 1);

  localStorage.setItem("shopping_cart", JSON.stringify(shopping_cart));

  display_shoppingcart();
}
