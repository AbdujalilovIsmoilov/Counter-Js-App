"use strict";
let count = 0;

const increment = () => {
  count++;
  result.textContent = count;
};

const decrement = () => {
  if (count <= 0) return;
  count--;
  result.textContent = count;
};

const reset = () => {
  count = 0;
  result.textContent = count;
};
