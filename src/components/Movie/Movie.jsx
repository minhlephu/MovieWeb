import BtnPlay from "../BtnPlay/BtnPlay";
import "./movie.scss";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
const Movie = ({ movie }) => {
  return (
    <div
      style={{
        padding: "7px",
        cursor: "pointer",
      }}
    >
      <div className="film">
        <div className="film__img w-full h-full ">
          <div className="film__poster w-full h-full">
            <img
              src={movie.poster}
              alt=""
              className="w-full h-full rounded-[20px]"
            />
            <div
              className="age"
              style={{ position: "absolute", top: "10px", left: "10px" }}
            >
              T{movie.age}
            </div>
            <div className="film__overlay rounded-[20px]" />
            <div className="play__trailer">
              {/* class play lấy từ Carousel component*/}
              <BtnPlay
                cssRoot={"play"}
                width={48}
                height={48}
                urlYoutube={movie.trailer}
              />
            </div>
          </div>
          {/* <BlockRating danhGia={movie.danhGia} /> */}
        </div>
        <div className="film__content">
          <div className="film__name">
            <div className="name">
              <div>
                {movie.movieName}
              </div>
            </div>
            <div className="line">
              <span className="titlle">Thể loại: &nbsp;</span>
              <span className="text_info">{movie.genre}</span>
            </div>
            <div className="line">
              <span className="titlle">Thời lượng: &nbsp;</span>
              <span className="text_info">{movie.duration} phút</span>
            </div>
          </div>
          <div className="film__button">
            <Button className="film__button" variant="contained">
              MUA VÉ
            </Button>
            {/* nếu thoiLuong = undefined => phim hiện không có lịch chiếu */}

            {/* <span
              style={{ background: "#fb4226" }}
              // to={{
              //   pathname: `/phim/${movie.maPhim}`,
              //   state: { comingMovie },
              // }}
            >
              MUA VÉ
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};
Movie.propTypes = {
  movie: PropTypes.node,
  comingMovie: PropTypes.node,
};
export default Movie;
