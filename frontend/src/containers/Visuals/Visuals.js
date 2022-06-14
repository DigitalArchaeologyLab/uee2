import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Visuals.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CollectionList from "../../components/CollectionList/CollectionList";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Visuals() {
  const [value, setValue] = React.useState("images");
  const [Images, setImages] = useState([
    {
      id: 0,
      title_eng: "",
      title_ar: "",
      title_de: "",
      title_fr: "",
      description: "",
      caption: "",
      places: [],
      periods: [],
      persons: "",
      creator: "",
      source: "",
      rights_holder: "",
      copyright_status: "",
      permission_notes: "",
      image_file: "",
      collection: [],
      arkID: "",
    },
  ]);

  useEffect(() => {
    async function getImages() {
      try {
        const response = await axios.get("/api/images/");
        const allImages = response.data;
        setImages(allImages);
      } catch (err) {
        console.error(err);
      }
    }

    getImages();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header />
      <main className="visuals">
        <div className="visuals__title">
          <h1>Visuals</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor varius turpis neque, fermentum lectus adipiscing. In nec commodo lectus enim morbi. Sit posuere dolor sed facilisis eget. Egestas non ipsum condimentum lectus tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor varius turpis neque, fermentum lectus adipiscing. In nec commodo lectus enim morbi. Sit posuere dolor sed facilisis eget. Egestas non ipsum condimentum lectus tortor.</p>
        </div>

        <section>
          <h2>View by Collection</h2>
          <p>These collections of resources have been curated by experts for a reason. Describe in more detail!</p>
          <CollectionList images={Images} />
        </section>

        <section>
          <h2>View by Resource Type</h2>
          <p>You can also view all of the resources by their type and filter them based on places, time periods, and stuff.</p>
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
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Visuals;
