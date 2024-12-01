window.addEventListener("DOMContentLoaded", () => {
    loadfunction();
});

function loadfunction() {
    let currentPurchasedItem = localStorage.getItem('itemList');
    currentPurchasedItem = JSON.parse(currentPurchasedItem);
    console.log(currentPurchasedItem);
    let tableBody = document.querySelector('#table_data');
    
    currentPurchasedItem.forEach((element,index) => {
        const template = document.querySelector(".template").content;
        let tr = template.cloneNode(true);
        tr.querySelector('.gTitle').textContent = element.title;
        //console.log(element.title);
        tr.querySelector('.gPrice').textContent = element.price;
        //console.log(element.price);
        tr.querySelector('.gDesc').textContent = element.desc;
        //console.log(element.desc);
        tr.querySelector('.gQuantity').textContent = element.quantity;
        tr.querySelector('.gTotal').textContent = element.totalPrice;
        let clickableButton = tr.querySelector('.deleteButton button');
        clickableButton.textContent = "Delete Item";
        clickableButton.addEventListener("click", () => {
            currentPurchasedItem.splice(index, 1);
            currentPurchasedItem = JSON.stringify(currentPurchasedItem);
            localStorage.setItem("itemList", currentPurchasedItem);
            window.location.reload();
            
        });

        tableBody.appendChild(tr);
    });
}