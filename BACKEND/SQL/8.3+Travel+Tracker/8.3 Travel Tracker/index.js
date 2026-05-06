import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const dbClient = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "password",
  port: 5432,
});

dbClient.connect();

let visited_countries = [];
let country_codes = [];
let total = 0;

dbClient.query( "SELECT * FROM visited_countries", (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  visited_countries = res.rows;
  console.log(visited_countries);
  for (let country of visited_countries) {
    country_codes.push(country.country_code);
  }

}
);

let countriesAndCodes = [];

dbClient.query( "SELECT country, country_code FROM countries", (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  countriesAndCodes = res.rows;
  dbClient.end();
}
);

app.get("/", async (req, res) => {
  //Write your code here.
  total = visited_countries.length;
  res.render("index.ejs", { countries: country_codes, total: total });
});

app.post("/add", (req, res) => {
  let answer = req.body.country.trim().toUpperCase();
  let matchedCountry = countriesAndCodes.find(
  country => country.country.toUpperCase() === answer
);
console.log(matchedCountry);
if (matchedCountry) {
  country_codes.push(matchedCountry.country_code);
}

  total = country_codes.length;
  console.log(country_codes);
  res.render("index.ejs", { countries: country_codes, total: total });
  
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
