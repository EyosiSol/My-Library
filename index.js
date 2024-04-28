const openModal = document.querySelector(".add");
const submit = document.querySelector("#submit");
const modal = document.querySelector("#modal");

const form = document.querySelector("#book-form");
const booksGrid = document.querySelector(".grid-container");

openModal.addEventListener("click", () => {
  modal.showModal();
});

form.addEventListener("submit", () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const page = document.getElementById("pages").value;

  const newBookCard = document.createElement("div");

  newBookCard.classList.add(".grid-container>div");
  newBookCard.innerHTML = `
    <div class="temp1">
        <div class="title">${title}</div> 
        <div class="author">${author}</div>
        <div class="page">${page}</div>

        <div class="read-remove">
        <button class="read">Have Read</button>
        <button class="remove">Remove</button>
    </div>
    </div>
    `;

  booksGrid.appendChild(newBookCard);
  form.reset();

  const modal = document.querySelector("#modal");
  modal.close();
});
