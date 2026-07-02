var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
function add()
{
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
}

function closepopup()
{
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
}

//selecting container

var itemscontainer = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var bookdescription = document.getElementById("book-description")

function enrollbook(){
    //event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML = 
    `
    <h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick='deletebook(event)'>Delete</button>
    `
    itemscontainer.append(div)
    
    booktitle.value = ""
    bookauthor.value = ""
    bookdescription.value = ""

    closepopup()
}

//deleting book items

function deletebook(event){
    event.target.parentElement.remove();
}