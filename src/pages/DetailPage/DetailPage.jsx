import "./detailPage.scss";
import {
  CustomSlier,
  InfoMovie,
  ItemComment,
  TabsBooking,
} from "../../components";
import Header from "../../layouts/MainLayout/Header/Header";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const DetailPage = () => {
  return (
    <>
      <Header />
      <div className="container-detail w-full max-w-[980px] mx-auto">
        <CustomSlier />
        <InfoMovie />
        <TabsBooking />
        {/* Form comment */}
        <div className="rate-review">
          <h2 className="text-2xl font-semibold">Xếp hạng và đánh giá phim</h2>
          <form className="form-commment flex h-[100px]">
            <div className="score-star w-[163px] flex flex-col justify-center items-center">
              <strong>Xếp hạng</strong>
              <div className="stars flex">
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
              <span>5 điểm</span>
            </div>
            <div className="grow">
              <textarea
                className="h-[98px] w-full p-[10px] border-none outline-none"
                id="txtComment"
                title="Vui lòng viết đánh giá phim"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="w-[163px] relative">
              <button className="btn-send-comment w-full h-full">
                Bình luận
              </button>
              <span className="score_etc absolute">0/220 Ký tự</span>
            </div>
          </form>
        </div>

        {/* List comment */}
        <div>
          <ItemComment />
          <ItemComment />
          <ItemComment />
        </div>
      </div>
    </>
  );
};

export default DetailPage;
