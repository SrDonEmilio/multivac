import React, { useState, useEffect } from "react";
import Loading from "./containers/Loading/Loading";
import Computers from "./containers/Computers/Computers";

import "normalize.css";
import './fonts/fonts.scss'
import "./App.sass";

import DataComputers from "./data/june2021.json";

import logo from "./img/logo-horizontal.png";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setData(DataComputers);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <header>
        <img id="logo-header" src={logo} alt="logo" />
        <h1 style={{ display: "none" }}>Ranking List Supercomputers</h1>
      </header>
      <div className="container" id="content">
        <Computers data={data} />
      </div>
      <div id="legal">
        <h3>Legal</h3>
        <p>
          Information obtained from{" "}
          <a href="https://www.top500.org">TheTop500</a>
          <br />
          This website may contain links to other Internet sites on the World
          Wide Web. NextUp.dev provides such links for your convenience only,
          and is not responsible for the content of any website linked to or
          from this site. Links from this site to any other website do not mean
          that NextUp.dev approves of, endorses, or recommends that website.
          NextUp.dev disclaims all warranties, express or implied, as to the
          accuracy, legality, reliability, or validity of any content on any
          other website. If and to the extent third parties provide information
          or content to NextUp.dev, NextUp.dev disclaimes any responsability to
          the accuracy of such third party content. <br />
          All logos are trademarks of their respective owners.
        </p>
      </div>
    </>
  );
};

export default App;
