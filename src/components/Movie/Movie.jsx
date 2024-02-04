// import { Link } from "react-router-dom";
import BtnPlay from "../BtnPlay/BtnPlay";
import "./movie.scss";
import PropTypes from "prop-types";
// const FilmPoster = styled.div`
// background: url(${(props)=>props.poster});
// `
const Movie = ({movie}) => {
  return (
    <div
      style={{
        padding: "7px",
        cursor: "pointer",
      }}
    >
      <div className="film">
        <div className="film__img w-full h-full">
          <div className="film__poster w-full h-[270px]">
            <img src={movie.poster} alt="" className="w-full h-full rounded-[3px]" />
            <div className="film__overlay" />
            <div className="play__trailer">
              {/* class play lấy từ Carousel component*/}
              <BtnPlay cssRoot={"play"} width={48} height={48} urlYoutube={movie.trailer} />
            </div>
          </div>
          {/* <BlockRating danhGia={movie.danhGia} /> */}
        </div>
        <div className="film__content">
          <div className="film__name">
            <div className="name">
              <p>
                <span className="c18">C18</span>
               {movie.movieName}
              </p>
            </div>
            <p className="pt-2">
              {<span className="text_info">120 phút - Tix</span>}
            </p>
          </div>
          <div className="film__button">
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
