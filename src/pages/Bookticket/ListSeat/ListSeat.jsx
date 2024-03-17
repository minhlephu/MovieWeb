import React, { useEffect, useRef, useState } from "react";
import "./listSeat.scss";
import { NameOfTheater } from "../../../components";
import formatDate from "../../../util/formatDate";
import { detailMovie } from "../../../constrants/fakeData";
import { logoTheater, colorTheater } from "../../../constrants/theaterData";
import TimeCountdown from "../TimeCountdown/TimeCountdown";
import WeekendIcon from "@mui/icons-material/Weekend";
import { listSeat } from "./fakeListSeat";

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

  const changeList = () => {
    let initCode = 64;
    const listSeatEdit = listSeat?.map((seat, i) => {
      // Thêm label: A01, A02,..., set seleted: false
      if (i % 16 === 0) initCode++;
      const txt = String.fromCharCode(initCode);
      const number = ((i % 16) + 1).toString().padStart(2, 0);
      return { ...seat, label: txt + number };
    });
    return listSeatEdit;
  };

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
          <div className="seat-select">
            {changeList()?.map((seat, i) => (
              <div className="seat" key={seat.maGhe} ref={domToSeatElement}>
                {/* Label A, B, C,... đầu mỗi hàng ghế */}
                {(i === 0 || i % 16 === 0) && (
                  <div className="label">{seat?.label?.slice(0, 1)}</div>
                )}
                {/* Số thứ tự */}
                {seat.selected && (
                  <p className="seat-name">
                    {Number(seat.label.slice(1)) < 10
                      ? seat.label.slice(2)
                      : seat.label.slice(1)}
                  </p>
                )}
                {/* label ghế đã có người đặt */}
                {seat.daDat && (
                  <img
                    className="seat-locked"
                    src="/img/bookticket/notchoose.png"
                    alt="notchoose"
                  />
                )}
                {/* icon ghế */}
                <WeekendIcon
                  style={{ color: color(seat) }}
                  className="seat-icon"
                />
                {/* đường viền chỉ vùng ghế */}
                {seat.label === "E08" && (
                  <img
                    className="view-center"
                    src="/img/bookticket/seatcenter.png"
                    alt="seatcenter"
                  />
                )}
                {/* vùng bắt sự kiện click */}
                <div
                  className="area-click"
                  onClick={() => handleSelectedSeat(seat)}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* thông tin các loại ghế */}
      <div className="note-seat">
        <div className="type-seats">
          <div>
            <WeekendIcon style={{ color: "#3e515d", fontSize: 27 }} />
            <p>Ghế thường</p>
          </div>
          <div>
            <WeekendIcon style={{ color: "#f7b500", fontSize: 27 }} />
            <p>Ghế vip</p>
          </div>
          <div>
            <WeekendIcon style={{ color: "#44c020", fontSize: 27 }} />
            <p>Ghế đang chọn</p>
          </div>
          <div>
            <div style={{ position: "relative" }}>
              <p className="posi-X">x</p>
              <WeekendIcon style={{ color: "#99c5ff", fontSize: 27 }} />
            </div>
            <p>Ghế đã được mua</p>
          </div>
        </div>
        <div className="position-view">
          <span>
            <span className="line-center" />
            <span>Ghế trung tâm</span>
          </span>
          <span className="line">
            <span className="line-beautiful" />
            <span>Ghế Đẹp</span>
          </span>
        </div>
      </div>

      {/* modalleft */}
      <div className="modal-left">
        <div className="opacity-img"></div>
      </div>
    </div>
  );
};

export default ListSeat;
