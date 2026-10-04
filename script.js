const form = document.getElementById("transactionForm");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const list = document.getElementById("transactionList");
const emptyState = document.getElementById("emptyState");
const clearButton = document.getElementById("clearButton");

const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income");
const expensesElement = document.getElementById("expenses");
const countElement = document.getElementById("count");

let transactions = JSON.parse(localStorage.getItem("finanzas_personales")) || [];

const formatMoney = (value) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value);

function saveTransactions() {
  localStorage.setItem("finanzas_personales", JSON.stringify(transactions));
}

function updateSummary() {
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  balanceElement.textContent = formatMoney(income - expenses);
  incomeElement.textContent = formatMoney(income);
  expensesElement.textContent = formatMoney(expenses);
  countElement.textContent = transactions.length;
}

function renderTransactions() {
  list.innerHTML = "";
  emptyState.style.display = transactions.length ? "none" : "block";

  transactions.forEach((transaction) => {
    const item = document.createElement("li");
    item.className = "transaction";

    const sign = transaction.type === "income" ? "+" : "-";
    const typeText = transaction.type === "income" ? "Ingreso" : "Gasto";

    item.innerHTML = `
      <div class="transaction-info">
        <strong>${escapeHtml(transaction.description)}</strong>
        <small>${typeText} · ${transaction.date}</small>
      </div>
      <div class="transaction-right">
        <strong class="amount ${transaction.type}">
          ${sign}${formatMoney(transaction.amount)}
        </strong>
        <button class="delete-button" type="button" data-id="${transaction.id}">
          Eliminar
        </button>
      </div>
    `;

    list.appendChild(item);
  });

  updateSummary();
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = Number(amountInput.value);
  const type = typeInput.value;

  if (!description || !amount || amount <= 0) return;

  transactions.unshift({
    id: Date.now(),
    description,
    amount,
    type,
    date: new Date().toLocaleDateString("es-CO")
  });

  saveTransactions();
  renderTransactions();
  form.reset();
  typeInput.value = "income";
  descriptionInput.focus();
});

list.addEventListener("click", (event) => {
  const button = event.target.closest(".delete-button");
  if (!button) return;

  const id = Number(button.dataset.id);
  transactions = transactions.filter((transaction) => transaction.id !== id);
  saveTransactions();
  renderTransactions();
});

clearButton.addEventListener("click", () => {
  if (!transactions.length) return;

  const confirmed = confirm("¿Seguro que quieres eliminar todos los movimientos?");
  if (!confirmed) return;

  transactions = [];
  saveTransactions();
  renderTransactions();
});

renderTransactions();
