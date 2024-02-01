
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import homeCarouselData from "../../constrants/homeCarouselData";
import Slider from "react-slick";
// import { styled } from "@mui/system";
function NextArrow() {
    return <ArrowForwardIosIcon className="absolute  z-2 w-[50px] h-[100px]"/>;
  }
  
  function PrevArrow() {
    return <ArrowBackIosIcon className="absolute z-2 bottom-[50%]"  />;
  }
const CarouselWeb = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="relative">
          <Slider {...settings}>
              {homeCarouselData.map((banner) => {
                  return (
                      <div key={banner.maPhim} className="relative z-1">
                          <img src={banner?.hinhAnh} alt="banner" className="w-full h-full"/>
                          <div
                              className="absolute w-full h-full bg-gradient-to-t from-black via-transparent to-transparent top-0"
                              onClick={() => history.push(`/phim/${banner.maPhim}`)} />
                          {/* <BtnPlay cssRoot={"play"} urlYoutube={banner.trailer} /> */}
                      </div>
                  );
              })}
          </Slider>
      </div>    
  );
};

export default CarouselWeb;
