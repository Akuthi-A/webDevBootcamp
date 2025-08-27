import express from "express"

const app = express();
const port = 3000;

app.get('/', (req, res)=> {
    console.log(req.headers);
    console.log(res);
    res.send("<h1>Hello Akuthi!!</h1>");
})

app.get('/Contact', (req, res) => {
    res.send(`<h1>Contact Me</h1> <hr> <a href="https://youtu.be/fWNaR-rxAic?si=pnxOnKOjE8kFPeir"><p>Heyy i just met you, and this is crazy, so <em>here's my number so call me maybe</em>! </p></a>`);
});

app.get('/About', (req, res) => {
    res.send("<h1>About Me</h1> <hr> <p>I just love music man</p>")
});

app.listen(port, ()=> {
    console.log(`Server started on port ${port}!`);
});