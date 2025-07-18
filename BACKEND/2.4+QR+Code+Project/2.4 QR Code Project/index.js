/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image'
import fs from 'fs'

inquirer.prompt([
    {
        type: "input",
        name: "urlQR",
        message: "Enter a url you want to turn to QR code. (e.g. -> www.google.com): "
    }
]).then((name) => {
    let img = qr.image(name.urlQR, {
        type:'png',
        parse_url: true
    })
    img.pipe(fs.createWriteStream("QR_CODE.png"));
    console.log(name);
}).catch(error => {
  console.error(error);
});
