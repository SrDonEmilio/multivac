import React, { useEffect } from "react";
import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

import './Computers-table.sass'

const Computers = ({ data }) => {
  useEffect(() => {
    let lol = Grid;
    console.log(lol);
  });

  return (
    <>
      <div id="computers">
        <Grid
          data={data}
          columns={[
            {
              id: "rank",
              name: "Rank",
              formatter: (cell, data) =>
                _(<p computer-rank={data.cells[0].data}>{cell}</p>),
            },
            {
              id: "systemName",
              name: "System",
              formatter: (cell, data) =>
                _(<p computer-rank={data.cells[0].data}>{cell}</p>),
              sort: { enabled: false },
            },
            {
              id: "country",
              name: "Country",
              formatter: (cell, data) =>
                _(<p computer-rank={data.cells[0].data}>{cell}</p>),
            },
            {
              id: "rMax",
              name: "Rmax (TFlop/s)",
              sort: { enabled: false },
              formatter: (cell, data) =>
                _(<p computer-rank={data.cells[0].data}>{cell}</p>),
            },
          ]}
          sort={true}
          search={true}
          pagination={{
            enabled: true,
            limit: 10,
          }}
          language={{
            search: {
              placeholder: "🔍 Search...",
            },
          }}
        />
      </div>
    </>
  );
};

export default Computers;
