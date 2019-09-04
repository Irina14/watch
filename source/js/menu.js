const menu = () => {
  const ESC_KEYCODE = 27;
  const menuSite = document.querySelector(`.menu-site`);
  const menuButton = document.querySelector(`.header__toggle`);

  const documentClickHandler = (evt) => {
    if (evt.target !== menuButton) {
      menuSite.classList.remove(`menu-site--open`);
      menuButton.classList.remove(`header__toggle--open`);
    }
  };

  const documentEscKeyHandler = (evt) => {
    if (evt.keyCode === ESC_KEYCODE) {
      menuSite.classList.remove(`menu-site--open`);
      menuButton.classList.remove(`header__toggle--open`);
    }
  };

  menuButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    menuSite.classList.toggle(`menu-site--open`);
    menuButton.classList.toggle(`header__toggle--open`);

    if (menuSite.classList.contains(`menu-site--open`)) {
      document.addEventListener(`click`, documentClickHandler);
      document.addEventListener(`keydown`, documentEscKeyHandler);
    } else {
      document.removeEventListener(`click`, documentClickHandler);
      document.removeEventListener(`keydown`, documentEscKeyHandler);
    }
  });
};

export default menu;
