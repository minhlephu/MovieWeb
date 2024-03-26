import { Input, Modal, Button, Select, Form } from "antd";
import PropTypes from "prop-types";
import FromGroup from "../../../components/common/FromGroup";
import { Label } from "../../../components/label";
import { cityService } from "../../../services/CityService";
import { useEffect, useState } from "react";

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
  const [form] = Form.useForm();
  const [cites, setCities] = useState();

  const fetchDataCity = () => {
    cityService.getListCity().then((result) => {
      setCities(result);
    });
  };

  useEffect(() => {
    fetchDataCity();
  }, []);

  return (
    <>
      <Modal
        title="Thêm thông tin rạp chiếu mới"
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
        <Form
          form={form}
          layout="horizontal"
          labelCol={{
            span: 4,
          }}
        >
          <Form.Item
            label="Tên rạp"
            name="cinemaName"
            rule={[{ require: true, message: "Vui lòng nhập tên rạp chiếu" }]}
          >
            <Input name="name" placeholder="Nhập tên rạp chiếu" />
          </Form.Item>
          <Form.Item
            label="Địa chỉ"
            name="cinemaAddress"
            rule={[{ require: true, message: "Vui lòng nhập tên rạp chiếu" }]}
          >
            <Input
              name="address"
              placeholder="VD: Số 1, Xuân Thuỷ, Cầu Giấy, Hà Nội"
            />
          </Form.Item>
          <Form.Item
            label="Tỉnh/Thành phố"
            name="cinemaCity"
            rule={[{ require: true, message: "Vui lòng nhập tên rạp chiếu" }]}
          >
            <Select>
              <Select.Option value="1">Hà Nội</Select.Option>
              <Select.Option value="2">TP Hồ Chí Minh</Select.Option>
              <Select.Option value="3">Đà Nẵng</Select.Option>
              <Select.Option value="4">Nghệ An</Select.Option>
              <Select.Option value="5">Ninh Bình</Select.Option>
              <Select.Option value="6">Thanh Hoá</Select.Option>
              <Select.Option value="7">Hà Tĩnh</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
CinemaAddNew.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
export default CinemaAddNew;
