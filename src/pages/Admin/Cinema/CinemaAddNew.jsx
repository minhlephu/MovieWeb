import { Input, Modal, Button, Select } from "antd";
import PropTypes from "prop-types";
import FromGroup from "../../../components/common/FromGroup";
import { Label } from "../../../components/label";

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const CinemaAddNew = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        title="Thêm phim mới"
        open={isOpen}
        onCancel={onClose}
        width={800}
        footer={[
          <Button key="back" onClick={onClose}>
            Hủy
          </Button>,
          <Button key="submit">Thêm</Button>,
        ]}
      >
        <form>
          <FromGroup>
            <Label htmlFor="name">Tên rạp *</Label>
            <Input name="name" placeholder="Tên phim" />
          </FromGroup>
          <FromGroup>
            <Label htmlFor="trailer">Địa chỉ rạp *</Label>
            <Input name="trailer" placeholder="Trailer" />
          </FromGroup>
          <FromGroup>
            <Label htmlFor="language">Thành phố *</Label>
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          </FromGroup>
        </form>
      </Modal>
    </>
  );
};
CinemaAddNew.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
export default CinemaAddNew;
