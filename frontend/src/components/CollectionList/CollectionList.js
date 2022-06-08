import React, { useState, useEffect } from "react";
import axios from "axios";
import Collection from "../Collection/Collection";

function CollectionList(props) {
  const [CollectionList, setCollectionList] = useState([
    {
      id: 0,
      title_eng: "",
      title_ar: "",
      title_de: "",
      title_fr: "",
      description: "",
      source: "",
      collection_creator: "",
    },
  ]);

  useEffect(() => {
    async function getCollectionList() {
      try {
        const response = await axios.get("/api/collections/");
        const allCollections = response.data;
        setCollectionList(allCollections);
      } catch (err) {
        console.error(err);
      }
    }

    getCollectionList();
  }, []);

  let filteredImages = [];

  const filterImagesByCollection = (collectionID, images) => {
    filteredImages = [];
    images.forEach((image) => {
      for (let i = 0; i < image.collection.length; i++) {
        if (image.collection[i] === collectionID) {
          if (filteredImages.indexOf(image) === -1) {
            filteredImages.push(image);
          }
        }
      }
    });
  };

  return (
    <div>
      <div className="collectionList">
        {CollectionList.map((collection) => (
          <div className="collectionList_collection" key={collection.id}>
            {filterImagesByCollection(collection.id, props.images)}
            <Collection
              id={collection.id}
              title_eng={collection.title_eng}
              filteredImages={filteredImages}
            />
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionList;
