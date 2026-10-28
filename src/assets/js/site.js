const button = document.querySelector(".nav-toggle");
const navigation = document.querySelector("#site-nav");

if (button && navigation) {
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    navigation.classList.toggle("is-open", !open);
  });
}
