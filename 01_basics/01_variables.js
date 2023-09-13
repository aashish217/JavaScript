const accountId = 123246382764;

let accountEmail = "abc@gmail.com";

var accountPassword = "498327489427";

accountCity = "gurgaon";

let accountState;

// accountId = 2; Not allowed

accountEmail = "def@gmail.com";

accountPassword = "64982364";

accountCity = "Delhi";

/* Prefer not to use var 
 because og issue in block and functional scope
 */ 

console.log(accountId);

console.table([accountEmail,accountPassword,accountCity,accountState]);