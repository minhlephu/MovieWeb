import Header from "../layouts/MainLayout/Header/Header";
import { Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};
const Info = () => {
  return <>
  <div>
    hi
  </div>
  </>;
};
const BookingHistory = () => {
  return <>
  <div>
    hihi
  </div></>;
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
