import React from "react";
import "./itemComment.scss";
import StarIcon from "@mui/icons-material/Star";

const ItemComment = () => {
  return (
    <div className="item-comment">
      <div className="item-box">
        <div className="item-box-top flex">
          <strong>Khách</strong>
          <div className="stars-core flex">
            <StarIcon className="item-star" />
            <StarIcon className="item-star" />
            <StarIcon className="item-star" />
            <StarIcon className="item-star" />
            <StarIcon className="item-star" />
          </div>
          <span>5</span>
        </div>
        <p className="content-cmt">Phim hay mà kết đắng quá</p>
        <p className="date-up">20/02/2024</p>
      </div>
      <div className="name-acc">Nguyễn Văn Thọ</div>
    </div>
  );
};

export default ItemComment;
