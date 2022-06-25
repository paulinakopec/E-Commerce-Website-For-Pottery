let path = window.location.pathname;
let page = path.split("/").pop();

//SHOP SECTION
const shop = [
    {
      id: 1,
      title: "Pink wavy cup",
      category: "cup",
      price: 89,
      img: "./img/Wavypink.JPG",
    },
    {
      id: 2,
      title: "Indigo wavy pot",
      category: "other",
      price: 129,
      img: "./img/wavyindigo.jpg",
    },
    {
      id: 3,
      title: "Indigo tea cup",
      category: "cup",
      price: 79,
      img: "./img/straightindigo.jpg",
    },
    {
      id: 4,
      title: "Chess cup",
      category: "cup",
      price: 89,
      img: "./img/chess.jpg",
    },
    {
      id: 5,
      title: "Boho mug",
      category: "mug",
      price: 109,
      img: "./img/patterns.jpg",
    },
    {
      id: 6,
      title: "Pink mug",
      category: "mug",
      price: 99,
      img: "./img/candy.jpg",
    },
  ];  

const sectionCenter = document.querySelector(".sectionCenter");
const filterBtns = document.querySelectorAll(".filterBtn");

//Loading items on the website

window.addEventListener("DOMContentLoaded", function () {
  displayShopItems(shop)
});

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = (e.currentTarget.dataset.id);
    const shopCategory = shop.filter(function (shopItem) {
      if (shopItem.category === category) {
        return shopItem;
      }
    });
    if (category === "all") {
      displayShopItems(shop);
    }
    else {
      displayShopItems(shopCategory);
    }
  });
});

function displayShopItems(shopItems) {
  let displayShop = shopItems.map(function (item) {
    return `<article class="shopItem">
    <img src=${item.img} class="shopImg" alt=${item.title}/>
    <div class="item-info">
      <header>
        <h4 class="productName">${item.title}</h4>
        <h4 class="price">${item.price} PLN</h4>
        <button class="buyBtn">BUY</button>
      </header>
    </div>
  </article>`;    
  });
  if (page === "shop.html") {
    displayShop = displayShop.join("");
    sectionCenter.innerHTML = displayShop;
  }
};

//COUNTDOWN

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
  
const mainSubtitle = document.querySelector(".mainSubtitle");
const countdown = document.querySelector(".countdown");
const items = document.querySelectorAll(".countdown-format h4");

let futureDate = new Date(2022, 8, 22, 10, 30, 0);
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();
const day = futureDate.getDate();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];

// if (page === "index.html") {
//   mainSubtitle.textContent= `Stay tuned on ${weekday}, ${day} ${month} ${year}, at ${hour}:${minutes} a.m.`
// };

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime () {
  const today = new Date().getTime();
  const t = futureTime - today;
// 1s = 1000ms
// 1m == 60s
// 1hr == 60 min
// 1 day = 24hr

//values in ms
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

// calculating all values
let days = Math.floor(t / oneDay);
let hours = Math.floor((t % oneDay) / oneHour);
let minutes = Math.floor((t % oneHour) / oneMinute);
let seconds = Math.floor ((t % oneMinute) / 1000);

// seting values array;
const values = [days, hours, minutes, seconds];

function format(item) {
  if (item < 10) {
    return item =`0${item}`
  }
  return item
}

items.forEach(function(item, index) {
  item.innerHTML = format(values[index]);
});
if (t < 0) {
  clearInterval(countdownFunctionality);
  countdown.innerHTML = `<h4 class="expired color:"black">Sorry, this drop has expired.</h4>`
}
}
//countdown functionality on website
let countdownFunctionality = setInterval(getRemainingTime, 1000);

getRemainingTime();

// CART SIDEBAR

const cartBtn = document.querySelector(".cartBtn");
const closeBtn = document.querySelector(".closeBtn");
const cartSidebar = document.querySelector(".cartSidebar");

cartBtn.addEventListener("click", function () {
  cartSidebar.classList.toggle("show-cartSidebar");
});

closeBtn.addEventListener("click", function () {
  cartSidebar.classList.remove("show-cartSidebar");
})

// SEARCH SIDEBAR
const searchBtn = document.querySelector(".searchBtn");
const searchCloseBtn = document.querySelector(".searchCloseBtn");
const searchSidebar = document.querySelector(".searchSidebar");

searchBtn.addEventListener("click", function () {
  searchSidebar.classList.toggle("show-searchSidebar");
});

searchCloseBtn.addEventListener("click", function () {
  searchSidebar.classList.toggle("show-searchSidebar");
})

// USER SIDEBAR
const userBtn = document.querySelector(".userBtn");
const userCloseBtn = document.querySelector(".userCloseBtn");
const userSidebar = document.querySelector(".userSidebar");

userBtn.addEventListener("click", function () {
  userSidebar.classList.toggle("show-userSidebar");
});

userCloseBtn.addEventListener("click", function () {
  userSidebar.classList.toggle("show-userSidebar");
});