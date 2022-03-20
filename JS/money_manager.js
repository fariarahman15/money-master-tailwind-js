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
function getsavings(incomeAmount){
    const savingsPercentage = getInputAmount('Percentage');
    const savingAmonut = (savingsPercentage/100) * incomeAmount;
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
    if (incomeAmount < 0 || isNaN(incomeAmount) == true ){
        // error message 
        document.getElementById('input-error').style.display = 'block';
    }

    else if (incomeAmount > 0 && isNaN(incomeAmount) == false) {
        // update expenses amount 
        const expensesAmount = getTotalExpenses();

        if (incomeAmount > expensesAmount){
            // update balance 
            const currentBalance = getBalance(incomeAmount, expensesAmount); 
            const totalBalance = document.getElementById('total-balance');
            totalBalance.innerText = currentBalance;
            // error message 
            document.getElementById('over-expenses-error').style.display = 'none';
        }
        else if (incomeAmount < expensesAmount){
            // error message 
            document.getElementById('over-expenses-error').style.display = 'block';
        }
        // error message 
        document.getElementById('input-error').style.display = 'none';
        }
});


// saving amount & remaining balance update 
document.getElementById('save-button').addEventListener('click',function(){
    const incomeAmount = getInputAmount('income-amount'); 
    const expensesAmount = getTotalExpenses();
    const currentBalance = getBalance(incomeAmount, expensesAmount); 

    // update saving amount 
    const savings = getsavings(incomeAmount);

    if (currentBalance > savings){
        // update remaining balance 
        const remainingBalance = getBalance(currentBalance, savings);
        const updatedlBalance = document.getElementById('remaining-balance');
        updatedlBalance.innerText = remainingBalance;

        // error message 
        document.getElementById('savings-error').style.display = 'none';
    }
    else if(currentBalance < savings){
        // error message 
        document.getElementById('savings-error').style.display = 'block';
    }
    
});