import React, { useState } from "react";
import Description from "../Description/Description";
import Computer from "../../components/Computer/Computer";

import './Computers.sass'

const Computers = ({ data }) => {
  const [computerDescription, setComputerDescription] = useState([]);
  const [openDescription, setOpenDescription] = useState(null);

  const activateDescription = (data) => {
    setComputerDescription(data);
    setOpenDescription("active");
  };

  const toggleOpen = () => {
    if (openDescription !== null) setOpenDescription(null);
  };

  return (
    <>
      <div id="computers">
        {Object.values(data).map((data) => {
          return (
            <Computer
              computerData={data}
              key={data.rank}
              onClick={() => activateDescription(data)}
            />
          );
        })}
      </div>
      <Description
        className={openDescription}
        computerData={computerDescription}
        changeClass={(e) => toggleOpen()}
        openStatus={openDescription}
      />
    </>
  );
};

export default Computers;
