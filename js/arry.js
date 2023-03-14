const arryMalumot = [
  {
    id: 1,
    name: "Individual yondashuv",
    images: "/images/Vector.svg",
    malumot:
      "Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz",
  },
  {
    id: 2,
      name: "Ekspertiza",
      images: "/images/Vector2.svg",
    malumot:
      "Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz",
  },
  {
    id: 3,
      name: "Professional xizmat",
    images:"/images/Vector3.svg",
    malumot:
      "Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz",
  },
];
 
const nmadir = document.querySelector(".nimadir");

window.addEventListener("DOMContentLoaded", function () {
  let pushWeb = arryMalumot.map(function (item) {
      return `
    
    
      `;
  });
  pushWeb = pushWeb.join("");
  nmadir.innerHTML = pushWeb;
});