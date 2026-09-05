const accountId = 10 ;
let accountEmail = "akashgj241001@gmail.com";
var accountPassword = "808070";
accountCity = "Pune";
let accountState ;

//javaScrpt is loosely typed language so we can declare variable without datatype but it is not preferable
//If we are declaring a variable but not initializing it then it will give 
// output as undefined . for this specifing datatype is mandatory 


//accountId = 45 ;
accountEmail = "rohit@india.com";
accountPassword = "455455";
accountCity = "Mumbai" ;


// nodeconsole.log(accountId);


/*
Prefer not to use var
because of issues in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
