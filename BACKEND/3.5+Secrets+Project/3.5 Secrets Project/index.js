//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from 'express'
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(passwordCheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    console.log("You submitted a password")
    console.log(req.body);
    if (req.body.password == "ILoveProgramming") {
        let secretFile = __dirname + "/public/secret.html";
        res.sendFile(secretFile);
    } else { res.sendFile(__dirname + "/public/index.html"); }
    
});

function passwordCheck(req, res, next) {
    if (req.body.password == "ILoveProgramming") {
        let secretFile = __dirname + "/public/secret.html";
        return true;
    }
    next();
}




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
