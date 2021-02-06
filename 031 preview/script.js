const btns = document.querySelectorAll("button"),
  overlay = document.querySelector(".overlay");

// // don use in real projects
// btn.onclick = function () {
//   alert("Hello World");
// };
// // if used second time will show only last one
// btn.onclick = function () {
//   alert("Hello World Again");
// };

// btn.addEventListener("click", () => {
//   alert("Hello World");
// });
// // will show all events
// btn.addEventListener("click", () => {
//   alert("Hello World Again");
// });

// let i = 0;
const deleteElement = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
  //   i++;
  //   if (i == 1) {
  //     btn.removeEventListener("click", deleteElement);
  //   }
};

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement, { once: true });
});

// btn.addEventListener("mouseenter", (event) => {
//   //   console.log("Hello");
//   console.log(event.target);
//   event.target.remove();
// });

const link = addEventListener("click", function (event) {
  event.preventDefault(); //alwaus in beginning

  console.log(event.target);
});
