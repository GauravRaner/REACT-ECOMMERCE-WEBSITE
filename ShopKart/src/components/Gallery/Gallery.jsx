import React from 'react';
import Img1 from "../../assets/gallery1.jpg";
import Img2 from "../../assets/gallery2.jpg";
import Img3 from "../../assets/gallery3.jpg";
import Img4 from "../../assets/gallery4.jpg";
import Img5 from "../../assets/gallery5.jpg";
import Img6 from "../../assets/gallery6.jpg";
import './Gallery.css';

const Gallery = () => {
  return (
    <>
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-row">
            <div className="gallery-column">
              <div className="gallery-item">
                <img alt="gallery" src={Img1} />
              </div>
              <div className="gallery-item">
                <img alt="gallery" src={Img2} />
              </div>
              <div className="gallery-item">
                <img alt="gallery" src={Img3} />
              </div>
            </div>
            <div className="gallery-column">
              <div className="gallery-item">
                <img alt="gallery" src={Img6} />
              </div>
              <div className="gallery-item">
                <img alt="gallery" src={Img4} />
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
