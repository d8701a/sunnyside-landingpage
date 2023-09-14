const hamburgerBtn = document.querySelector("#hamburger__icon");

const hamburgerMenu = document.querySelector(".bubble");


hamburgerBtn.addEventListener("click", () => {
       hamburgerMenu.classList.toggle("hidden");
    return
})

document.addEventListener("click", function(e) {
  if (!hamburgerBtn.contains(e.target) && !hamburgerMenu.contains(e.target)) {
  hamburgerMenu.classList.add("hidden");
}});