
function calculateTip() {

    var billTotal = parseFloat(document.getElementById('billTotal').value);
    var tipPercentage = parseFloat(document.getElementById('tipInput').value);

    var tipAmount = (billTotal * tipPercentage) / 100;
    var totalBillWithTip = billTotal + tipAmount;

    document.getElementById('tipAmount').value = tipAmount.toFixed(2);
    document.getElementById('totalBillWithTip').value = totalBillWithTip.toFixed(2);

    document.getElementById('tipOutput').textContent = tipPercentage + '%';
}


document.getElementById('tipInput').addEventListener('input', calculateTip);
document.getElementById('billTotal').addEventListener('input', calculateTip);


calculateTip();
