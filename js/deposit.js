
// ****addeventlitsner to diposit button Step-1
// document.getElementById('btn-submit-1').addEventListener('click',function(){
//     console.log('clicked')
// })

document.getElementById('btn-diposite-1').addEventListener('click', function(){
    const userDepositeInput = document.getElementById('User-Deposite');
    const userDeposite = userDepositeInput.value;
    const newdeposite = parseFloat(userDeposite)

    const UserCurrentDiposite = document.getElementById('current-Diposite')
    const newDispossite = UserCurrentDiposite.innerText;
    const previousTotal = parseFloat(newDispossite)

   const currentotal = previousTotal + newdeposite;
   UserCurrentDiposite.innerText=currentotal

   const ballanceInput = document.getElementById('ballance-Diposite')
   const getBallance = ballanceInput.innerText;
   const newBalance = parseFloat(getBallance)
    const totalBalance = newBalance + newdeposite ;
    ballanceInput.innerText = totalBalance;

   userDepositeInput.value='';

})