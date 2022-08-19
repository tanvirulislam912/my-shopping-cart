    // console.log('Case js file added')

function updateCaseNumber(isIncrease){
    const caseNumberField =document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value ;
    const previousCaseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;
    if(isIncrease == true){
        newCaseNumber = previousCaseNumber + 1;

    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

  
  
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
    
   }
document.getElementById('btn-case-plus').addEventListener('click',function(){
    //console.log('case button clicked')
    const newCaseNumber = updateCaseNumber(true);
     
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})


document.getElementById('btn-case-minus').addEventListener('click',function(){
   // console.log('case minus button clicked');
   const newCaseNumber = updateCaseNumber(false);
   //console.log(newCaseNumber);

   updateCaseTotalPrice(newCaseNumber);
   calculateSubTotal();

   

})