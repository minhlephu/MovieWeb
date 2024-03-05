import React, { useState, useEffect, useRef } from 'react'
import "./customSlider.scss"
import Slider from 'react-slick'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  {
    id: 1,
    url: "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2024/2/16/phim-mai-cua-tran-thanh-170805257051474670729.jpg"
  },
  {
    id: 2,
    url: "https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/tpuohuo/2024_02_13/32617365217685702-aea184ad-fbaf-4fc3-a8de-b193fd5ef53ei1pzuh7a-245.png.webp"
  },
  {
    id: 3,
    url: "https://cdnphoto.dantri.com.vn/IRRwGv8NJUF0zmfQpMFXdI1poIY=/thumb_w/1020/2023/12/19/tran-thanh-phuong-anh-dao-tuan-tran-1702996425117.jpg"
  },
  {
    id: 4,
    url: "https://vcdn-giaitri.vnecdn.net/2023/11/28/tran-thanh-mai-2-3403-1701151094.jpg"
  },
  {
    id: 5,
    url: "https://cdnphoto.dantri.com.vn/C-a-t-3T9tund8ModvF9Pc-CzJc=/thumb_w/1020/2024/02/23/img6258-1708697408057.jpg?watermark=true"
  },
  {
    id: 6,
    url: "https://ivcdn.vnecdn.net/giaitri/images/web/2024/01/10/trailer-phim-mai-cua-tran-thanh-1704879349.jpg"
  },
] 

const CustomSlide = (props) => {
  const { index, ...otherProps } = props;
  return (
    <div {...otherProps}>
      <img 
        src={props.urlImage} 
        alt="" 
        style={{
          width: "100%",
          height: "470px",
          objectFit: "cover"
        }}
      />
    </div>
  );
}

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{ 
        ...style, 
        display: "block", 
        color: "#CECECE", 
        fontSize: "50px", 
        right: "-60px"
      }}
      onClick={onClick}
    />
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosNewIcon
      className={className}
      style={{ 
        ...style, 
        display: "block", 
        color: "#CECECE", 
        fontSize: "50px", 
        left: "-60px"
      }}
      onClick={onClick}
    />
  );
}

const CustomSlider = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    customPaging: index => (
      <a href="">
        <img
          src={images[index].url}
          alt=""
        />
      </a>
    ) 
  }

  return (
    <div className="slider-container">
      <Slider 
        ref={slider => {
          sliderRef = slider
        }}
        {...settings}
      >
        {images.map((item, index) => (
          <CustomSlide index={index} urlImage={item.url}/>
        ))}
      </Slider>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <button className="button-prev" onClick={previous}>
          <ArrowBackIosNewIcon style={{ color: "#CECECE" }}/>
        </button>
        <button className="button-next" onClick={next}>
          <ArrowForwardIosIcon style={{ color: "#CECECE" }}/>
        </button>
      </div>
    </div>
  );
}

export default CustomSlider