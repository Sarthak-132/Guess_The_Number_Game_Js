let btn = document.getElementById("btn");
let output = document.getElementById("output");
let random_Number_Generator = [Math.floor(Math.random() * 100)];
random_Number_Generator = Number.parseInt(random_Number_Generator);
let score = 1;

btn.addEventListener("click", function () {
    let user_input = document.getElementById("userinput").value;
    if (user_input == "") {
        output.innerHTML = `Please Enter a Number! &#128528;`;
        output.style.color = "red";
    } else if (user_input > random_Number_Generator) {
        score++;
        output.innerHTML = `OOPS! Choose lower Number than ${user_input}&#x1F646;`;
        output.style.color = "red";
    } else if (user_input < random_Number_Generator) {
        score++;
        output.innerHTML = `OOPS! Choose higher Number than ${user_input}&#128129;`;
        output.style.color = "red";
    }
    if (user_input == random_Number_Generator) {
        output.innerHTML = "Congratulations!&#128157; You guessed the right number in " + score + " chances!";
        output.style.color = "#00ffe7";

  }
});
