const numbers = document.querySelectorAll(".numbers");
const submitButton = document.querySelector(".submitButton");
const container = document.querySelector(".container");
let rateNumber;
for (let number of numbers) {
  number.addEventListener("click", () => {
    const clickedNumber = document.querySelector(".clicked");
    if (clickedNumber) {
      clickedNumber.classList.remove("clicked");
    }
    number.classList.add("clicked");
    rateNumber = number.textContent;
  });
}
submitButton.addEventListener("click", () => {
    if (rateNumber) {
        container.classList.add("rateDone");
        const myRate = document.querySelector(".yourRate span");
        myRate.innerHTML = rateNumber;
  }
});
