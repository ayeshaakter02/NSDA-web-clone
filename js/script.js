const btn = document.getElementById("toggleBtn");
const moreMenu = document.getElementById("moreMenu");

btn.addEventListener("click", () => {
  moreMenu.classList.toggle("d-none");
  btn.classList.toggle("active-btn");

  if (moreMenu.classList.contains("d-none")) {
    btn.innerHTML = '<i class="fa-solid fa-bars"></i> আরও';
  } else {
    btn.innerHTML = '<i class="fa-solid fa-angle-up"></i> সংক্ষিপ্ত';
  }
});