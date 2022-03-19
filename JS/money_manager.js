/* calculation */
function getInputAmount(){
    const getIncomeAmount = document.getElementById('income-amount');
    const incomeAmountText = getIncomeAmount.value;
    const incomeAmount = parseFloat(incomeAmountText);
    console.log(incomeAmount);
}


document.getElementById('calculation').addEventListener('click',function(){
    /* const getIncomeAmount = document.getElementById('income-amount');
    const incomeAmountText = getIncomeAmount.value;
    const incomeAmount = parseFloat(incomeAmountText);
    console.log(incomeAmount); */
    getInputAmount();
});