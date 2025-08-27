import express from 'express'



const app = express();
const port = 3000;




// let weekMessage = weekOrStrongDay(0);
app.get('/', (req, res) => {

    let type = "It's a weekday";
    let adv = "time to work hard";

    let date = new Date();
    let today = date.getDate();

    if (today === 0 || today === 6) {
        type = "It's the weekend";
        adv = "time to have some fun!"
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv
    })
})



app.listen(port, ()=> {
    console.log(`Server started on port ${port}!`);
});



// function weekOrStrongDay(weekdayNumerical) {
//     let text = "";
//     if (weekdayNumerical <= 4 && weekdayNumerical !== 0) {
//         text = "<h1>Hey! It's a weekday, it's time to work hard.</h1>";
//     }
//     else {
//         text = "<h1>Hey!! It's a weekend, it's time to have some fun.</h1>";
//     }
    
//     return text;
// }