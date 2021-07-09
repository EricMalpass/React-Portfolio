import React from "react";
import download from "../../images/Eric_Malpass_Resume.pdf"

// function Resume() {
//   return (
//     {
//     <img src= {show} alt = "resume"/>    
//     })
// };
function Resume() {
    return (
        <section className="container">
        <h2 className="top-title">Resume</h2>
        <hr></hr>
        <div>
            <ul>
                <div>
                    <p>Email: EricMalpass@gmail.com</p>
                    <p>Phone Number: (206)920-5275</p>
                    <p>Download: <a href={download} download >Resume</a></p>
                </div>
            </ul>
        </div>
    </section>      
    )};

 export default Resume;