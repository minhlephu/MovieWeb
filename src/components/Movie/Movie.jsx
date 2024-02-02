import { Link } from "react-router-dom";
import "./movie.scss";
import PropTypes from "prop-types";
const Movie = ({ movie, comingMovie }) => {
  return (
    <div
      style={{
        padding: "7px",
        cursor: "pointer",
      }}
    >
      <div className="film">
        <div className="film__img">
          <div
            className="film__poster bg-cover bg-center bg-no-repeat rounded-4"        
          >
            <div
              className="film__overlay"
              onClick={() =>
                history.push(`/phim/${movie.maPhim}`, { comingMovie })
              }
            />
            <div className="play__trailer">
              {/* class play lấy từ Carousel component*/}
              {/* <BtnPlay cssRoot={"play"} width={48} height={48} urlYoutube={movie.trailer} /> */}
            </div>
          </div>
          {/* <BlockRating danhGia={movie.danhGia} /> */}
        </div>
        <div className="film__content">
          <div className="film__name">
            <div className="name">
              <p>
                <span className="c18">C18</span>
               Hài tết
              </p>
            </div>
            <p className="pt-2">
              {
                <span className="text_info">
                  120 phút - Tix 
                </span>
              }
            </p>
          </div>
          <div className="film__button">
            {/* nếu thoiLuong = undefined => phim hiện không có lịch chiếu */}
            
              <Link
                style={{ background: comingMovie ? "#60c5ef" : "#fb4226" }}
                // to={{
                //   pathname: `/phim/${movie.maPhim}`,
                //   state: { comingMovie },
                // }}
              >
                {comingMovie ? "THÔNG TIN PHIM" : "MUA VÉ"}
              </Link>
            
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
