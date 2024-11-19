let itemLoadContainer = document.querySelector('.itemContainer');
let getItem = sessionStorage.getItem('currentItem');
getItem = JSON.parse(getItem);
console.log(getItem);
renderItemContent(getItem);
function renderItemContent(item) {
    itemLoadContainer.innerHTML = `
        <div class="row py-5" >
            <div class="col-md-5">
                <div>
                    <h2 class="text-center py-3">${item[0]}</h2>
                    <div style="display:flex;justify-content:center;">
                        <img src="${item[3]}" class="card-img-bottom" alt="${item[1]}" style="max-width:80%;"/>
                    </div>
                </div>

            </div>
            <div class="col-md-7">
                <div class="py-3">
                    <p class="h5">${item[1]}</p>
                    <p>Price :</p>
                    <h3 class="text-danger">$${item[2]}</h3>
                </div>
            </div>
        </div>
    `
}

document.querySelector('#btnWhatsapp').addEventListener("click", () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success m-2",
          cancelButton: "btn btn-danger m-2"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You would like to connect with us",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Connect with Whatsapp",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Got it Connected Successfully!",
            text: "Your transaction is detected.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your transaction was cancelled :)",
            icon: "error"
          });
        }
      });
});

document.querySelector("#btnGmail").addEventListener("click", () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success m-2",
          cancelButton: "btn btn-danger m-2"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You would like to connect with us",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Connect with Gmail",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Got it Connected Successfully!",
            text: "Your transaction is detected.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your transaction was cancelled :)",
            icon: "error"
          });
        }
      });
});

document.querySelector("#btnLinkedIn").addEventListener("click", () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success m-2",
          cancelButton: "btn btn-danger m-2"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You would like to connect with us",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Connect with LinkedIn",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Got it Connected Successfully!",
            text: "Your transaction is detected.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your transaction was cancelled :)",
            icon: "error"
          });
        }
      });
})