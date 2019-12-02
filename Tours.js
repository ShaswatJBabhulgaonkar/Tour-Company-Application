import React from "react";
import PlannedTours from "../tours.json";

class Tours extends React.Component{

  render(){
    return <main className="main">
              <header className="header"><h1>Virtual Tours</h1></header>

              <section className="section">

              <table className="Table">
                <thead key="tourHead" className="tourHeader">
                  <tr>
                  <th><strong>Name</strong></th>
                  <th><strong>Date</strong></th>
                  </tr>
                </thead>
                <tbody>
              {PlannedTours.virtualTours.map((key,i) => (
                <tr key={i}>
                <td>{key.name}</td>
                <td>{key.date}</td>
                </tr>
              ))}
                </tbody>
              </table>

              <header className="header"><h1>Physical Tours</h1></header>
              <table className="Table">
                <thead key="tourHead" className="tourHeader">
                  <tr>
                  <th><strong>Name</strong></th>
                  <th><strong>Date</strong></th>
                  </tr>
                </thead>
                <tbody>
              {PlannedTours.physicalTours.map((key,i) => (
                <tr key={i}>
                <td>{key.name}</td>
                <td>{key.date}</td>
                </tr>
              ))}
                </tbody>
              </table>
              </section>
            </main>;
  }
}

export default Tours;
