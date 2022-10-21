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

let futureDate = new Date(2022, 9, 22, 10, 30, 0);

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

const getRemainingDate = () => {
const today = new Date().getTime();
const t = futureTime - today;
console.log(t);
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
console.log(minutes);
}
getRemainingDate();