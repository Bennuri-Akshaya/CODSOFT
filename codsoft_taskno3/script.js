const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let input = "";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const value = buttons[i].innerText;

    if (value === "C") {
      input = "";
      display.value = "";
    }
    else if (value === "DEL") {
      input = input.slice(0, -1);
      display.value = input;
    }
    else if (value === "=") {
      try {
        input = eval(input); // calculates expression
        display.value = input;
      } catch {
        display.value = "Error";
        input = "";
      }
    }
    else {
      input += value;
      display.value = input;
    }
  });
}
