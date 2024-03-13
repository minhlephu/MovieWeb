import { DatePicker, Modal, Button, Select } from "antd";
import PropTypes from "prop-types";
import FromGroup from "../../../components/common/FromGroup";
import { Label } from "../../../components/label";

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
const ShowAddNew = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        title="Thêm lịch chiếu"
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
            <Label htmlFor="summary">Thời gian chiếu *</Label>
            <DatePicker style={{ zIndex: 10000 }} />
          </FromGroup>
          <FromGroup>
            <Label htmlFor="country">Phim *</Label>
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              style={{
                width: 200,
              }}
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
            <Label htmlFor="country">Loại phim *</Label>
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              style={{
                width: 200,
              }}
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
            <Label htmlFor="country">Phòng chiếu *</Label>
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              style={{
                width: 200,
              }}
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
ShowAddNew.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
export default ShowAddNew;
