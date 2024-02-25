import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SignInPage from "../pages/SignInPage";
import { StickyNavbar } from "./MainLayout/Header/Header";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <StickyNavbar></StickyNavbar>

      <div className="bg-[#F1F1F1] h-screen">
        <div className="h-[72px]"></div>
        <div className="flex justify-center items-center ">
          <Box sx={{ width: "50%", margin: "auto" }}>
            <Box sx={{ width: "100%", margin: "auto" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Đăng Nhập" {...a11yProps(0)} />
                <Tab label="Đăng Ký" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div className="w-full  bg-white px-5 py-5 lg:px-16 lg:py-12 mx-auto">
                <SignInPage></SignInPage>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Item Two
            </CustomTabPanel>
          </Box>
        </div>
      </div>
    </>
  );
}
