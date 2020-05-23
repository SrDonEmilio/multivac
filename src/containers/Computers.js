import React, { useState } from "react";
import Description from "./Description";
import Computer from "../components/Computer";

const Computers = ({ data }) => {
  const [description, setDescription] = useState([]);
  const [openDescription, setOpenDescription] = useState(null);

  const activateDescription = (event) => {
    setDescription(event);
    setOpenDescription("active");
  };

  const toggleOpen = () => {
    if (openDescription !== null) setOpenDescription(null);
  };

  return (
    <>
      <div id="computers" onClick={(e) => toggleOpen()}>
        {Object.values(data).map((data) => {
          return (
            <Computer
              data={data}
              key={data.rank}
              passData={(event) => activateDescription(event)}
            />
          );
        })}
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
      <Description
        className={openDescription}
        description={description}
        changeClass={(e) => toggleOpen()}
      />
    </>
  );
};

export default Computers;
