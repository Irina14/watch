const mailing = () => {
  const mailingForm = document.querySelector(`.mailing__form`);

  if (mailingForm) {
    const mailingButton = mailingForm.querySelector(`.mailing__button`);

    // Создание сообщения
    const createMessage = (text) => {
      const mailingMessage = mailingForm.querySelector(`.mailing__message`);
      mailingMessage.innerHTML = text;
    };

    // Валидация формы
    const validationForm = () => {
      const mailingInput = mailingForm.querySelector(`.mailing__email`);

      if (mailingInput.validity.valueMissing) {
        mailingForm.classList.add(`mailing__form--invalid`);
        createMessage(`Заполните это поле`);
      }

      if (mailingInput.validity.typeMismatch) {
        mailingForm.classList.add(`mailing__form--invalid`);
        createMessage(`Некорректный email`);
      }

      if (mailingInput.validity.valid) {
        mailingForm.classList.remove(`mailing__form--invalid`);
        upload(new FormData(mailingForm));
        mailingButton.disabled = true; // заблокировать кнопку отправки
      }
    };

    // Отправка формы с помощью AJAX JS
    const upload = (data) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = `json`;
      xhr.addEventListener(`load`, () => {
        if (xhr.status === 200) {
          mailingForm.reset(); // сбросить данные формы
          mailingForm.classList.add(`mailing__form--send`);
          createMessage(`Email успешно отправлен`);
          mailingButton.disabled = false; // разблокировать кнопку отправки
        } else {
          mailingForm.classList.add(`mailing__form--send`);
          createMessage(`Ошибка: ${xhr.status} ${xhr.statusText}`);
          mailingButton.disabled = false; // разблокировать кнопку отправки
        }
      });
      xhr.open(`POST`, `http://imbeloze.ru/mailing.php`);
      xhr.send(data);
    };

    // // Отправка формы с помощью AJAX JQuery
    // const dataForm = $(`.mailing__form`).serialize(); // Собираем все данные из формы
    // $.ajax({
    //   type: `POST`, // Метод отправки
    //   url: `http://imbeloze.ru/mailing.php`, // Путь до php файла отправителя
    //   data: dataForm,
    //   success() {
    //     console.log(`Отправлено`);
    //   }
    // });

    mailingButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      validationForm();
    });
  }
};

export default mailing;
