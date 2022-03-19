/* functions */
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


// calculate balance 
function getBalance(minuendAmount, subtrahendAmount){
    const availableBalance = minuendAmount - subtrahendAmount;
    return availableBalance;
};


// calculate & update savings
function getsavings(currentBalance){
    const savingsPercentage = getInputAmount('Percentage');
    const savingAmonut = (savingsPercentage/100) * currentBalance;
    const totalsavings = document.getElementById('saving-amount');
    totalsavings.innerText = savingAmonut;
    return savingAmonut;
}


/* ---------------------------------- */
/* click event */ 
/* ---------------------------------- */

// expenses & balance update 
document.getElementById('calculate-button').addEventListener('click',function(){
    // get income amount 
    const incomeAmount = getInputAmount('income-amount');

    // update expenses amount 
    const expensesAmount = getTotalExpenses();

    // update balance 
    const currentBalance = getBalance(incomeAmount, expensesAmount); 
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = currentBalance;
});


// saving amount & remaining balance update 
document.getElementById('save-button').addEventListener('click',function(){
    const incomeAmount = getInputAmount('income-amount'); 
    const expensesAmount = getTotalExpenses();
    const currentBalance = getBalance(incomeAmount, expensesAmount); 

    // update saving amount 
    const savings = getsavings(currentBalance);
    
    // update remaining balance 
    const remainingBalance = getBalance(currentBalance, savings);
    const updatedlBalance = document.getElementById('remaining-balance');
    updatedlBalance.innerText = remainingBalance;
    
});