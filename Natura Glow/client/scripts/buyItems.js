function addtoCart(item) {
    let getItems = document.querySelectorAll('.get_item_content');
    getItems.forEach(element => {
        let getTitle = element.getAttribute('get-title');
        let getPrice = element.getAttribute('get-price');
        let getDesc = element.getAttribute('get-desc');
        let getImg = element.getAttribute('get-img');

        if(item == getTitle) {
            let itemObject = {getTitle,getPrice,getDesc,getImg};
            console.log(itemObject);
            itemObject = JSON.stringify(itemObject);
            console.log(itemObject);
            sessionStorage.setItem('currentItem',itemObject);
            window.location.replace('buyitems.html');
        }
    })
}



