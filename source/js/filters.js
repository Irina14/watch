const filters = () => {
  const filtersForm = document.querySelector(`.filters__form`);

  if (filtersForm) {
    const ValueSlider = {
      MIN: 1000,
      MAX: 120000,
      MIN_DEFAULT: 12000,
      MAX_DEFAULT: 90000,
      STEP: 1000
    };

    let minCost = ValueSlider.MIN_DEFAULT;
    let maxCost = ValueSlider.MAX_DEFAULT;

    // Функция для создания ползунка JQRangeSlider
    const createRangeSlider = () => {
      $(`.filters__slider`).rangeSlider({
        bounds: {min: ValueSlider.MIN, max: ValueSlider.MAX},
        arrows: false,
        defaultValues: {min: ValueSlider.MIN_DEFAULT, max: ValueSlider.MAX_DEFAULT},
        step: ValueSlider.STEP,
        formatter: (val) => { // добавляет знак рубля
          return `${val} \u20BD`;
        }
      });
    };

    // Открытие и закрытие полей фильтра
    const filtersFieldsets = filtersForm.querySelectorAll(`.filters__fieldset`);

    Array.from(filtersFieldsets).forEach((fieldset) => {
      const filtersButton = fieldset.querySelector(`.filters__button`);
      filtersButton.addEventListener(`click`, () => {
        fieldset.classList.toggle(`filters__fieldset--open`);

        if (fieldset.classList.contains(`filters__fieldset--cost`) && fieldset.classList.contains(`filters__fieldset--open`)) {
          createRangeSlider();
          // Событие изменения слайдера и получение значений
          $(`.filters__slider`).bind(`valuesChanged`, function (e, data) {
            minCost = data.values.min;
            maxCost = data.values.max;
            sendData();
          });
        }
      });
    });

    // Установка обработчика событий при каждом изменении значений input в форме
    const inputs = filtersForm.querySelectorAll(`input[type="checkbox"]`);

    Array.from(inputs).forEach((input) => {
      input.addEventListener(`change`, () => {
        sendData();
      });
    });

    // Сброс значений стоимости до дефолтных при нажатии на кнопку "Сбросить фильтр"
    $(`.filters__button-reset`).on(`click`, function () {
      $(`.filters__slider`).rangeSlider(`values`, ValueSlider.MIN_DEFAULT, ValueSlider.MAX_DEFAULT);
    });

    // Функция для отправки данных фильтра на сервер JQuery
    const sendData = () => {
      let dataForm = $(`.filters__form`).serialize();
      const dataFilters = `minCost=${minCost}&maxCost=${maxCost}&${dataForm}`;
      console.log(dataFilters);
      $.ajax({
        url: `http://imbeloze.ru/filters.php`,
        data: dataFilters,
        type: `GET`,
        cache: false,
        dataType: `json`,
        error() {
          console.log(`Ошибка`);
        },
        success() {
          console.log(`Отправлено`);
        }
      });
    };
  }
};

export default filters;
