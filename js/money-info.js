

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