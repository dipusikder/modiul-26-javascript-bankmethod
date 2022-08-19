// ******Step 1 button eventhandler in button***
document.getElementById('btn-diposite-1').addEventListener('click', function(){
    // / ******Step 2 inputfield***
    const userDepositeInput = document.getElementById('User-Deposite');
    const userDeposite = userDepositeInput.value;
    const newdeposite = parseFloat(userDeposite)
    // / ******Step 3 diposite amount ***
    const UserCurrentDiposite = document.getElementById('current-Diposite')
    const newDispossite = UserCurrentDiposite.innerText;
    const previousTotal = parseFloat(newDispossite)
 // / ******Step 4 diposite amount ***
   const currentotal = previousTotal + newdeposite;
   UserCurrentDiposite.innerText = currentotal
 // / ******Step 5 diposite amount + newdeposite and merge with input field and iltimate value of diposite ***
   const ballanceInput = document.getElementById('ballance-Diposite')
   const getBallance = ballanceInput.innerText;
   const newBalance = parseFloat(getBallance)
    // / ******Step 6 get ballance ***
    const totalBalance = newBalance + newdeposite ;
    ballanceInput.innerText = totalBalance;
 // / ******Step 6 set ballance with newblanace + newdeposite ***
   userDepositeInput.value='';

})