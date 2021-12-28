const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const menuIcon = document.getElementById("menu-icon");
const navUL = document.getElementById("nav-ul");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    target.classList.add("active");
  });
});
menuIcon.addEventListener("click", () => {
  navUL.classList.toggle("show");
});
