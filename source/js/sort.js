const sort = () => {
  const sortForm = document.querySelector(`.sort`);

  if (sortForm) {
    const ENTER_KEYCODE = 13;
    const sortSelect = sortForm.querySelector(`.sort__select`);
    const sortOptions = sortForm.querySelectorAll(`.sort__option`);

    sortSelect.addEventListener(`click`, () => {
      sortForm.classList.toggle(`sort--open`);
    });

    sortSelect.addEventListener(`keydown`, (evt) => {
      if (evt.keyCode === ENTER_KEYCODE) {
        sortForm.classList.toggle(`sort--open`);
      }
    });

    const removeClass = () => {
      Array.from(sortOptions).forEach((option) => {
        option.classList.remove(`sort__option--active`);
      });
    };

    Array.from(sortOptions).forEach((option) => {
      option.addEventListener(`click`, () => {
        const linkOption = option.querySelector(`a`);
        const value = linkOption.textContent;
        sortSelect.innerHTML = value;
        sortForm.classList.remove(`sort--open`);
        removeClass();
        option.classList.add(`sort__option--active`);
      });
    });

    const documentClickHandler = (evt) => {
      if (evt.target === sortSelect) {
        return;
      }

      sortForm.classList.remove(`sort--open`);
    };

    document.addEventListener(`click`, documentClickHandler);
  }
};

export default sort;
