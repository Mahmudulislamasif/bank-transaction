document.getElementById('submit-button').addEventListener('click',function()
{
    const emailText=document.getElementById('user-email');
    const getEmailText=emailText.value;

    const passwordText=document.getElementById('user-password');
    const getPassword=passwordText.value;
    if(getEmailText=='asif@gmail.com' && getPassword=="1234")
    {
        window.location.href = 'banking.html';
    }
    else if(getEmailText=='' && getPassword=='')
    {
        alert('Please fill up the empty field');
    }
    else
    {
        alert('Email or Password is not valid');
    }
  
})