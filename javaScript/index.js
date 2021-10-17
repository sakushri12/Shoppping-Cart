       var items = [
                      {
                        id:0,
                        name:"Hoodie",
                        img:"./images/ts6.jpeg",
                        price:20

                      } ,
                      {
                        id:1,
                        name:"T-Shirt",
                        img:"./images/ts7.jpeg",
                        price:15

                      } ,
                      {
                        id:2,
                        name:"Baby T-Shirt",
                        img:"./images/baby.jpeg",
                        price:15

                      } ,
                      {
                        id:3,
                        name:"T-Shirt",
                        img:"./images/ts5.jpeg",
                        price:10

                      }];
     
     
   load();
   render(items);
   let carts = document.querySelector(".btn-primary");
   let listContainer = document.querySelector("#cartlists1");
   let quantityField = document.querySelector(".num");
   console.log(carts);
// Created addeventlistener for additem button
      for(let i=0; i<carts.length; i++){
           carts[i].addEventListener("click",addToCart)
      }
      
      // function for adding item to cart
      function addToCart(event){
        alert("lists added");
            let btn1 = event.target;  
            let btnParent = btn1.parentElement; 
            let btnGrandParent =  btn1.parentElement.parentElement;
            console.log(btnParent);
            let itemName = btnParent.children[0].innertext;
            let itemPrice = btnParent.children[1].innertext;
            let itemImage = btnGrandParent.children[0].src;
            console.log(itemName);
            console.log(itemPrice);
            // creating html div elements for cart lists
            let itemContainer =document.createElement('div');
          itemContainer.innerHTML = `<div class="col-auto">
                                       <h3>${itemName}</h3>
                                     </div>
                                      <div class="col-auto">
                                       <input type="number" class="num" value="1">
                                     </div>
                                      <div class="col-auto">
                                           <h3>${itemPrice}</h3>
                                       </div>
                                      <div class="col-auto">
                                         <h3>$20.00</h3>
                                      </div>
                                     <div class="col-auto">
                                      <button calss="btn_danger" id= "remove" type="button">Remove </button>
                                    </div>`
            listContainer.append(itemContainer);                 
        // Created addeventlistener for quantity inptu
          for(let i=0; i<carts.length; i++){
            quantityField[i].addEventListener("click",calcQuantity);
}

         }

  // function for calculating quantity
   function calcQuantity(event){
      let noofItems = event.target;
      let noofItemsParent = noofItems.parentElement.parentElement;
      let price = noofItemsParent.getElementById("price");
      let total = noofItemsParent.getElementById("total");
      let totalPrce = noofItems.value * price.value;
          let grandTotal = calcGrandTotal();
    }
    // calculating Greand total price
    function calcGrandTotal(){

    }
  // save items to the local storage
  function save() {
      // Create a JSON string of the tasks
       const tasksJson = JSON.stringify(items);

      // Store the JSON string in localStorage
       localStorage.setItem("items", tasksJson);

       // Convert the currentId to a string;
   const currentId = String(items.Id);

       // Store the currentId in localStorage
       localStorage.setItem("currentId", currentId);
   }
// get items from the local storage
  function load() {
    //  if(localStorage.getItem('items')) {
    //   const tasksJson = localStorage.getItem('items');
      
    // }
    // if(localStorage.getItem('currentId')) {
    //   const currentId = localStorage.getItem('currentId');
    //  currentId = Number(currentId);
    // }
  }
  // remove items from the list
 function remove(){
   
 }

  
   
//  display the products
function render(items){
  let itemHtmlList =[];
 // Loop over our items and create the html
 for(let i =0; i<items.length;i++){
 const item = items[i];
// Create the task html
const itemHtml = createItemHtml(
  item.id,
  item.name,
  item.img,
  item.price,
  );
// Push it to the itemsHtmlList array
itemHtmlList.push(itemHtml);
}
// Create the tasksHtml by joining each item in the tasksHtmlList
const itemsHtml = itemHtmlList.join("\n");

// Set the inner html of the tasksList on the page
const itemsList = document.querySelector("#item-list");
itemsList.innerHTML = itemsHtml;
console.log(itemsList);
 }
  
//   createitems  
  function createItemHtml(id,name,img,price){
    
const html = `<div class="col-auto" data-task-id="${id}" width="30" height="40">
<div class="p-2 bd-highlight">
 <div class="card">
<img src= ${img} class="card-img-top" alt="laptop">
<div class="card-body">
<h5 class="card-title">Product Name:${name}</h5>
<h5 class="card-title">Price : $ ${price}.00</h5>
<span id="msg">Please select the quantity here</span>
<input type="number" id ="quantity" aria-label="form-control" class="form-control" required>
<button type="submit" id="add_item" value="Add Item" class="add_button btn btn-primary" >AddItem</button>
</div>
</div>
</div>
</div>`
return html;


}
function addElements(){

    // elements are created
//     var main = document.getElementById('products');
//     var list = document.createElement('li');
//     var pic = document.createElement('img');
//     var price = document.createElement('h1');
//     var desc = document.createElement('p');
//     var add = document.createElement('button');
//     var inputbox = document.createElement('input');
// //   elements are pushed into html
//     main.appendChild(list);
//     list.appendChild(pic);
//     list.appendChild(price);
//     list.appendChild(desc);
//     list.appendChild(add);
//     list.appendChild(inputbox);
//     pic.innerHTML = items[0][0];
//     price.innerHTML = items[0][1];
//     desc.innerHTML = items[0][2];
//     add.innerHTML='AddItem';
//     inputbox.type = 'number';
  
}