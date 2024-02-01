import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import homeCarouselData from "../../constrants/homeCarouselData";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "./carousel.css";
function NextArrow(props) {
  const { onClick } = props;
  return (
    <ArrowForwardIosIcon
      sx={{
        height: 150,
        width: 50,
        transform: "translateY(-50%)",
        color: "#d8d8d8 !important",
        transition: "all .2s",
        "&:hover": { color: "#fb4226 !important" },
      }}
      onClick={onClick}
      className="absolute z-[2] top-[50%]  z-2 right-4 cursor-pointer"
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <ArrowBackIosIcon
      sx={{
        height: 150,
        width: 50,
        transform: "translateY(-50%)",
        color: "#d8d8d8 !important",
        transition: "all .2s",
        "&:hover": { color: "#fb4226 !important" },
      }}
      onClick={onClick}
      className="absolute z-[2] top-[50%] z-2 left-4 cursor-pointer"
    />
  );
}
const CarouselWeb = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slickdotsbanner",
  };

  return (
    <div className="relative z-0">
      <Slider {...settings}>
        {homeCarouselData.map((banner) => {
          return (
            <div key={banner.maPhim} className="relative z-1">
              <img
                src={banner?.hinhAnh}
                alt="banner"
                className="w-full h-full"
              />
              <div
                className="absolute w-full h-full bg-gradient-to-t from-black via-transparent to-transparent top-0"
                onClick={() => history.push(`/phim/${banner.maPhim}`)}
              />
              {/* <BtnPlay cssRoot={"play"} urlYoutube={banner.trailer} /> */}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
NextArrow.propTypes = {
  onClick: PropTypes.func,
};
PrevArrow.propTypes = {
  onClick: PropTypes.func,
};
export default CarouselWeb;
