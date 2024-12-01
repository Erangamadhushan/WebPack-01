let getItemContainers = document.querySelector('.getItemContainer'); 
let ItemContent = " ";

// window.addEventListener("DOMContentLoaded", () => {
//     loadObjects();
// });
function loadContent() {
    getItemContainers.innerHTML = " ";
    let ItemDetails = sessionStorage.getItem('currentItem');
    ItemDetails = JSON.parse(ItemDetails);
    //console.log(ItemDetails);
    let getQuantity = 1;

    ItemContent += `
        <div class="col-md-5">
            <div >
                <img src="${ItemDetails.getImg}" style="width:80%;margin:auto" alt="${ItemDetails.getDesc}"/>
            </div>
        </div>
    `;
    ItemContent += `
        <div class="col-md-5 p-4">
            <h2 class="text-center main_heading">${ItemDetails.getTitle}</h2>
            <p class="text-description main_description">${ItemDetails.getDesc}</p>
            <div class="my-3">
                <input type="text" value="$${ItemDetails.getPrice}" readonly/>
                <input type="number" max="10" min="1" value="1" id="quantity"/>
            </div>
            <div class="row row-cols-2">
                <div>
                    <h3>Total Price :</h3>
                    <h4 class="main-description">$<span id="totalValue">${ItemDetails.getPrice * getQuantity}<span></h4>
                </div>
                <div style="display:grid;place-items:center">
                    <button type="button" class="main_btn" onclick="addCardItem()">Add to Card</button>
                    <button type="button" class="btn btn-danger" onclick="orderComfirm()">Buy Now
                </div>
            </div>
        </div>
    `

    getItemContainers.innerHTML = ItemContent;
    document.getElementById('quantity').addEventListener("change", (event) => {
        let currentValue = parseInt(document.getElementById('quantity').value);
        document.querySelector('#totalValue').innerHTML = currentValue*ItemDetails.getPrice;
    })
}
loadContent();


function orderComfirm() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Order Comfirm Successfully !",
        showConfirmButton: true,
        timer: 3500
      });
}


function addCardItem() {
    
    let itemsList = localStorage.getItem('itemList');
    let currentItem = sessionStorage.getItem('currentItem');
    itemsList = JSON.parse(itemsList);
    currentItem = JSON.parse(currentItem);

    let title = currentItem.getTitle;
    let price = currentItem.getPrice;
    let desc = currentItem.getDesc;

    let newItem = {title, price, desc};
    console.log(newItem);
    console.log(itemsList);
    itemsList.unshift(newItem);
    console.log(itemsList);
    itemsList  = JSON.stringify(itemsList);
    localStorage.setItem('itemList',itemsList);


    Swal.fire({
        position: "center",
        icon: "success",
        title: "Add to cart Successfully !",
        showConfirmButton: true,
        timer: 3500
      });
}