const arryMalumot12 = [
  {
    id: 1,
    name: "UYMAKON mobil ilovasi",
    images: "/images/phone1.png",
    category: "MobilIlova",
  },
  {
    id: 2,
    name: "UYMAKON mobil ilovasi",
    images: "/images/diagram2.png",
    category: "VebSayt",
  },
  {
    id: 3,
    name: "UYMAKON mobil ilovasi",
    images: "/images/phone3.png",
    category: "SMM",
  },
  {
    id: 4,
    name: "UYMAKON mobil ilovasi",
    images: "/images/girl4.png",
    category: "MobilIlova",
  },
  {
    id: 5,
    name: "UYMAKON mobil ilovasi",
    images: "/images/diagram5.png",
    category: "VebSayt",
  },
  {
    id: 6,
    name: "UYMAKON mobil ilovasi",
    images: "/images/phone6.png",
    category: "SMM",
  },
  {
    id: 7,
    name: "UYMAKON mobil ilovasi",
    images: "/images/phone6.png",
    category: "MobilIlova",
  },
  {
    id: 8,
    name: "UYMAKON mobil ilovasi",
    images: "/images/diagram5.png",
    category: "VebSayt",
  },
  {
    id: 9,
    name: "UYMAKON mobil ilovasi",
    images: "/images/girl4.png",
    category: "SMM",
  },
  {
    id: 10,
    name: "UYMAKON mobil ilovasi",
    images: "/images/girl4.png",
    category: "MobilIlova",
  },
  {
    id: 11,
    name: "UYMAKON mobil ilovasi",
    images: "/images/phone6.png",
    category: "VebSayt",
  },
  {
    id: 12,
    name: "UYMAKON mobil ilovasi",
    images: "/images/diagram5.png",
    category: "SMM",
  },
];
const ProjectList = document.querySelector(".projects__list");
const AllitemBtn = document.querySelector(".nav-item-btnAll");
const VebSayt = document.querySelector(".nav-item-btn1");
const VebDizayn = document.querySelector(".nav-item-btn2");
const SMM = document.querySelector(".nav-item-btn3");
const MobileIlova = document.querySelector(".nav-item-btn4");
window.addEventListener("DOMContentLoaded", function () {
  let pushWeb = arryMalumot12.map(function (item) {
    return `
     <li class="projects__item">
                <img src="${item.images}" alt="">
                <a href="" class="projects__link">${item.name}</a>
              </li>
    
      `;
  });
  pushWeb = pushWeb.join("");
  ProjectList.innerHTML = pushWeb;
});
AllitemBtn.addEventListener("click", function () {
  let pushWeb = arryMalumot12.map(function (item) {
    return `
    <li class="projects__item">
                <img src="${item.images}" alt="">
                <a href="" class="projects__link">${item.name}</a>
              </li>`;
  });
  pushWeb = pushWeb.join("");
  ProjectList.innerHTML = pushWeb;
});
VebSayt.addEventListener("click", function () {
  let pushWeb = arryMalumot12.map(function (item) {
    if (item.category === "VebSayt") {
      return `
    <li class="projects__item">
                <img src="${item.images}" alt="">
                <a href="" class="projects__link">${item.name}</a>
              </li>`;
    }
  });
  pushWeb = pushWeb.join("");
  ProjectList.innerHTML = pushWeb;
});

VebDizayn.addEventListener("click", function () {
  let pushWeb = arryMalumot12.map(function (item) {
    if (item.category === "VebSayt") {
      return `
    <li class="projects__item">
                <img src="${item.images}" alt="">
                <a href="" class="projects__link">${item.name}</a>
              </li>`;
    }
  });
  pushWeb = pushWeb.join("");
  ProjectList.innerHTML = pushWeb;
});

SMM.addEventListener("click", function () {
  let pushWeb = arryMalumot12.map(function (item) {
    if (item.category === "SMM") {
      return `
    <li class="projects__item">
                <img src="${item.images}" alt="">
                <a href="" class="projects__link">${item.name}</a>
              </li>`;
    }
  });
  pushWeb = pushWeb.join("");
  ProjectList.innerHTML = pushWeb;
});

MobileIlova.addEventListener("click", function () {
  let pushWeb = arryMalumot12.map(function (item) {
    if (item.category === "MobilIlova") {
      return `
    <li class="projects__item">
                <img src="${item.images}" alt="">
                <a href="" class="projects__link">${item.name}</a>
              </li>`;
    }
  });
  pushWeb = pushWeb.join("");
  ProjectList.innerHTML = pushWeb;
});
