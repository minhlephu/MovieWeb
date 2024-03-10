import { Input, Modal, InputNumber, Button, Select } from "antd";
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

const TheaterAddNew = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        title="Thêm phòng chiếu"
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
            <Label htmlFor="name">Tên phòng chiếu *</Label>
            <Input name="name" placeholder="Tên phim" />
          </FromGroup>

          <FromGroup>
            <Label htmlFor="country">Cụm rạp *</Label>
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
          <FromGroup>
            <Label htmlFor="country">Số lượng ghế *</Label>
            <InputNumber
              style={{ width: 200 }}
              name="duration"
              min={1}
              max={300}
              defaultValue={120}
            />
          </FromGroup>
        </form>
      </Modal>
    </>
  );
};
TheaterAddNew.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
export default TheaterAddNew;
