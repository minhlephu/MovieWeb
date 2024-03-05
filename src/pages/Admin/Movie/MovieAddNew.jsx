import { DatePicker, Input, Modal, Typography } from "antd";
import PropTypes from "prop-types";
import FromGroup from "../../../components/common/FromGroup";
import { Label } from "../../../components/label";
import TextArea from "antd/es/input/TextArea";
const MovieAddNew = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        title="Thêm phim mới"
        open={isOpen}
        onOk={onClose}
        onCancel={onClose}
        width={800}
      >
        <form>
          <FromGroup>
            <Label htmlFor="name">Tên phim *</Label>
            <Input name="name" placeholder="Tên phim" />
          </FromGroup>
          <FromGroup>
            <Label htmlFor="trailer">Trailer *</Label>
            <Input name="trailer" placeholder="Trailer" />
          </FromGroup>
          <FromGroup>
            <Label htmlFor="summary">Mô tả *</Label>
            <TextArea rows={4} name="summary" placeholder="Mô tả phim" />
          </FromGroup>
          <FromGroup>
            <Label htmlFor="summary">Ngày khởi chiếu *</Label>
            <DatePicker style={{ zIndex: 10000 }} />
          </FromGroup>
          <FromGroup>
            <Label htmlFor="actors">Diễn Viên *</Label>
            <Input name="actors" placeholder="Tên diễn viên" />
          </FromGroup>
          <FromGroup>
            <Label htmlFor="directors">Đạo diễn *</Label>
            <Input name="directors" placeholder="Tên đạo diễn" />
          </FromGroup>
          <FromGroup>
            <Label htmlFor="country">Nước sản xuất *</Label>
            <Input name="country" placeholder="Nước sản xuất" />
          </FromGroup>
          <FromGroup>
            <Label htmlFor="language">Ngôn ngữ *</Label>
            <Input name="language" placeholder="Nước sản xuất" />
          </FromGroup>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </form>
      </Modal>
    </>
  );
};
MovieAddNew.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
export default MovieAddNew;
