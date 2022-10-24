const addProductBtn = document.getElementById("product__add__btn");
const currentBalance = document.getElementById("current__balance");
const addBalanceModal = () => {
  return `
      <div class="modal">
          <h1>Add Starting Balance Amount</h1>
          <div>
          <input type="number" id="add__balance" required />
          <button id="addModalBalance">Add Balance</button>
          </div>
      </div>
      `;
};
// RENDERS MODAL ON PAGE LOAD
document.body.innerHTML += addBalanceModal();
// ADDS MODAL ENTERED BALANCE TO CURRENT BALANCE
document.getElementById("addModalBalance").addEventListener("click", () => {
  const currentBalance = document.getElementById("add__balance").value;
  if (!currentBalance <= 0) {
    document.querySelector(".modal").style.display = "none";
    document.getElementById("current__balance").textContent = currentBalance;
  }
});

const renderNewListItem = () => {
  // GRABS VALUES
  let productPrice = document.querySelector(".product__price").value;
  let productName = document.querySelector(".product__name");
  let myPrice = document.getElementById("current__balance").textContent;
  //   RENDERS ONLY IF USER'S CURRENT PRICE IS MORE THEN ZERO
  if (Number(myPrice) > 0) {
    let newPrice = eval(myPrice - productPrice);
    document.getElementById("current__balance").textContent = newPrice;
    return `<li id="${productName.value}">${productName.value}<span style="font-weight: bold;">$${productPrice}</span><button id="rem__product">
      <i class="fa-solid fa-trash"></i>
    </button>
  </li>`;
  } else alert("Error! Cannot Add");
};
// FOR BUTTON TO ADD LIST ITEM
document.getElementById("product__add__btn").addEventListener("click", () => {
  document.getElementById("current__purchases").innerHTML +=
    renderNewListItem();
  // DELETE CLICKED PRODUCT
  document.querySelectorAll("#rem__product").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.path[2].remove();
    });
  });
  //   RESET INPUT VALUES AFTER THEY ARE RENDERED
  document.querySelector(".product__name").value = "";
  document.querySelector(".product__price").value = "";
});
