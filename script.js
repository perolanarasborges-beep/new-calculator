// ============================
// 📟 Funções da Calculadora
// ============================
const display = document.getElementById("display");

function insert(value) {
  if (display.innerText === "0") display.innerText = value;
  else display.innerText += value;
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  const current = display.innerText;
  display.innerText = current.length > 1 ? current.slice(0, -1) : "0";
}

function calculate() {
  try {
    const result = eval(display.innerText.replace("÷", "/").replace("×", "*"));
    display.innerText = result !== undefined ? result : "0";
  } catch {
    display.innerText = "Erro";
  }
}

// ============================
// 🌗 Alternância de Tema
// ============================
const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeButton.innerText = "Modo Escuro";
  } else {
    themeButton.innerText = "Modo Claro";
  }
});
