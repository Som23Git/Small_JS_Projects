var arr = {"items":[{"name":"Bronze Car","price":2.99,"quantity":1},{"name":"Paris Delight","price":3.99,"quantity":1},{"name":"Lamp Frost","price":5.8,"quantity":2}]}
localStorage.setItem("Products_1", JSON.stringify(arr));
//var cartItems = JSON.parse(localStorage.getItem("Products"));
var cartItems = JSON.parse(localStorage.getItem("Products_1"));
cartItems.items.push({"name": "Gold Car", "price": 10.99, "quantity": 1000});
console.log(cartItems);
localStorage.setItem("Products_2",JSON.stringify(cartItems.items));
//localStorage.setItem("Products_1", JSON.stringify(cartItems));
//var cartSItems = JSON.parse(localStorage.getItem("Products"));
