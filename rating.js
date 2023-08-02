const rating = document.querySelector(".js-rating");
const submitBtn = document.querySelector("[type='submit']");
const ratingScreen = document.querySelector(".js-rating-screen");
const ratingSuccess = document.querySelector(".js-rating-success");
const yourSelection = ratingSuccess.querySelector(".your-selection-text span");
const userSetSelection = 0;

rating.addEventListener("click", (e) => {
  let target = e.target;
  checkboxCleanup();
  target.setAttribute("aria-checked", true);
});

function checkboxCleanup() {
  for (let element of rating.children) {
    element.setAttribute("aria-checked", false);
  }
}

const isRatingGiven = () => {
  let given = 0;
  for (let element of rating.children) {
    if (element.getAttribute("aria-checked") === "true") {
      given = element.innerText;
      console.log(given);
      break;
    }
  }
  return given;
};

submitBtn.addEventListener("click", () => {
  let rate = isRatingGiven();
  if (rate) {
    ratingScreen.classList.add("no-display");
    ratingSuccess.classList.remove("no-display");
  }
  yourSelection.innerText = rate;
});