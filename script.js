const button = document.getElementById("myButton");
const text = document.getElementById("text");
const counter = document.getElementById("counter");

let clicks = 0;

button.addEventListener("click", () => {
    clicks++;
    text.textContent = "JavaScript działa! 🔥";
    counter.textContent = `Liczba kliknięć: ${clicks}`;

    text.classList.remove("pulse"); 
    void text.offsetWidth;          
    text.classList.add("pulse");
});
