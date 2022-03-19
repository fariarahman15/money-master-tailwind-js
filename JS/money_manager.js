// get input amount 
function getInputAmount(inputID){
    const getInputAmount = document.getElementById(inputID);
    const inputAmountText = getInputAmount.value;
    const inputAmount = parseFloat(inputAmountText);
    return inputAmount;
};

// get & update total expenses 
function getTotalExpenses(){
    const foodExpenses = getInputAmount('food-expenses');
    const rentExpenses = getInputAmount('rent-expenses');
    const clothExpenses = getInputAmount('cloth-expenses');
    const totalExpenses = foodExpenses + rentExpenses + clothExpenses;
    const totalExpensesAmount = document.getElementById('total-expenses');
    totalExpensesAmount.innerText = totalExpenses;
    return totalExpenses;
};


// calculate & update balance 
function getBalance(minuendAmount, subtrahendAmount){
    const availableBalance = minuendAmount - subtrahendAmount;
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = availableBalance;
    return availableBalance;
};

document.getElementById('calculation').addEventListener('click',function(){
    // get income amount 
    const incomeAmount = getInputAmount('income-amount');

    // update expenses amount 
    const expensesAmount = getTotalExpenses();

    // update balance 
    const currentBalance = getBalance(incomeAmount, expensesAmount);

});