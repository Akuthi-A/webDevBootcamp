import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";

const app = express();
const port = 3000;
const saltRounds = 10;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "password",
  port: 5432
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const checkedResult = await db.query("SELECT * FROM users WHERE email = $1", [username]);
    console.log(checkedResult);

    if (checkedResult.rows.length > 0) {
      console.log("User already exists!!");
      res.send("User already exists!!");
    }
    else {
      // password hashing
      bcrypt.hash(password, saltRounds, async (err, hash) => {
      const result = await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [username, hash]);
    console.log(result);
    res.render("secrets.ejs");
    });  
    }
  } catch (error) {
    console.log(error);
  }
  
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const loginPassword = req.body.password;
  console.log("password: " + loginPassword);

  try {
    const checkEmail = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    // console.log(checkEmail);
    // console.log(checkEmail.rows[0].password);

    
    if (checkEmail.rows.length === 0) {
      console.log("User does not exist in db. register now!!");
      res.render("register.ejs");
    } else {
      // checking password equality

      const checkPassword = await db.query("SELECT password FROM users WHERE email = $1", [email])
      const dbPassword = checkPassword.rows[0].password;

      bcrypt.compare(loginPassword, dbPassword, (err, result) => {
        if (err) {
          console.log("Comparing passwords error: ", err);
        }
        else {
          if (result) {
            console.log("Logging in!!!")
            res.render("secrets.ejs")
          } else {
        console.log("Password is incorrect. TRY AGAIN!!");
        res.send("Incorrect Password");
      }
        }
      });
    }
  } catch (error) {
    console.log(error); 
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
