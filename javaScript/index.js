// class ItemList {
//     constructor(){
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
                      console.log(items);

       
   load();
   render(items);
         
  
function load(){
// alert("load is running");
}
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

 }
  
//   createitems  used to create items
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
<button type="submit" id="add_item" value="Add Item" class="btn btn-primary" >AddItem</button>
</div>
</div>
</div>
</div>`
return html;


}
function add(){

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