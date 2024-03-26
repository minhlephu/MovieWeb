import Header from "../layouts/MainLayout/Header/Header";
import { Form, Input, Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};
const Info = () => {
  const [form] = Form.useForm();
  return (
    <>
      <div className="w-[50%]">
        <Form form={form} layout="vertical">
          <Form.Item
            label="Họ và tên"
            name="username"
            rules={[
              {
                required: true,
                message: "Hãy điền tên phim!",
              },
            ]}
          >
            <Input name="username" placeholder="Họ và tên" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Hãy điền tên phim!",
              },
            ]}
          >
            <Input name="email" placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
              {
                required: true,
                message: "Hãy điền tên phim!",
              },
            ]}
          >
            <Input name="phone" placeholder="Số điện thoại" />
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
const BookingHistory = () => {
  return (
    <>
      <div>hihi</div>
    </>
  );
};
const items = [
  {
    key: "1",
    label: "Thông tin tài khoản",
    children: <Info></Info>,
  },
  {
    key: "2",
    label: "Lịch sử đặt vé",
    children: <BookingHistory></BookingHistory>,
  },
];
const UserInfo = () => {
  return (
    <>
      <Header></Header>
      <div className="h-[68px]"></div>
      <div className="px-48 py-24">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </>
  );
};

export default UserInfo;
