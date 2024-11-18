function setItems(topic,desc) {
    item = [topic, desc];
    item = JSON.stringify(item);
    sessionStorage.setItem("currentItem",item);
    window.location.replace('./explorerTransaction.html');
}