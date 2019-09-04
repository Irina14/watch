const menu = () => {
  const menuSite = document.querySelector(`.menu-site`);
  const menuButton = document.querySelector(`.header__toggle`);

  menuButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    menuSite.classList.toggle(`menu-site--open`);
    menuButton.classList.toggle(`header__toggle--open`);
  });
};

export default menu;
