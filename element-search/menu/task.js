const links = document.querySelectorAll(".menu__link");

[...links].forEach((link) => {
  link.onclick = () => {
    const menuSub = link.closest(".menu__item").querySelector(".menu_sub");
    if (menuSub) {
      if (!menuSub.classList.contains("menu_active")) {
        const activeMenu = link
          .closest(".menu_main")
          .querySelectorAll(".menu_active");
        if (activeMenu.length > 0) {
          [...activeMenu].forEach((link) =>
            link.classList.remove("menu_active")
          );
        }
        menuSub.classList.add("menu_active");
      } else {
        menuSub.classList.remove("menu_active");
      }

      return false;
    }
  };
});
