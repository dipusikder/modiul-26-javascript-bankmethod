document.getElementById('btn-submit-2').addEventListener('click', function(){
    const userInputWithdraw = document.getElementById('User-Withdraw');
    const userInput = userInputWithdraw.value;
    const Input = parseFloat(userInput);
    userInputWithdraw.value='';
    if(isNaN(Input)){
        alert('please add valid numbr')
        return
    }


    const userWithdrawIn = document.getElementById('wihdraw-in');
    const WithdrawIn = userWithdrawIn.innerText;
    const Withdraw = parseFloat(WithdrawIn);



    const subTractionOfBallance = document.getElementById('ballance-Diposite');
    const subTractionBallance = subTractionOfBallance.innerText;
    const Ballance = parseFloat(subTractionBallance);
  
    if(Input > Ballance){
        alert('baper Bnak a Eto Taka nai')
        return
    }
    const addBalanceInWithdraw = Input + Withdraw;
    userWithdrawIn.innerText= addBalanceInWithdraw;
;

    const reduceBalanceWithdraw = Ballance - addBalanceInWithdraw;
    subTractionOfBallance.innerText = reduceBalanceWithdraw;
    
})