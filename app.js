const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2022, 9, 24, 11, 30, 0);

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const date = futureDate.getDate();

let month = futureDate.getMonth();
month = months[month];

const weekday = weekdays[futureDate.getDay()];

giveaway.innerHTML = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hour}:${minute}am`;

//future time in ms

const futureTime = futureDate.getTime();
// console.log(futureTime);

const getRemainingTime = () => {
const today = new Date().getTime();
const t = futureTime - today;
// 1s = 1000ms
// 1m = 60s
// 1h = 60m
// 1d = 24h

// values in ms
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinut = 60 * 1000;
let days = t / oneDay;
days = Math.floor(days);
let hours = Math.floor((t % oneDay) / oneHour);
let minutes = Math.floor((t % oneHour) / oneMinut);
let seconds = Math.floor((t % oneMinut) / 1000);
// set values array
const values = [days, hours, minutes, seconds];

const format = (item) => {
if(item < 10) {
  return item = `0${item}`
}
return item
};

items.forEach((item, index) => {
  item.innerHTML = format(values[index]);
});
if(t < 0) {
  clearInterval(countdown)
  deadline.innerHTML = `<h4 class="expired">sorry this giveaway has expired</h4>`
}
};

// countdown
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime();