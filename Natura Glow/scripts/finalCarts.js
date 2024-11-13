window.addEventListener("DOMContentLoaded", () => {
    let currentPurchasedItem = localStorage.getItem('itemList');
    currentPurchasedItem = JSON.parse(currentPurchasedItem);
    //console.log(currentPurchasedItem);
    let tableBody = document.querySelector('#table_data');
    
    currentPurchasedItem.forEach((element) => {
        const template = document.querySelector(".template").content;
        let tr = template.cloneNode(true);
        tr.querySelector('.gTitle').textContent = element.gTitle;
        console.log(element.gTitle);
        tr.querySelector('.gPrice').textContent = element.gPrice;
        console.log(element.gPrice);
        tr.querySelector('.gDesc').textContent = element.gDesc;
        console.log(element.gDesc);
        let clickableButton = tr.querySelector('.deleteButton button');
        clickableButton.textContent = "Delete Item";
        clickableButton.addEventListener("click", () => {
            console.log(element.gTitle);
        })

        tableBody.appendChild(tr);
    });
})