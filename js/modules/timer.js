function timer(id, deadline) {
  function getTimeRemaning(endtime) {
    const totalTimeInMs = Date.parse(endtime) - Date.parse(new Date());

    let days, hours, minutes, seconds;

    if (totalTimeInMs <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(totalTimeInMs / 1000 / 60 / 60 / 24);
      hours = Math.floor((totalTimeInMs / 1000 / 60 / 60) % 24);
      minutes = Math.floor((totalTimeInMs / 1000 / 60) % 60);
      seconds = Math.floor((totalTimeInMs / 1000) % 60);
    }

    return {
      total: totalTimeInMs,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function addZero(num) {
    if (num > 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const htmlDivTimer = document.querySelector(selector);
    const htmlDays = htmlDivTimer.querySelector("#days");
    const htmlHours = htmlDivTimer.querySelector("#hours");
    const htmlMinutes = htmlDivTimer.querySelector("#minutes");
    const htmlSeconds = htmlDivTimer.querySelector("#seconds");
    const timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const resultTimeRemaning = getTimeRemaning(endtime);
      htmlDays.innerHTML = addZero(resultTimeRemaning.days);
      htmlHours.innerHTML = addZero(resultTimeRemaning.hours);
      htmlMinutes.innerHTML = addZero(resultTimeRemaning.minutes);
      htmlSeconds.innerHTML = addZero(resultTimeRemaning.seconds);

      if (resultTimeRemaning.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(id, deadline);
}

export default timer;
