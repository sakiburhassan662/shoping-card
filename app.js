function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product+ '-number');
    let productNumber = productInput.value;
    productInput.value = parseInt(productNumber) +1;
    if(isIncreasing){
        productNumber = parseInt(productNumber) +1;
    }
    else if(productNumber >0){
        productNumber = parseInt(productNumber) -1;
    }
    productInput.value = productNumber;
    //update total
    const productTotal = document.getElementById(product+ '-total');
    productTotal.innerText = productNumber * price;
    //calclute total
    calculaetTotal();
}
function getInputValue(product){
    const productInput = document.getElementById(product+'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculaetTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case')* 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    //update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
    ;
}
// phone increase dicrease events
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone-minas').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false)
})


// handle case increase dicrease events
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true)
})
document.getElementById('case-minas').addEventListener('click', function(){
    updateProductNumber('case', 59, false)
})