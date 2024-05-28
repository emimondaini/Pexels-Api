

const row = document.getElementById("row");
row.innerHTML = "";

const apiKey = "3C1KdpeTnEsN0LCNJhUi3JtPJSSZ2YQGZww8N2OF7LZwtsokpwnEqVWf";

const options = {
    method: "GET",
    headers: {
        Authorization: "3C1KdpeTnEsN0LCNJhUi3JtPJSSZ2YQGZww8N2OF7LZwtsokpwnEqVWf",
        "Content-Type": "application/json",
    },
};

let loadImages = document.getElementById("load-images");
let secondaryImages = document.getElementById("secondary-images");

const functionLoadImages = async () => {
    row.innerHTML = "";
    const url = `https://api.pexels.com/v1/search?query=clouds`;
    const response = await fetch(url, options);
    const data = await response.json();
    for (let i = 0; i < data.photos.length; i++) {
        console.log(data.photos[i]);
        creaCard(data.photos[i]);
    }
}

const functionSecondaryImages = async () => {
    const url = `https://api.pexels.com/v1/search?query=rain`;
    const response = await fetch(url, options);
    const data = await response.json();
    for (let i = 0; i < data.photos.length; i++) {
        console.log(data.photos[i]);
        creaCard(data.photos[i]);
    }
}

loadImages.addEventListener("click", functionLoadImages);
secondaryImages.addEventListener("click", functionSecondaryImages);
buttonHide.addEventListener("click", hideCard);

function creaCard(photoData) {
    const col = document.createElement("div");
    col.classList.add("col-md-4");
    row.appendChild(col);
    const card = document.createElement("div");
    card.classList.add("card", "mb-4", "shadow-sm");
    col.appendChild(card);
    const img = document.createElement("img");
    img.classList.add("card-img-top", "bd-placeholder-img");
    card.appendChild(img);
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("d-flex", "justify-content-between", "align-items-center");
    cardBody.appendChild(buttonContainer);
    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group");
    buttonContainer.appendChild(btnGroup);
    const buttonView = document.createElement("button");
    buttonView.classList.add("btn", "btn-sm", "btn-outline-secondary");
    btnGroup.appendChild(buttonView);
    buttonView.innerText = "View";
    const buttonHide = document.createElement("button");
    buttonHide.classList.add("btn", "btn-sm", "btn-outline-secondary");
    btnGroup.appendChild(buttonHide);
    buttonHide.innerText = "Hide";
    const small = document.createElement("small");
    small.classList.add("text-muted");
    btnGroup.appendChild(small);
    const cardUl = document.createElement("ul");
    cardUl.classList.add("list-group", "list-group-flush");
    card.appendChild(cardUl);
    const cardBody2 = document.createElement("div");
    cardBody2.classList.add("card-body");
    card.appendChild(cardBody2);

    img.src = photoData.src.landscape;
    small.innerText = photoData.id;

    buttonHide.addEventListener("click", () => {
        const col = buttonHide.closest(".col-md-4");
        col.style.display = "none";
    });

}