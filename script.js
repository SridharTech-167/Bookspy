var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");

function add() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
}

function closepopup() {
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
}

// container
var itemscontainer = document.querySelector(".container");

var booktitle = document.getElementById("book-title");
var bookauthor = document.getElementById("book-author");
var bookdescription = document.getElementById("book-description");

// ADD BOOK
function enrollbook() {

    // ✅ BASIC INPUT VALIDATION (IMPORTANT FIX)
    if (
        booktitle.value.trim() === "" ||
        bookauthor.value.trim() === "" ||
        bookdescription.value.trim() === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    var div = document.createElement("div");
    div.setAttribute("class", "bookcontainer");

    div.innerHTML = `
        <h2>${booktitle.value}</h2>
        <h5>${bookauthor.value}</h5>
        <p>${bookdescription.value}</p>
        <button onclick='deletebook(event)'>Delete</button>
    `;

    itemscontainer.append(div);

    // clear inputs
    booktitle.value = "";
    bookauthor.value = "";
    bookdescription.value = "";

    closepopup();
}

// DELETE BOOK
function deletebook(event) {
    event.target.parentElement.remove();
}
