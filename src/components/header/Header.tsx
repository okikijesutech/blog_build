import { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaDollarSign,
} from "react-icons/fa";
import "./header.css";
import image1 from "../../assets/Screenshot1.png";
import image2 from "../../assets/Screenshot2.png";
import image3 from "../../assets/Screenshot3.png";
import image4 from "../../assets/Screenshot4.png";

const images = [image1, image2, image3, image4];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className='carousel'>
      <button className='carousel-control prev' onClick={prevSlide}>
        <FaArrowAltCircleLeft size={24} style={{ color: "black" }} />
      </button>
      <div className='carousel-images'>
        {images.map((image, index) => (
          <>
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={index === currentIndex ? "active" : "inactive"}
            />
            <FaDollarSign style={{ color: "black" }} />
          </>
        ))}
      </div>
      <button className='carousel-control next' onClick={nextSlide}>
        <FaArrowAltCircleRight size={24} style={{ color: "black" }} />
      </button>
    </div>
  );
};

export default Header;
