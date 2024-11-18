let itemLoadContainer = document.querySelector('.itemContainer');
let getItem = sessionStorage.getItem('currentItem');
getItem = JSON.parse(getItem);
console.log(getItem);
renderItemContent(getItem);
function renderItemContent(item) {
    itemLoadContainer.innerHTML = `
        <div class="row py-5">
            <div class="col-md-5">
                <h2>${item[0]}</h2>
            </div>
            <div class="col-md-7">
                <p>${item[1]}</p>
            </div>
        </div>
    `
}