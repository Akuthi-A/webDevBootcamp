// //Create a react app from scratch.
// import React from "react";
// import ReactDOM from "react-dom/client";
// //It should display a h1 heading.

// //It should display an unordered list (bullet points).
// //It should contain 3 list elements.
// const name = "Anatii";
// const year = new Date().getFullYear();
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <div>
//         <h1>Freedom Fighters</h1>

//         {/* <ul>
//             <li>Nelson Mandela</li>
//             <li>Mama Winnie</li>
//             <li>Khayalakhe</li>
//         </ul> */}
//         <img className="free-img" src="https://imgs.search.brave.com/9ZgHZPcZ5lRHiAxx-B9ZiX5zuglPVD7KL_qYjZNhht4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bm9iZWxwcml6ZS5v/cmcvdXBsb2Fkcy8y/MDE3LzA2L0dldHR5/SW1hZ2VzLTE2MzQ0/Nzk3My05MDl4NzIw/LmpwZw"></img>
//         <img className="free-img" src="https://imgs.search.brave.com/xPfGiStVEZ7LIITjckeKMu-7S8fKpry5A3RokirMBOs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9iaWxk/ZXIuZGV1dHNjaGxh/bmRmdW5rLmRlL0ZJ/L0xFL19lLzg2L0ZJ/TEVfZTg2N2FiYzEx/MDY4ZjUxYTdjZDMz/ZjcxODQyZWU3MDQv/MDAwLXY4MTc1LWpw/Zy0xMDAtMTkyMHgx/MDgwLmpwZw" alt="" />

//         {/* <p>Liberated in {year}</p> */}

//         <p>Created by {name}</p>
//         <p>@Copyright {year}</p>
//     </div>
// );


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser



import React from "react";
import ReactDOM from "react-dom/client";

const time = new Date();
const hour = time.getHours();
console.log(time);
let timeOfDay = "Good Morning";
let style = {color: "red"}

if (hour < 12) {
    timeOfDay = "Good Morning";
    style = {color: "red"}
} else if (hour < 18) {
    timeOfDay = "Good Afternoon";
    style = {color: "green"}
} else {
    timeOfDay = "Good Evening";
    style = {color: "blue"}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <h1 style={style} className="heading">{timeOfDay}</h1>
    </div>
)