function slider({ container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field }) {
  // Slider

  //Мой код

  const prevSlide = document.querySelector(prevArrow);
  const nextSlide = document.querySelector(nextArrow);
  const currentIndex = document.querySelector(currentCounter);
  const totalIndex = document.querySelector(totalCounter);
  const slides = document.querySelectorAll(slide);
  const slidesWrapper = document.querySelector(wrapper);
  const slidesField = document.querySelector(field);
  const width = window.getComputedStyle(slidesWrapper).width;
  const sliderParent = document.querySelector(container);

  let slideIndex = 1;
  let offset = 0;

  if (slides.length < 10) {
    totalIndex.textContent = `0${slides.length}`;
    currentIndex.textContent = `0${slideIndex}`;
  } else {
    totalIndex.textContent = slides.length;
    currentIndex.textContent = slideIndex;
  }

  sliderParent.style.position = "relative";

  const indicators = document.createElement("ol");
  const dots = [];
  indicators.classList.add("carousel-indicators");
  sliderParent.append(indicators);

  slides.forEach((item, i) => {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("dot");

    if (i == 0) {
      dot.style.opacity = 1;
    }

    indicators.append(dot);

    dots.push(dot);
  });

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";

  slidesWrapper.style.overflow = "hidden";

  slides.forEach((item) => (item.style.width = width));

  function showCurrIndex(arrOfSlides, index) {
    if (arrOfSlides.length < 10) {
      index.textContent = `0${slideIndex}`;
    } else {
      index.textContent = slideIndex;
    }
  }

  function setRegularOpacity(elements, value = 0.5) {
    elements.forEach((item) => (item.style.opacity = value));
  }

  function setActiveOpacity(elements, value = 1) {
    elements[slideIndex - 1].style.opacity = value;
  }

  function transformStrInNumber(str) {
    return +str.replace(/\D/g, "");
  }

  nextSlide.addEventListener("click", () => {
    if (offset == transformStrInNumber(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += transformStrInNumber(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    showCurrIndex(slides, currentIndex);
    setRegularOpacity(dots);
    setActiveOpacity(dots);
  });

  prevSlide.addEventListener("click", () => {
    if (offset == 0) {
      offset = transformStrInNumber(width) * (slides.length - 1);
    } else {
      offset -= transformStrInNumber(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    showCurrIndex(slides, currentIndex);
    setRegularOpacity(dots);
    setActiveOpacity(dots);
  });

  dots.forEach((item) => {
    item.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");

      slideIndex = slideTo;
      offset = transformStrInNumber(width) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;

      showCurrIndex(slides, currentIndex);
      setRegularOpacity(dots);
      setActiveOpacity(dots);
    });
  });

  // showSlider(slideIndex);

  // if (slides.length < 10) {
  //   totalIndex.textContent = `0${slides.length}`;
  // } else {
  //   totalIndex.textContent = slides.length;
  // }

  // function showSlider(index) {
  //   if (index < 1) {
  //     slideIndex = slides.length;
  //   } else if (index > slides.length) {
  //     slideIndex = 1;
  //   }

  //   slides.forEach((item) => {
  //     item.classList.remove("show");
  //     item.classList.add("hide");
  //   });

  //   slides[slideIndex - 1].classList.remove("hide");
  //   slides[slideIndex - 1].classList.add("show");

  //   if (slideIndex >= 1 && slideIndex < 10) {
  //     currentIndex.textContent = `0${slideIndex}`;
  //   } else {
  //     currentIndex.textContent = slideIndex;
  //   }
  // }

  // nextSlide.addEventListener("click", () => {
  //   showSlider(++slideIndex);
  // });

  // prevSlide.addEventListener("click", () => {
  //   showSlider(--slideIndex);
  // });

  // Код из урока

  // let slideIndex = 1;

  // showSlides(slideIndex);

  // if (slides.length < 10) {
  //   totalIndex.textContent = `0${slides.length}`;
  // } else {
  //   totalIndex.textContent = slides.length;
  // }

  // function showSlides(index) {
  //   if (index > slides.length) {
  //     slideIndex = 1;
  //   } else if (index < 1) {
  //     slideIndex = slides.length;
  //   }

  //   slides.forEach((item) => {
  //     item.classList.add("hide");
  //     item.classList.remove("show");
  //   });

  //   slides[slideIndex - 1].classList.add("show");
  //   slides[slideIndex - 1].classList.remove("hide");

  //   if (slideIndex < 10) {
  //     currentIndex.textContent = `0${slideIndex}`;
  //   } else {
  //     currentIndex.textContent = slideIndex;
  //   }
  // }

  // function changeSlideIndex(index) {
  //   showSlides((slideIndex += index));
  // }

  // prevSlide.addEventListener("click", () => {
  //   changeSlideIndex(-1);
  // });

  // nextSlide.addEventListener("click", () => {
  //   changeSlideIndex(1);
  // });
}

export default slider;
