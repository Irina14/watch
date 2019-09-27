const filters = () => {
  const filtersForm = document.querySelector(`.filters__form`);

  if (filtersForm) {
    // JQRangeSlider - ползунок
    $(`.filters__slider`).rangeSlider({
      bounds: {min: 1000, max: 120000},
      arrows: false,
      defaultValues: {min: 12000, max: 90000},
      step: 1000,
      formatter: (val) => { // добавляет знак рубля
        return `${val} \u20BD`;
      }
    });

    // Событие изменения слайдера и получение значений
    $(`.filters__slider`).bind(`valuesChanged`, function (e, data) {
      console.log(`Values just changed. min: ` + data.values.min + ` max: ` + data.values.max);
    });
  }
};

export default filters;
