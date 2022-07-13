let nextBtn = document.querySelector(".txt__right");
let prevBtn = document.querySelector(".txt__left");
let txtEl = document.querySelector(".txt__text");
let imgEl = document.querySelector(".brand__img");
let txt = [
  "Brand naming &guidelines",
  "Design a new brands",
  "Keeping the brand design unique",
];
let imgs = ["1", "2", "3"];
let index = 1;
nextBtn.addEventListener("click", () => {
  txtEl.textContent = txt[index];
  imgEl.setAttribute("src", `imgs/brand_${index}.jpg`);
  console.log(imgEl);
  index++;
  if (index == txt.length) index = 0;
});
prevBtn.addEventListener("click", () => {
  txtEl.textContent = txt[index];
  imgEl.setAttribute("src", `imgs/brand_${index}.jpg`);
  index++;
  if (index == txt.length) index = 0;
});
