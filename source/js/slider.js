const slider = () => {
  $(document).ready(function () {
    const sliderCounter = document.querySelector(`.advantages__slider-counter`);

    $(`.advantages__slider`).slick();

    $(`.advantages__slider`).on(`afterChange`, function (slick) {
      let currentSlide = $(`.advantages__slider`).slick(`slickCurrentSlide`) + 1;

      if (currentSlide < 10) {
        currentSlide = `0` + currentSlide;
      }

      sliderCounter.innerHTML = currentSlide;
    });
  });
};

export default slider;
