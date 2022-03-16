// deposit 
let depositValue = document.getElementById("deposit-value");
let depositOutput = document.getElementById("deposit-output");
// withdraw 
let withdrawValue = document.getElementById("withdraw-value");
const withdrawOutput = document.getElementById("withdraw-output");
// Total balance 
let balanceOutput = document.getElementById("balance-output");


function addMoney(currentAmount, newAmount) {
  return Number(currentAmount) + Number(newAmount);
}

function getMoney(currentAmount, newAmount) {
  return Number(currentAmount) - Number(newAmount);
}

function deposit() {
  const totalDeposit = addMoney(depositOutput.innerText, depositValue.value);
  depositOutput.innerText = totalDeposit;

  const totalBalance = addMoney(balanceOutput.innerText, depositValue.value);
  balanceOutput.innerText = totalBalance;

  depositValue.value = "";
}

function withdraw() {
  const totalWithdraw = addMoney(withdrawOutput.innerText, withdrawValue.value);
  withdrawOutput.innerText = totalWithdraw;

  const totalBalance = getMoney(balanceOutput.innerText, withdrawValue.value);
  balanceOutput.innerText = totalBalance;

  withdrawValue.value = "";
}










// deposit Function
// function deposit() {
//   depositOutput.innerText =
//     parseFloat(depositValue.value) + parseFloat(depositOutput.innerText);
//   balanceOutput.innerText =
//     parseFloat(balanceOutput.innerText) + parseFloat(depositValue.value);
//   depositValue.value = "";
// }

// // withdraw Function 
// function withdraw() {
//   withdrawOutput.innerText =
//     parseFloat(withdrawOutput.innerText) + parseFloat(withdrawValue.value);
  
//  balanceOutput.innerText = parseFloat(balanceOutput.innerText) - parseFloat(withdrawValue.value)
//  withdrawValue.value = "";
// }



const foodInput = document.getElementById("food-input");
const rentInput = document.getElementById("rent-input");
const clothesInput = document.getElementById("clothes-input");
const totalExpense = document.getElementById("expenses-input");
const totalBalance = document.getElementById("balance-input");
const incomeInput = document.getElementById("income-input");
const savingInput = document.getElementById("saving-input");
const saveingAmount = document.getElementById("saving-amount");
const remainingBalance = document.getElementById('remaining-balance');

function calculate() {
  const total =
    parseFloat(foodInput.value) +
    parseFloat(rentInput.value) +
    parseFloat(clothesInput.value);

  totalExpense.innerText = total;

  totalBalance.innerText =
    parseFloat(incomeInput.value) - parseFloat(totalExpense.innerText);
}

function saving() {
  const saveing =
    (parseFloat(totalBalance.innerText) * parseFloat(savingInput.value)) / 100;
    saveingAmount.innerText = saveing
   
    remainingBalance.innerText = parseFloat(totalBalance.innerText) - parseFloat(saveing)
}
