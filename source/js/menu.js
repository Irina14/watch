const menu = () => {
  const menuSite = document.querySelector(`.menu-site`);
  const menuButton = menuSite.querySelector(`.menu-site__toggle`);

  menuButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    menuSite.classList.toggle(`menu-site--open`);
  });
};

export default menu;
