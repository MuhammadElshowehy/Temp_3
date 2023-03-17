let otherLinks = document.querySelector("nav .nav-links li:nth-child(4)");
let megaMenu = document.querySelector(".mega-menu");
otherLinks.onclick = function () {
  megaMenu.style.opacity = 1;
  megaMenu.style.zIndex = 2;
  megaMenu.style.top = "calc(100% + 1px)";
  setTimeout(() => {
    megaMenu.style.opacity = 0;
    megaMenu.style.zIndex = -1;
  }, 5000);
}
