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
    let expression = display.innerText
      .replace(/÷/g, "/")
      .replace(/×/g, "*");

    // 🔢 Detecta e ajusta porcentagens como calculadora real
    if (expression.includes("%")) {
      expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

      // Ajustes contextuais
      expression = expression.replace(/(\d+(\.\d+)?)\s*\+\s*\((\d+(\.\d+)?\/100)\)/g, "($1 + $1*$3)");
      expression = expression.replace(/(\d+(\.\d+)?)\s*-\s*\((\d+(\.\d+)?\/100)\)/g, "($1 - $1*$3)");
      expression = expression.replace(/(\d+(\.\d+)?)\s*\*\s*\((\d+(\.\d+)?\/100)\)/g, "($1*$3)");
      expression = expression.replace(/(\d+(\.\d+)?)\s*\/\s*\((\d+(\.\d+)?\/100)\)/g, "($1/($3))");
    }

    const result = eval(expression);
    display.innerText = result !== undefined ? parseFloat(result.toFixed(6)) : "0";
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
