import React, { useState, useEffect } from "react";
import Loading from "./containers/Loading";
import Computers from "./containers/Computers";
import "./App.css";

import DataComputers from "./thetopten.json";
const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setData(DataComputers.list.site);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) return <Loading />;

  return (
    <div id="container">
      <header>
        <h1>Ranking List Supercomputers</h1>
      </header>
      <Computers data={data} />
    </div>
  );
};

export default App;
