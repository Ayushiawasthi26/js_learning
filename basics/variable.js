const accountId=14453
let email="ayushi@gmail.com"
var accountPass="123345"
acccity="Kanpur"
let account;// it gives value as undefined if we don't initialise the value

/*
prefer not to use var 
because of issue in block scope and functional scope*/

// accountId=345 not allowed as const does not allow to change value

 email="asdfg@gmail.com"
 accountPass="98745"
 acccity="Uhas"
 console.table([accountId,email,accountPass,acccity,account]);