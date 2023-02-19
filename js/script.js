function Counter() {
  let count = 0;
  this.increment = function () {
    count++;
    result.textContent = count;
  }
  this.decrement = function () {
    if (count <= 0) return;
    count--;
    result.textContent = count;
  }
  this.reset = function () {
    count = 0;
    result.textContent = count;
  }
}

const counter = new Counter();

const increment = counter.increment;
const decrement = counter.decrement;
const reset = counter.reset;