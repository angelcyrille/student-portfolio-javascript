const greetings = {
  morning: "🌅 Good Morning!",
  afternoon: "🌞 Good Afternoon!",
  evening: "🌙 Good Evening!"
};

const hour = new Date().getHours();
let greetText = "";

if (hour < 12) {
  greetText = greetings.morning;
} else if (hour < 18) {
  greetText = greetings.afternoon;
} else {
  greetText = greetings.evening;
}

const greetingElement = document.getElementById("greeting");
greetingElement.textContent = "";
let i = 0;

function typeWriter() {
  if (i < greetText.length) {
    greetingElement.textContent += greetText.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}


