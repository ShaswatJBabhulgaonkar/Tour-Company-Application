import React from "react";

function Head(){
  return <header className="header"><h1>About : Lokseva Tours</h1></header>;
}

function Body(){
  return (
    <section className="section">
    <p><strong><em>Lokseva Tours</em></strong> is a fictional tour coumpany created to learn various aspect of web development.This includes : </p>
    <ol className="c">
      <li> Front end Tech such as :
        <ol>
          <li className="c">JavaScript</li>
          <li className="c">HTML</li>
          <li className="c">CSS</li>
          <li className="c">React</li>
        </ol>
      </li>
    </ol>
    </section>
  );
}

function About(){
  return <main className="main">
            <Head />
            <Body />
        </main>;
}

export default About;
