let items = document.querySelectorAll('.service_heading');
items.forEach((item) => {
    item.addEventListener("click", () => {
        let item_title = item.getAttribute('get-data');
        Swal.fire({
            position: "center",
            icon: "info",
            title: item_title,
            showConfirmButton: false,
            timer: 3500
          });
    })
})