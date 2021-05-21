const burger = document.querySelector(".burger");
if (burger) {
  const nav = document.querySelector(".nav");
  burger.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    burger.classList.toggle("_active");
    nav.classList.toggle("_active");
  });
}
