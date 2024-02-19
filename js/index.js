const menuBtn = document.querySelector(".menu_btn");
const navbar = document.querySelector(".main_nav");
const closeBtn = document.querySelector(".menu_close_btn");
menuBtn.addEventListener("click", () => {
  navbar.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
});
