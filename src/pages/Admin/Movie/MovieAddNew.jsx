import {
  DatePicker,
  Input,
  Modal,
  Switch,
  InputNumber,
  Button,
  Upload,
  Select,
  Form,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import TextArea from "antd/es/input/TextArea";
import { movieSevice } from "../../../services/MovieService";
import { toast } from "react-toastify";
import { useState } from "react";
import { Genre } from "../../../constrants/genre";
import { Language } from "../../../constrants/language";
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};
// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
const MovieAddNew = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();
  const [releaseDate, setReleaseDate] = useState();
  const handleReleaseDate = (date, dateString) => {
    setReleaseDate(dateString);
  };
  const optionsGenre = Object.keys(Genre).map((key) => ({
    value: key,
    label: Genre[key],
  }));
  const optionsLanguage = Object.keys(Language).map((key) => ({
    value: key,
    label: Language[key],
  }));
  const handleAddMovie = () => {
    form.validateFields().then((values) => {
      const formData = new FormData();
      const movieVm = {
        movieName: values.movieName,
        trailer: values.trailer,
        summary: values.summary,
        releaseDate: releaseDate,
        duration: values.duration,
        commingSoon: values.commingSoon,
        showNow: values.showNow,
        hot: values.hot,
        actors: values.actors,
        directors: values.directors,
        country: values.country,
        language: values.language,
        genreID: 1,
      };
      const imagesFileList = values.images;
      imagesFileList.fileList.forEach((file) => {
        formData.append(`fileImages`, file.originFileObj);
      });
      const filePoster = values.poster;
      filePoster.fileList.forEach((file) => {
        formData.append("filePoster", file.originFileObj);
      });
      formData.append("datajson", JSON.stringify(movieVm));
      movieSevice
        .createMovie(formData)
        .then(() => {
          toast.success("Thêm thành công");
          form.resetFields();
        })
        .catch(() => {
          toast.error("Lỗi");
        });
    });
  };

  return (
    <>
      <Modal
        title="Thêm phim mới"
        open={isOpen}
        onCancel={onClose}
        width={800}
        cancelText="Hủy"
        okText="Thêm"
        okType="default"
        onOk={handleAddMovie}
      >
        <Form
          form={form}
          layout="horizontal"
          labelCol={{
            span: 4,
          }}
        >
          <Form.Item
            label="Tên phim"
            name="movieName"
            rules={[
              {
                required: true,
                message: "Hãy điền tên phim!",
              },
            ]}
          >
            <Input name="name" placeholder="Tên phim" />
          </Form.Item>
          <Form.Item
            label="Trailer"
            name="trailer"
            rules={[
              {
                required: true,
                message: "Hãy chọn trailer!",
              },
            ]}
          >
            <Input name="trailer" placeholder="Trailer" />
          </Form.Item>
          <Form.Item
            label="Mô tả"
            name="summary"
            rules={[
              {
                required: true,
                message: "Hãy viết mô tả!",
              },
            ]}
          >
            <TextArea rows={4} name="summary" placeholder="Mô tả phim" />
          </Form.Item>
          <Form.Item
            label="Ngày khởi chiếu"
            name="releaseDate"
            rules={[
              {
                required: true,
                message: "Hãy chọn ngày khởi chiếu",
              },
            ]}
          >
            <DatePicker
              onChange={handleReleaseDate}
              style={{ zIndex: 10000 }}
            />
          </Form.Item>
          <Form.Item
            label="Thời lượng phim"
            name="duration"
            rules={[
              {
                required: true,
                message: "Hãy chọn thời lượng phim!",
              },
            ]}
          >
            <InputNumber name="duration" min={1} max={300} defaultValue={120} />
          </Form.Item>

          <Form.Item
            label="Sắp chiếu"
            name="commingSoon"
            // rules={[
            //   {
            //     required: true,
            //     message: "Hãy chọn thời gian bắt đầu!",
            //   },
            // ]}
          >
            <Switch name="commingSoon" defaultChecked />
          </Form.Item>

          <Form.Item
            label="Đang chiếu"
            name="showNow"
            // rules={[
            //   {
            //     required: true,
            //     message: "Hãy chọn thời gian bắt đầu!",
            //   },
            // ]}
          >
            <Switch name="shownow" defaultChecked />
          </Form.Item>

          <Form.Item
            label="Nổi bật"
            name="hot"
            // rules={[
            //   {
            //     required: true,
            //     message: "Hãy chọn thời gian bắt đầu!",
            //   },
            // ]}
          >
            <Switch name="hot" defaultChecked />
          </Form.Item>

          <Form.Item
            label="Diễn Viên"
            name="actors"
            rules={[
              {
                required: true,
                message: "Hãy điền tên diễn viên!",
              },
            ]}
          >
            <Input name="actors" placeholder="Tên diễn viên" />
          </Form.Item>

          <Form.Item
            label="Đạo diễn"
            name="directors"
            rules={[
              {
                required: true,
                message: "Hãy điền tên dạo diễn!",
              },
            ]}
          >
            <Input name="directors" placeholder="Tên đạo diễn" />
          </Form.Item>

          <Form.Item
            label="Poster"
            name="poster"
            rules={[
              {
                required: true,
                message: "Hãy tải lên poster!",
              },
            ]}
          >
            <Upload beforeUpload={() => false} maxCount={1}>
              <Button icon={<UploadOutlined />}>
                Click to Upload (Max: 1)
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label="Ảnh phim"
            name="images"
            rules={[
              {
                required: true,
                message: "Hãy tải lên ảnh phim!",
              },
            ]}
          >
            <Upload maxCount={5} beforeUpload={() => false}>
              <Button icon={<UploadOutlined />}>
                Click to Upload (Max: 5)
              </Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="Ngôn ngữ"
            name="language"
            rules={[
              {
                required: true,
                message: "Hãy chọn thời gian bắt đầu!",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Chọn ngôn ngữ"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              style={{
                width: 200,
              }}
              options={optionsLanguage}
            />
          </Form.Item>
          <Form.Item
            label="Thể Loại"
            name="genre"
            rules={[
              {
                required: true,
                message: "Hãy chọn thời gian bắt đầu!",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Chọn thể loại"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              style={{
                width: 200,
              }}
              options={optionsGenre}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
MovieAddNew.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
export default MovieAddNew;
