const slider = () => {
  const sliderAdvantages = document.querySelector(`.advantages__slider`);

  if (sliderAdvantages) {
    $(document).ready(function () {
      $(`.advantages__slider`).slick(); // запуск слайдера Slick JQuery

      // создание нового элемента - счетчика слайдера
      const counter = document.createElement(`div`);
      counter.classList.add(`advantages__slider-counter`);
      counter.textContent = `01`;
      sliderAdvantages.appendChild(counter);

      // Событие после смены слайда Slick JQuery
      $(`.advantages__slider`).on(`afterChange`, function (slick) {
        // Метод определения текущего слайда Slick JQuery
        let currentSlide = $(`.advantages__slider`).slick(`slickCurrentSlide`) + 1;

        if (currentSlide < 10) {
          currentSlide = `0` + currentSlide;
        }

        counter.textContent = currentSlide;
      });
    });
  }
};

export default slider;
