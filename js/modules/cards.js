import { getResource } from "../services/services";

function cards() {
  // Class

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.transfer = 27;
      this.parent = document.querySelector(parentSelector);
      this.classes = classes;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = Math.floor(this.price * this.transfer);
    }

    render() {
      const element = document.createElement("div");

      if (this.classes.length === 0) {
        this.class = "menu__item";
        element.classList.add(this.class);
      } else {
        this.classes.forEach((nameClasses) => {
          element.classList.add(nameClasses);
        });
      }

      element.innerHTML = `
      <img src=${this.src} alt=${this.alt} />
      <h3 class="menu__item-subtitle">${this.title}</h3>
      <div class="menu__item-descr">${this.descr}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
      </div>
    `;

      this.parent.append(element);
    }
  }

  getResource("http://localhost:3000/menu").then((data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
    });
  });

  // axios.get("http://localhost:3000/menu").then((response) => {
  //   response.data.forEach(({ img, altimg, title, descr, price }) => {
  //     new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
  //   });
  // });

  // getResource("http://localhost:3000/menu").then((data) => createCard(data));

  // function createCard(data) {
  //   data.forEach(({ img, altimg, title, descr, price }) => {
  //     const element = document.createElement("div");

  //     price = price * 27;

  //     element.classList.add("menu__item");

  //     element.innerHTML = `
  //     <img src=${img} alt=${altimg} />
  //     <h3 class="menu__item-subtitle">${title}</h3>
  //     <div class="menu__item-descr">${descr}</div>
  //     <div class="menu__item-divider"></div>
  //     <div class="menu__item-price">
  //       <div class="menu__item-cost">Цена:</div>
  //       <div class="menu__item-total"><span>${price}</span> грн/день</div>
  //     </div>
  //     `;

  //     document.querySelector(".menu .container").append(element);
  //   });
  // }

  // new MenuCard(
  //   "img/tabs/vegy.jpg",
  //   "vegy",
  //   "Меню 'Фитнес'",
  //   "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
  //   8.5,
  //   ".menu .container"
  // ).render();

  // new MenuCard(
  //   "img/tabs/elite.jpg",
  //   "elite",
  //   "Меню 'Премиум'",
  //   "В меню 'Премиум' мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
  //   20.3,
  //   ".menu .container"
  // ).render();

  // new MenuCard(
  //   "img/tabs/post.jpg",
  //   "post",
  //   "Меню 'Постное'",
  //   "Меню 'Постное' - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
  //   15.9,
  //   ".menu .container"
  // ).render(); // Старый код,где мы создавали карточки вручную, а теперь получаем эти данные от сервера
}

export default cards;
