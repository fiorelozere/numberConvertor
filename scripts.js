const swapButton = document.getElementById("swap");

swapButton.addEventListener("click", () => {
  const node1 = document.getElementById("decimal");
  const node2 = document.getElementById("binary");
  swap(node1, node2);
});

function swap(node1, node2) {
  const afterNode2 = node2.nextElementSibling;
  const parent = node2.parentNode;
  node1.replaceWith(node2);
  parent.insertBefore(node1, afterNode2);
}

function decimalToBinary(decimal) {
  let binary = 0;
  let rem;
  let i = 1;
  while (decimal != 0) {
    rem = decimal % 2;
    decimal = parseInt(decimal / 2);
    binary = binary + rem * i;
    i = i * 10;
  }
  return binary;
}

function binaryToDecimal(binary) {
  let decimal = 0;
  let multiple = 1;
  for (let i = 0; i < binary.length; i++) {
    let digit = binary[binary.length - 1 - i];

    if (digit == "1") {
      decimal += multiple;
    }
    multiple *= 2;
  }
  return decimal;
}

decimalToBinary(10);

const convertButton = document.getElementById("convert");

convertButton.addEventListener("click", () => {
  if (document.querySelector(".container").firstElementChild.id == "decimal") {
    const decimal = document.querySelector(".container").firstElementChild
      .firstElementChild.value;
    document.querySelector(
      ".container"
    ).lastElementChild.firstElementChild.value = decimalToBinary(decimal);
  } else {
    const binary = document.querySelector(".container").firstElementChild
      .firstElementChild.value;
    document.querySelector(
      ".container"
    ).lastElementChild.firstElementChild.value = binaryToDecimal(binary);
  }
});
