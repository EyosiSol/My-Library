const openModal = document.querySelector(".add");
const submit = document.querySelector("#submit");
const modal = document.querySelector("#modal");

const remove = document.querySelector(".remove")


openModal.addEventListener("click", () => {
  modal.showModal();
});


function submitForm() {
  const form = document.getElementById("bookform");

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;

  const bookcard = document.createElement("div")
  bookcard.classList.add('temp1')

  bookcard.innerHTML = `
    <div class="title">${title}</div> 
    <div class="author">${author}</div>
    <div class="page">${pages}</div>
    <div class="read-remove">
        <button class="read">Have Read</button>
        <button class="remove">Remove</button>
    </div>
    `;

    const container =document.querySelector(".grid-container")

    container.appendChild(bookcard);

    form.reset();

    modal.close()
    
}
