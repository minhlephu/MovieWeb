import { DatePicker, Modal, Button, Form } from "antd";
import PropTypes from "prop-types";
import FromGroup from "../../../components/common/FromGroup";
import { Label } from "../../../components/label";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
});
const TimeFrameAddNew = ({ isOpen, onClose }) => {
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const handleStartTime = (date, dateString) => {
    setStartTime(dateString);
  };
  const handleEndTime = (date, dateString) => {
    setEndTime(dateString);
  };
  const handleAddTimeFrame = () => {
    const timeFrame = {
      start: startTime,
      end: endTime,
    };
    console.log(timeFrame);
  };
  const { handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const [form] = Form.useForm();
  return (
    <>
      <Modal
        title="Thêm TimeFrame"
        open={isOpen}
        onCancel={onClose}
        width={800}
        onOk={handleOk}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input the title of collection!",
              },
            ]}
          >
            <DatePicker
              onChange={handleStartTime}
              picker="time"
              style={{ zIndex: 10000 }}
            />
          </Form.Item>
          <FromGroup>
            <Label htmlFor="summary">Thời gian bắt đầu *</Label>
            <DatePicker
              onChange={handleStartTime}
              picker="time"
              style={{ zIndex: 10000 }}
            />
          </FromGroup>
          <FromGroup>
            <Label htmlFor="summary">Thời gian kết thúc *</Label>
            <DatePicker
              onChange={handleEndTime}
              picker="time"
              style={{ zIndex: 10000 }}
            />
          </FromGroup>
        </Form>
      </Modal>
    </>
  );
};
TimeFrameAddNew.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
export default TimeFrameAddNew;
