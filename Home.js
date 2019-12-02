import React from "react";

import Tourcompany from "./images/tourcompany.jpg";
import Myimage from "./images/myimage.jpg";


function Head(){
  return <header className="header"><h1>Lokseva Tours</h1></header>;
}

function Body(){
  return (
  <section className="section">
       
        <img src={Tourcompany} width="400" height="200" />
        <p><i><b>Lokseva Tours</b></i> provides more than 50 group tour products for Europe, almost 50 products for South East Asia, exclusive special tours for ladies, students, senior citizens, and trips to exotic destinations for newlyweds. Besides, we follow a continuous research for new products, themes and a range of travel upgradations that helps us serve the best to our guests.</p>
        <p>Whether it's a corporate tour, romantic delight, adventurous junkies or just a <b>Chota Break</b>, we have ample of tour choices to suit the most of your taste, requirement and budget. So what are you waiting for Hurry up and book a Holiday with Lokseva!</p>
        <img src={Myimage} width="400" height="200" />
  </section>);
}

function Main(){
  return <main className="main">
            <Head />
            <Body />
        </main>;
}

export default Main;
