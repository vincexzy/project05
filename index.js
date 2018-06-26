// 阻止a标签事件的默认行为
const a = document.querySelectorAll("a");
console.log(a);
for (var i = 0; i < a.length; i++) {
  a[i].addEventListener("click",function (event) {
    event.preventDefault();
  });
}

// 点击a标签时 为ul绑定class=“open”
const adom = document.querySelector("nav > a");
const uldom = document.querySelector("nav > ul");
adom.addEventListener("click",function (event) {
  uldom.classList.toggle("open");
});

const adom1 = document.querySelector("nav > ul > li:nth-child(2) > a");
const adom2 = document.querySelector("nav > ul > li:nth-child(3) > a");
// console.log(adom1);
const uldom1 = document.querySelector("nav > ul >li > ul");
adom1.addEventListener("click",function (event) {
  uldom1.classList.toggle("open");
});
const uldom2 = document.querySelector("nav > ul > li:nth-child(3) > ul")
adom2.addEventListener("click",function (event) {
  uldom2.classList.toggle("open");
});

const adom11 = document.querySelector("nav > ul > li:nth-child(2) > ul > li > a");
const adom12 = document.querySelector("nav > ul > li:nth-child(2) > ul > li:nth-child(2) > a");
const adom13 = document.querySelector("nav > ul > li:nth-child(2) > ul > li:nth-child(3) > a");
const uldom11 = document.querySelector("nav > ul > li > ul > li > ul");
const uldom12 = document.querySelector("nav > ul > li > ul > li:nth-child(2) > ul");
const uldom13 = document.querySelector("nav > ul > li > ul > li:nth-child(3) > ul");
adom11.addEventListener("click",function (event) {
  uldom11.classList.toggle("open");
});
adom12.addEventListener("click",function (event) {
  uldom12.classList.toggle("open");
});
adom13.addEventListener("click",function (event) {
  uldom13.classList.toggle("open");
});

const adom21 = document.querySelector("nav > ul > li:nth-child(3) > ul > li > a");
console.log(adom21);
const adom22 = document.querySelector("nav > ul > li:nth-child(3) > ul > li:nth-child(2) > a");
const adom23 = document.querySelector("nav > ul > li:nth-child(3) > ul > li:nth-child(3) > a");
const uldom21 = document.querySelector("nav > ul > li:nth-child(3) > ul > li > ul ");
console.log(uldom21);
const uldom22 = document.querySelector("nav > ul > li > ul > li:nth-child(2) > ul");
const uldom23 = document.querySelector("nav > ul > li > ul > li:nth-child(3) > ul");
adom21.addEventListener("click",function (event) {
  uldom21.classList.toggle("open");
});
adom22.addEventListener("click",function (event) {
  uldom22.classList.toggle("open");
});
adom23.addEventListener("click",function (event) {
  uldom23.classList.toggle("open");
});
