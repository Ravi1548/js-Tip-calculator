

let calculate = document.querySelector('#calculate');

calculate.addEventListener('click', () => {
    let totalBill = document.querySelector('#totalBill');
    let tipPercent = document.querySelector('#tipPercent');
    let split = document.querySelector('#split');

    //validate
    if(totalBill.value === '' || tipPercent.value == 0 || split.value == 0){
        alert('Please enter all values');
        return;
    }
    //calculate
    let total = (totalBill.value * tipPercent.value) / split.value;
    total = total.toFixed(2);
    
    document.getElementById('tip').innerHTML = total;

    //for getting the full amount

     let totalamount = (parseInt(totalBill.value)/(split.value)+ + parseInt(total));
    document.getElementById('amount').innerHTML= totalamount;
    totalamount = totalamount.toFixed(2);
})
 

