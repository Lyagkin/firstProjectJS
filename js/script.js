"use strict";
require("es6-promise").polyfill();
import "nodelist-foreach-polyfill";

import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import forms from "./modules/forms";
import cards from "./modules/cards";
import slider from "./modules/slider";
import calculator from "./modules/calculator";
import { showModal } from "./modules/modal";

document.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(() => showModal(".modal", modalTimerId), 150000);

  tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
  modal("[data-modal]", ".modal", modalTimerId);
  timer(".timer", "Jule 31 2022");
  forms(modalTimerId);
  cards();
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
  calculator();
});
