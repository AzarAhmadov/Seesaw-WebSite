const openList = document.querySelector('.mobil-menu');
const openMenu = document.querySelector('.open-men').addEventListener('click', () => {
  openList.classList.toggle('active');
});

var numberOfDays = 3;
var today = new Date();
var start = getNextStartDate(today);
var end = getNextEndDate(today);

var timer = setInterval(function() {
  var differenceTime, dd, hh, mm, ss, str;
  var now = new Date();
  if (now >= end) {
    start = getNextStartDate(now);
    end = getNextEndDate(now);
  } else {
    differenceTime = end - now;

    dd = parseInt(differenceTime / (1000 * 60 * 60 * 24));
    hh = parseInt(differenceTime / (60 * 60 * 1000)) % 24;
    mm = parseInt(differenceTime / (1000 * 60)) % 60;

    document.querySelector('.day').innerHTML = format(dd);
    document.querySelector('.hours').innerHTML = format(hh);
    document.querySelector('.min').innerHTML = format(mm);

  }
}, 1000);

function getNextEndDate(fromDate) {
  return new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate() + numberOfDays);
}

function getNextStartDate(currentDate) {
  var currentDay = currentDate.getDate();
  var index = Math.ceil(currentDay / 3);
  var nextStartDay = 1 + numberOfDays * index
  return new Date(currentDate.getFullYear(), currentDate.getMonth(), nextStartDay);
}

function format(num) {
  return (9 < num) ? num : "0" + num;
}

var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




