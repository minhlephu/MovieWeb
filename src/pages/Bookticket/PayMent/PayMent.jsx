import React from "react";
import "./payMent.scss";

const PayMent = () => {
  const amount = 1200000;
  return (
    <div className="payment">
      <div>
        {/* Tổng tiền thanh toán */}
        <p className="amount payment-item">
          {`${amount.toLocaleString("vi-VI")} đ`}
        </p>

        {/* Thông tin phim và rạp */}
        <div className="payment-item">
          <p className="movie-name">Nhà Bà Nữ</p>
          <p>MT Ciname - Cầu Giấy</p>
          <p>Thứ tư - 20/03/2023 - 12:22 Rạp 3</p>
        </div>

        {/* Ghế đã chọn */}
        <div className="seat-info payment-item">
          <span>{`Ghế A01, A03, D06, E09, F03, G07, F11, H12`}</span>
          <p className="amount-little">
            {`${amount.toLocaleString("vi-VI")} đ`}
          </p>
        </div>

        {/* Input email */}
        <div className="payment-item">
          <label htmlFor="email" className="label-email">
            E-mail
          </label>
          <input
            type="text"
            name="email"
            className="fill-in-email"
            autoComplete="off"
          />
          <p className="error"></p>
        </div>

        {/* Input phonenumber */}
        <div className="payment-item">
          <label htmlFor="" className="label-phone">
            Phone
          </label>
          <input
            type="number"
            name="phone"
            className="fill-in-phone"
            autoComplete="off"
          />
          <p className="error"></p>
        </div>
        {/* Mã giảm giá */}
        <div className="payment-item">
          <label className="label">Mã giảm giá</label>
          <input
            type="text"
            value="Tạm thời không hỗ trợ..."
            readOnly
            className="fill-in"
          />
          <button className="btn-discount">Áp dụng</button>
        </div>

        {/* Hình thức thanh toán */}
        <div className="selected-payment-method">
          <label htmlFor="" className="label">
            Hình thức thanh toán
          </label>
          <p className="toggle-notice">
            Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
          </p>

          <div className="form-payment">
            <div className="form-payment-item">
              <input
                className="input"
                type="radio"
                name="paymentMethod"
                value="Zalopay"
              />
              <img
                className="img-pay"
                src="/img/bookticket/zalo.jpg"
                alt="zalopay"
              />
              <label htmlFor="">Thanh toán qua ZaloPay</label>
            </div>

            <div className="form-payment-item">
              <input
                className="input"
                type="radio"
                name="paymentMethod"
                value="Visa, Master, JCB"
              />
              <img
                className="img-pay"
                src="/img/bookticket/visa.png"
                alt="visa"
              />
              <label>Visa, Master, JCB</label>
            </div>

            <div className="form-payment-item">
              <input
                className="input"
                type="radio"
                name="paymentMethod"
                value="ATM nội địa"
              />
              <img
                className="img-pay"
                src="/img/bookticket/atm.png"
                alt="visa"
              />
              <label>Thẻ ATM nội địa</label>
            </div>

            <div className="form-payment-item">
              <input
                className="input"
                type="radio"
                name="paymentMethod"
                value="Cửa hàng tiện ích"
              />
              <img
                className="img-pay"
                src="/img/bookticket/cuahang.png"
                alt="visa"
              />
              <label>Thanh toán tại cửa hàng tiện ích</label>
            </div>
          </div>
        </div>

        {/* đặt vé */}
        <div className="bottom-section">
          <button className="btn-book">
            <p className="txt-book">Đặt Vé</p>
          </button>
        </div>
      </div>

      {/* notice */}
      <div className="notice">
        <img
          className="img-notice"
          src="/img/bookticket/exclamation.png"
          alt="notice"
        />
        <span>Vé đã mua không thể đổi hoặc hoàn tiền</span>
        <p>
          Mã vé sẽ được gửi qua tin nhắn{" "}
          <span className="contact-color">ZMS</span> (tin nhắn Zalo) và{" "}
          <span className="contact-color">Email</span> đã nhập.
        </p>
      </div>
    </div>
  );
};

export default PayMent;
