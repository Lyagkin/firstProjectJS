import { showModal, hideModal } from "./modal";
import { postData } from "../services/services";

function forms(modalTimerId) {
  // FORMS

  // отправка формы на сервер с XMLHttpRequest (FormData формат)

  // const forms = document.querySelectorAll("form");

  // const message = {
  //   loading: "img/form/spinner.svg",
  //   success: "Спасибо, мы свяжемся с вами позже",
  //   failure: "Что-то пошло не так, попробуйте позже",
  // };

  // forms.forEach((item) => {
  //   postData(item);
  // });

  // function postData(form) {
  //   form.addEventListener("submit", (e) => {
  //     e.preventDefault();

  //     const messageStatus = document.createElement("img");
  //     messageStatus.src = message.loading;
  //     messageStatus.style.cssText = `
  //     display: block;
  //     margin: 0 auto;
  //     `;
  //     form.insertAdjacentElement("afterend", messageStatus);

  //     const request = new XMLHttpRequest();
  //     request.open("POST", "server.php");
  //     const formData = new FormData(form);
  //     request.send(formData);

  //     request.addEventListener("load", () => {
  //       if (request.status === 200) {
  //         console.log(request.response);
  //         showThanksModal(message.success);
  //         form.reset();
  //         messageStatus.remove();
  //       } else {
  //         showThanksModal(message.failure);
  //       }
  //     });
  //   });
  // }

  // function showThanksModal(message) {
  //   const prevModalDialog = document.querySelector(".modal__dialog");
  //   prevModalDialog.classList.add("hide");

  //   showModal();

  //   const thanksModal = document.createElement("div");
  //   thanksModal.classList.add("modal__dialog");
  //   thanksModal.innerHTML = `
  //   <div class="modal__content">
  //     <div data-close class="modal__close">&times;</div>
  //     <div class="modal__title">${message}</div>
  // </div>
  //   `;
  //   document.querySelector(".modal").append(thanksModal);

  //   setTimeout(() => {
  //     thanksModal.remove();
  //     prevModalDialog.classList.add("show");
  //     prevModalDialog.classList.remove("hide");
  //     hideModal();
  //   }, 4000);
  // }

  // отправака формы на сервер с XMLHttpRequest (JSON формат)

  // const forms = document.querySelectorAll("form");

  // const message = {
  //   loading: "img/form/spinner.svg",
  //   success: "Спасибо, мы скоро с Вами свяжемся",
  //   failure: "Что-то пошло не так, попробуйте позже...",
  // };

  // forms.forEach((item) => {
  //   postData(item);
  // });

  // function postData(form) {
  //   form.addEventListener("submit", (e) => {
  //     e.preventDefault();

  //     const messageStatus = document.createElement("img");
  //     messageStatus.src = message.loading;
  //     messageStatus.style.cssText = `
  //     display: block;
  //     margin: 0 auto;
  //     `;
  //     form.insertAdjacentElement("afterend", messageStatus);

  //     const request = new XMLHttpRequest();
  //     request.open("POST", "server.php");
  //     request.setRequestHeader("Content-type", "application/json");

  //     const formData = new FormData(form);

  //     const object = {};

  //     formData.forEach((item, i) => {
  //       object[i] = item;
  //     });

  //     const json = JSON.stringify(object);

  //     request.send(json);

  //     request.addEventListener("load", () => {
  //       if (request.status === 200) {
  //         console.log(request.response);
  //         showThanksModal(message.success);
  //         form.reset();
  //         messageStatus.remove();
  //       } else {
  //         showThanksModal(message.failure);
  //       }
  //     });
  //   });
  // }

  // function showThanksModal(message) {
  //   const prevModalDialog = document.querySelector(".modal__dialog");
  //   prevModalDialog.classList.add("hide");

  //   showModal();

  //   const thanksModal = document.createElement("div");
  //   thanksModal.classList.add("modal__dialog");
  //   thanksModal.innerHTML = `
  //     <div class="modal__content">
  //       <div data-close class="modal__close">&times;</div>
  //       <div class="modal__title">${message}</div>
  //     </div>
  //   `;
  //   document.querySelector(".modal").append(thanksModal);

  //   setTimeout(() => {
  //     thanksModal.remove();
  //     prevModalDialog.classList.add("show");
  //     prevModalDialog.classList.remove("hide");
  //     hideModal();
  //   }, 4000);
  // }

  // Отправка fetch() с FormData

  // const forms = document.querySelectorAll("form");

  // const message = {
  //   loading: "img/form/spinner.svg",
  //   success: "Спасибо, мы свяжемся с вами в ближайшее время",
  //   failure: "Что-то пошло не так",
  // };

  // forms.forEach((item) => {
  //   postData(item);
  // });

  // function postData(form) {
  //   form.addEventListener("submit", (e) => {
  //     e.preventDefault();

  //     const formData = new FormData(form);

  //     const messageStatus = document.createElement("img");
  //     messageStatus.src = message.loading;
  //     messageStatus.style.cssText = `
  //     display: block;
  //     margin: 0 auto;
  //     `;
  //     form.insertAdjacentElement("afterend", messageStatus);

  //     fetch("server.php", {
  //       method: "POST",
  //       body: formData,
  //     })
  //       .then((response) => response.text())
  //       .then((response) => {
  //         console.log(response);
  //         showThanksModal(message.success);
  //         messageStatus.remove();
  //       })
  //       .catch(() => {
  //         showThanksModal(message.failure);
  //       })
  //       .finally(() => {
  //         form.reset();
  //       });
  //   });
  // }

  // отправка fetch() с JSON

  const forms = document.querySelectorAll("form");

  const message = {
    loading: "img/form/spinner.svg",
    success: "Спасибо, мы свяжемся с вами позже!",
    failure: "Что-то пошло не так. Попробуйте позже...",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const messageStatus = document.createElement("img");
      messageStatus.src = message.loading;
      messageStatus.style.cssText = `
      display: block;
      margin: 0 auto;
      `;
      form.insertAdjacentElement("afterend", messageStatus);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      // const object = {};
      // formData.forEach((item, i) => {
      //   object[i] = item;
      // }); // Изначальный код, сейчас изменим его с учетом новых методов

      postData("http://localhost:3000/requests", json)
        .then(() => {
          showThanksModal(message.success);
          messageStatus.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");
    prevModalDialog.classList.add("hide");

    showModal(".modal", modalTimerId);

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div data-close class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
      </div>
    `;
    document.querySelector(".modal").append(thanksModal);

    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      hideModal(".modal");
    }, 4000);
  }
}

export default forms;
