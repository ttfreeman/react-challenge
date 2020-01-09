import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  // MOST OF YOUR CODE GOES HERE

  return (
    <div className="App">
        <div>
            <h2 className="subtitle">React Challenge! Good Luck</h2>
        </div>
        <div class="content">
            {/* Display Data */}
            <div className="input-display">
                <p>Display Name: </p>
                <p>Display Age: </p>
            </div>

            {/* Collect User Inputs */}
            <div className="inputs">
                {/* Input name */}
                <div className="field">
                <label className="label">Name: </label>
                <input className="input" type="text" placeholder="Enter your name, ex. Kevin" />
                </div>

                {/* Input age */}
                <div className="field">
                <label className="label">&nbsp;&nbsp;&nbsp;Age: </label>
                <input className="input" type="number" placeholder="Enter your age, ex. 44" />
                </div>
            </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);