// Function to change shoe name
function changeShoeName() {
    const shoeName = document.getElementById("shoeName");
    shoeName.textContent = "Jordan Retro High OG";
  }
  
  // Function to change banner background color
  function changeBannerColor() {
    const banner = document.getElementById("featured");
    banner.style.backgroundColor = "#cce7ff";
  }
  
  // Function to add a new shoe card
  function addShoeCard() {
    const shoeContainer = document.getElementById("shoeContainer");
    const newCard = document.createElement("div");
    newCard.className = "shoe-card";
    newCard.textContent = "New Balance 550";
    shoeContainer.appendChild(newCard);
  }
  
  // Function to remove the last shoe card
  function removeShoeCard() {
    const shoeContainer = document.getElementById("shoeContainer");
    if (shoeContainer.lastElementChild) {
      shoeContainer.removeChild(shoeContainer.lastElementChild);
    }
  }
  