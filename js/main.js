let getDate = prompt("Enter date like this:\n 2005-05-05\n YYYY-MM-DD");
let didline = getDate ? getDate : "2024-11-12";
function calcDate(endTime) {
  let gapDate = new Date(endTime) - new Date(),
    days = Math.trunc(gapDate / (1000 * 60 * 60 * 24)),
    hours = Math.trunc((gapDate / (1000 * 60 * 60)) % 24),
    minutes = Math.trunc((gapDate / (1000 * 60)) % 60),
    seconds = Math.trunc((gapDate / 1000) % 60);
  if (gapDate < 0) {
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
  }
  return { gapDate, days, hours, minutes, seconds };
}

function outputGapDate(endTime) {
  const days = document.querySelector(".days"),
    hours = document.querySelector(".hours"),
    minutes = document.querySelector(".minutes"),
    seconds = document.querySelector(".seconds");
  const engine = setInterval(setDate, 1000);
  function setDate() {
    const gapDate = calcDate(endTime);
    days.innerText = validNum(gapDate.days);
    hours.innerText = validNum(gapDate.hours);
    minutes.innerText = validNum(gapDate.minutes);
    seconds.innerText = validNum(gapDate.seconds);
  }
  setDate();
}

function validNum(num) {
  if (num >= 0 && num <= 9) {
    return "0" + num;
  }
  return num;
}

outputGapDate(didline);
