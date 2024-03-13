import React, { useRef } from "react";
import "./listSeat.scss";
import { NameOfTheater } from "../../../components";
import formatDate from "../../../util/formatDate";
import { detailMovie } from "../../../constrants/fakeData";
import { logoTheater, colorTheater } from "../../../constrants/theaterData";
import TimeCountdown from "../TimeCountdown/TimeCountdown";

const ListSeat = () => {
  const domToSeatElement = useRef(null);

  const color = (seat) => {
    let color;
    if (seat.loaiGhe === "Thuong") {
      color = "#3e515d";
    }
    if (seat.loaiGhe === "Vip") {
      color = "#f7b500";
    }
    if (seat.selected) {
      color = "#44c020";
    }
    if (seat.daDat) {
      color = "#99c5ff";
    }
    return color;
  };

  const logMovies = async () => {
    const response = await fetch(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=46520"
    );
    const movies = await response.json();
    console.log(movies.danhSachGhe[1]);
    return movies;
  };

  logMovies();

  return (
    <div className="list-seat">
      {/* Thông tin phim */}
      <div className="info-countdown">
        <div className="info-theater">
          <img
            src={
              "https://gigamall.com.vn/data/2019/05/06/11365490_logo-cgv-500x500.jpg"
            }
            alt="phim"
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <div className="text">
            <NameOfTheater nameOfTheater={"CGV-Golden Plaza"} />
            <p className="text-time">Thứ năm - 06:05 - Rạp 6</p>
          </div>
        </div>
        <div className="count-down">
          <p className="time-title">Thời gian giữ ghế</p>
          <TimeCountdown />
        </div>
      </div>

      <div className="overflow-seat">
        <div className="invariant-width">
          {/* Mô phỏng màn hình */}
          <img
            className="screen"
            src="/img/bookticket/screen.png"
            alt="screen"
          />
          {/* Danh sách ghế */}
          <div className="seat-select"></div>
        </div>
      </div>
    </div>
  );
};

export default ListSeat;
