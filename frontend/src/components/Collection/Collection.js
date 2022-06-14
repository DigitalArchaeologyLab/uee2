import React, { useState } from "react";
import "./Collection.css";

//// Swiper ////

// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
// Core modules imports are same as usual
import { Navigation, FreeMode, Thumbs } from "swiper";

// Styles must use direct files imports
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import "swiper/modules/free-mode/free-mode.scss";
import "swiper/modules/thumbs/thumbs.scss";

function Collection(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="collection">
      <h3>{props.title_eng}</h3>
      <div className="swiper_carousel">
        <Swiper
          style={{
            "--swiper-navigation-color": "var(--ueeGreen01)",
            "--swiper-pagination-color": "var(--ueeGreen01)",
          }}
          spaceBetween={10}
          navigation={true}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs, FreeMode]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {props.filteredImages.map((image) => (
            <div key={image.image_file}>
              <SwiperSlide key={image.image_file} className="swiper_preview">
                <img className="image_preview" src={image.image_file}></img>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs, FreeMode]}
          className="swiper_thumbnails"
        >
          {props.filteredImages.map((image) => (
            <div key={image.image_file}>
              <SwiperSlide key={image.image_file}>
                <img className="image_thumbnail" src={image.image_file}></img>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Collection;
