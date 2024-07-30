function counter(operation) {
  this.count = 0;
  if (operation === "suma") {
    return () => {
      count = count + 1;
      number.textContent = count;
    };
  }
  if (operation === "resta") {
    return () => {
      count = count - 1;
      number.textContent = count;
    };
  }
}

const increment = counter("suma");
const decrement = counter("resta");

increase.addEventListener("click", increment);
decrease.addEventListener("click", decrement);
