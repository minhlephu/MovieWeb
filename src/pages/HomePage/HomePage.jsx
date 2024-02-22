
import ModalTrailer from "../../components/ModalTrailer/ModalTrailer";
import ListMovie from "../../components/Movie/ListMovie";
import { StickyNavbar } from "../../layouts/MainLayout/Header/Header";
import Carousel from "./Carousel/Carousel";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
const HomePage = () => {
  const data = [
    {
      label: "Đang Chiếu",
      value: "dangchieu",
      desc:"dddđ",
    },
    {
      label: "Sắp Chiếu",
      value: "sapchieu",
      desc: <ListMovie></ListMovie>,
    },
  ];
  

  return (
    <>
      <StickyNavbar></StickyNavbar>
      <Carousel></Carousel>
      <Tabs
        value="dangchieu"
        className="flex justify-center flex-col items-center mt-8 opacity-100 transition-all font-sans"
      >
        <TabsHeader
          className="bg-[#efebdb]"
          indicatorProps={{
            className: "bg-[--tab-bg-active] !text-[#cdc197]",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className="w-[240px] h-10 text-xl text-[#6f6247]"
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      <ListMovie></ListMovie>
      <ModalTrailer></ModalTrailer>
    </>
  );
};

export default HomePage;
