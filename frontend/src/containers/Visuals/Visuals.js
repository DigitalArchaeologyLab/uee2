import * as React from "react";
import "./Visuals.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Visuals() {
  const [value, setValue] = React.useState("images");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header />
      <main className="visuals">
        <div className="visuals__title">
          <h1>Visuals</h1>
        </div>

        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs"
        >
          <Tab value="images" label="Images" />
          <Tab value="videos" label="Videos" />
          <Tab value="models" label="3D Models" />
        </Tabs>

        <div className="tab__contents">{value}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Visuals;
