 function userAccount(){
    let balance = 0;
    return {
        checkBal: ()=> console.log(`your current balance is:${balance}`),
        deposite: (amaunt)=>{
            balance+=amaunt;
            console.log(`the amount:${amaunt} has successfully added to your account and the current balance is: ${balance}`);
        },
        withdraw:(amaunt)=>{
            if(amaunt<balance){
                balance-=amaunt;
                console.log(`the amount ::${amaunt} has succefully withdrawn and the current balance is ::${balance}`)
            }
            else console.log('insufficient balance please try a small amount')
        }
    }
 }
 const account = userAccount();
 account.checkBal()
 account.deposite(500)
 account.withdraw(400)