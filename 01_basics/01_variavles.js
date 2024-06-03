const accountId = 144553
let accountEmail = "demo@ubifi.in"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2  // not allowed

accountEmail = " demo2@ubifi.in"
accountPassword = "21212121"
accountCity = "Bihar"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log([accountId, accountEmail, accountPassword,accountCity, accountState])