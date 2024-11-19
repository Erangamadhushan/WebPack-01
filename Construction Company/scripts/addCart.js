function setItems(topic,desc,price,img) {
    item = [topic, desc, price, img];
    item = JSON.stringify(item);
    sessionStorage.setItem("currentItem",item);
    window.location.replace('./explorerTransaction.html');
}