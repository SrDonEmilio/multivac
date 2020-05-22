import React, { Component } from "react";
import Computer from "./containers/Computer";

import Data from "./thetopten.json";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const dataJSON = { Data };
    this.setState({ data: dataJSON.Data.list.site });
  }

  render() {
    const { data } = this.state;
    return (
      <div id="container">
        <header>
          <h1>Ranking List Supercomputers</h1>
        </header>
        <div id="computers">
          {Object.values(data).map((data) => {
            return <Computer data={data} key={data.rank} />;
          })}
        </div>
        <div className="description-container">
        </div>
      </div>
    );
  }
}

export default App;
