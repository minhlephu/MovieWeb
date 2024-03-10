import {
  DatePicker,
  Input,
  Modal,
  Switch,
  InputNumber,
  Button,
  message,
  Upload,
  Select,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import FromGroup from "../../../components/common/FromGroup";
import { Label } from "../../../components/label";
import TextArea from "antd/es/input/TextArea";
const props = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const TimeFrameAddNew = ({ isOpen, onClose }) => {
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
          <div className="flex mb-4">
            <div className="w-[40%]">
              <Label htmlFor="duration">Thời lượng phim *</Label>
            </div>
            <div className="w-[60%]">
              <InputNumber
                name="duration"
                min={1}
                max={300}
                defaultValue={120}
              />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-[40%]">
              <Label htmlFor="commingSoon">Sắp chiếu *</Label>
            </div>
            <div className="w-[60%]">
              <Switch name="commingSoon" defaultChecked />
            </div>
          </div>
          <div className="flex  mb-4">
            <div className="w-[40%]">
              <Label htmlFor="shownow">Đang chiếu *</Label>
            </div>
            <div className="w-[60%]">
              <Switch name="shownow" defaultChecked />
            </div>
          </div>
          <div className="flex  mb-4">
            <div className="w-[40%]">
              <Label htmlFor="hot">Nổi bật *</Label>
            </div>
            <div className="w-[60%]">
              <Switch name="hot" defaultChecked />
            </div>
          </div>
          <FromGroup>
            <Label htmlFor="actors">Diễn Viên *</Label>
            <Input name="actors" placeholder="Tên diễn viên" />
          </FromGroup>
          <FromGroup>
            <Label htmlFor="directors">Đạo diễn *</Label>
            <Input name="directors" placeholder="Tên đạo diễn" />
          </FromGroup>
          <div className="flex  mb-4">
            <div className="w-[40%]">
              <Label htmlFor="">Poster *</Label>
            </div>
            <div className="w-[60%]">
              <Upload {...props} maxCount={1}>
                <Button icon={<UploadOutlined />}>
                  Click to Upload (Max: 1)
                </Button>
              </Upload>
            </div>
          </div>
          <div className="flex  mb-4">
            <div className="w-[40%]">
              <Label htmlFor="">Photo *</Label>
            </div>
            <div className="w-[60%]">
              <Upload {...props} maxCount={5}>
                <Button icon={<UploadOutlined />}>
                  Click to Upload (Max: 5)
                </Button>
              </Upload>
            </div>
          </div>
          <FromGroup>
            <Label htmlFor="country">Nước sản xuất *</Label>
            <Select
              defaultValue="lucy"
              style={{
                width: 200,
              }}
              onChange={handleChange}
              options={[
                {
                  label: <span>manager</span>,
                  title: "manager",
                  options: [
                    {
                      label: <span>Jack</span>,
                      value: "Jack",
                    },
                    {
                      label: <span>Lucy</span>,
                      value: "Lucy",
                    },
                  ],
                },
                {
                  label: <span>engineer</span>,
                  title: "engineer",
                  options: [
                    {
                      label: <span>Chloe</span>,
                      value: "Chloe",
                    },
                    {
                      label: <span>Lucas</span>,
                      value: "Lucas",
                    },
                  ],
                },
              ]}
            />
          </FromGroup>
          <FromGroup>
            <Label htmlFor="language">Ngôn ngữ *</Label>
            <Select
              defaultValue="lucy"
              style={{
                width: 200,
              }}
              onChange={handleChange}
              options={[
                {
                  label: <span>manager</span>,
                  title: "manager",
                  options: [
                    {
                      label: <span>Jack</span>,
                      value: "Jack",
                    },
                    {
                      label: <span>Lucy</span>,
                      value: "Lucy",
                    },
                  ],
                },
                {
                  label: <span>engineer</span>,
                  title: "engineer",
                  options: [
                    {
                      label: <span>Chloe</span>,
                      value: "Chloe",
                    },
                    {
                      label: <span>Lucas</span>,
                      value: "Lucas",
                    },
                  ],
                },
              ]}
            />
          </FromGroup>
          <FromGroup>
            <Label htmlFor="language">Thể Loại *</Label>
            <Select
              defaultValue="lucy"
              style={{
                width: 200,
              }}
              onChange={handleChange}
              options={[
                {
                  label: <span>manager</span>,
                  title: "manager",
                  options: [
                    {
                      label: <span>Jack</span>,
                      value: "Jack",
                    },
                    {
                      label: <span>Lucy</span>,
                      value: "Lucy",
                    },
                  ],
                },
                {
                  label: <span>engineer</span>,
                  title: "engineer",
                  options: [
                    {
                      label: <span>Chloe</span>,
                      value: "Chloe",
                    },
                    {
                      label: <span>Lucas</span>,
                      value: "Lucas",
                    },
                  ],
                },
              ]}
            />
          </FromGroup>
        </form>
      </Modal>
    </>
  );
};
TimeFrameAddNew.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
export default TimeFrameAddNew;
