/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';

inquirer.prompt([
    {
        type: "input",
        name: "urlQR",
        message: "Enter a url you want to turn to QR code. "
    }
]).then((name) => {
    console.log(name.urlQR);
}).catch(error => {
  console.error(error);
});
console.log("something??");