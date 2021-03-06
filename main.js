// income
const incomeInput1 = document.getElementById("income-input-1");
const incomeInput2 = document.getElementById("income-input-2");
const incomeInput3 = document.getElementById("income-input-3");
const incomeInput4 = document.getElementById("income-input-4");

// expense
const expenseInput1 = document.getElementById("expense-input-1");
const expenseInput2 = document.getElementById("expense-input-2");
const expenseInput3 = document.getElementById("expense-input-3");
const expenseInput4 = document.getElementById("expense-input-4");

// balance
const moneyDays = document.getElementById("money-days");
const moneyMounths = document.getElementById("money-mounths");
const moneyYears = document.getElementById("money-years");

let totalDays;
let totalMounths;
let totalYears;

// moneybox
const moneyboxInput = document.getElementById("moneybox-input");
const moneyInInput = document.getElementById("in-input");
const moneyOutInput = document.getElementById("out-input");

let accumulation = 0;
let totalPrecents = 0;

const inputs = document.querySelectorAll(".input");
for (input of inputs) {
  input.addEventListener("input", () => {
    countingAvailableMoney();
    calculationPrecents();
  });
}

const strToNum = (str) => (str.value ? parseInt(str.value) : 0);

const countingAvailableMoney = () => {
  const totalPerMonth =
    strToNum(incomeInput1) +
    strToNum(incomeInput2) +
    strToNum(incomeInput3) +
    strToNum(incomeInput4);

  const totalCosts =
    strToNum(expenseInput1) +
    strToNum(expenseInput2) +
    strToNum(expenseInput3) +
    strToNum(expenseInput4);

  totalMounths = totalPerMonth - totalCosts;
  moneyMounths.value = totalMounths;
};

moneyboxInput.addEventListener("input", (e) => {
  const totalPrecentEl = document.getElementById("moneybox-text");
  totalPrecents = e.target.value;
  totalPrecentEl.innerHTML = totalPrecents;
  calculationPrecents();
});

const calculationPrecents = () => {
  accumulation = ((totalMounths * totalPrecents) / 100).toFixed();
  moneyInInput.value = accumulation;

  moneyOutInput.value = totalMounths - accumulation;

  totalDays = (moneyOutInput.value / 30).toFixed();
  moneyDays.value = totalDays;

  totalYears = accumulation * 12;
  moneyYears.value = totalYears;
};
