

document.getElementById('deposit-button').addEventListener('click',function()
{
    // To find text field using Id
    const depositText=document.getElementById('deposit-text');
    // To take value from text  field
    const depositNewText=parseFloat(depositText.value);
    console.log(depositNewText);
    const depositAmount=document.getElementById('deposit-amount');
    const currentText=  parseFloat(depositAmount.innerText);
    const newText= currentText+depositNewText;
    depositAmount.innerText=newText;
    depositText.value='';
    

})
document.getElementById('withdraw-button').addEventListener('click',function()
{
      // To find text field using Id
      const withdrawText=document.getElementById('withdraw-text');
      // To take value from text  field
      const withdrawNewText=parseFloat(withdrawText.value);
      console.log(withdrawNewText);
      const withdrawAmount=document.getElementById('withdraw-amount');
      const withdrawCurrentText=  parseFloat(withdrawAmount.innerText);
      const withdrawNewText1= withdrawCurrentText+withdrawNewText;
      withdrawAmount.innerText=withdrawNewText1;
      withdrawText.value='';
})
document.getElementById('double-button').addEventListener('click',function()
{
    const doubleText=document.getElementById('double-text');
    const doubleNewText=doubleText.value;
    console.log(doubleNewText);
    const doubleParagraph=document.getElementById('double-amount');
    console.log(doubleParagraph.innerText);
    doubleParagraph.innerText=doubleNewText*2;
    doubleText.value=''
})