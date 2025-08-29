const text = "Welcome to Cherry+ Network";
let i = 0;
function typing() {
  if (i < text.length) {
    document.querySelector(".typing").textContent += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
document.querySelector(".typing").textContent = "";
typing();
