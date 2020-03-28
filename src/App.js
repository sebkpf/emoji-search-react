// import packages and stylesheet
import React, { useState } from "react";
import "./App.css";

// import emoji data
import data from "./data.json";

// import components
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";

function App() {
  const [results, setResults] = useState(data);

  // function called everytime input is changed
  const search = event => {
    let results = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].keywords.indexOf(event.target.value.toLowerCase()) !== -1) {
        results.push(data[i]);
      }
    }
    setResults(results);
  };
  console.log(results);

  return (
    <main>
      <Search search={search} />
      <ul className="lines">
        {results.map((emoji, key) => {
          return (
            <li key={key}>
              <Line symbol={emoji.symbol} title={emoji.title} />
            </li>
          );
        })}
      </ul>
      <Footer />
    </main>
  );
}

export default App;
