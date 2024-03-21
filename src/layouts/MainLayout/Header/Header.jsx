import "./Header.scss";
import {
  AppBar,
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const headMenu = [
  { nameLink: "Lịch chiếu", id: "lichchieu" },
  { nameLink: "Cụm rạp", id: "cumrap" },
  { nameLink: "Tin tức", id: "tintuc" },
  { nameLink: "Ứng dụng", id: "ungdung" },
];
const Menu = [
  {
    title: "Hà Nội",
    Rap: ["Rap1", "Rap2", "Rap3"],
  },
  {
    title: "Hà Nội",
    Rap: ["Rap1", "Rap2", "Rap3"],
  },
  {
    title: "Hà Nội",
    Rap: ["Rap1", "Rap2", "Rap3"],
  },
  {
    title: "Hà Nội",
    Rap: ["Rap1", "Rap2", "Rap3"],
  },
  {
    title: "thanh hoa",
    Rap: ["Rap1", "Rap2", "Rap3"],
  },
];
const Header = () => {
  const { currentUser } = useSelector((state) => state.AuthReducer);
  const [text, setText] = useState("Vui Lòng chọn rạp");
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const navigate = useNavigate();
  const handleClick = (e) => {
    // Thay đổi state của text
    setText(e);
  };
  const toggleSubmenu = () => {
    setSubmenuVisible(!submenuVisible);
  };
  const handleLogin = () => {
    navigate("/sign-in");
  };
  const handleRegister = () => {
    navigate("/sigh-up");
  };
  return (
    <div className="root">
      <AppBar position="fixed" color="default" className="appBar">
        <Toolbar className="spaceBetween" sx={{ height: 72, fontSize: 18 }}>
          <div className="flex gap-x-64 items-center">
            <div className="logo">
              <img
                src="/img/headTixLogo.png"
                alt="logo"
                style={{ height: 50 }}
              />
            </div>
            <div>
              <button className="dropbtn bg-[#f9f9f9]" onClick={toggleSubmenu}>
                <span className="span1">{text}</span>
                <KeyboardArrowDownIcon className="icon" />
              </button>

              <div
                className={`dropdown-content ${submenuVisible ? "show" : ""}`}
              >
                {Menu.map((e) => (
                  <div key={e.title}>
                    <div className="sub-menu">
                      <button className="sub-menu-trigger">
                        <span className="span1">{e.title}</span>
                        <KeyboardArrowRightIcon className="icon" />
                      </button>
                      <div className="sub-menu-content">
                        {e.Rap.map((item) => (
                          <a
                            key={item.title}
                            onClick={() => handleClick(e.title + " - " + item)}
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="linkTobody">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {headMenu.map((link) => (
                <span key={link.id} className="link">
                  {link.nameLink}
                </span>
              ))}
            </Grid>
          </div>
          <div className="user">
            {currentUser ? (
              <List disablePadding className="auth">
                <ListItem className="itemAuth divide">
                  <ListItemIcon className="iconLogin">
                    <Avatar className="avatar" src="/img/avatar.png"></Avatar>
                  </ListItemIcon>
                  <ListItemText primary={currentUser?.hoTen} />
                </ListItem>
                <ListItem className="itemAuth">
                  <ListItemText primary="Đăng Xuất" />
                </ListItem>
              </List>
            ) : (
              <List disablePadding className="auth">
                <ListItem className="itemAuth divide" onClick={handleLogin}>
                  <ListItemIcon className="iconLogin">
                    <AccountCircleIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Đăng Nhập" />
                </ListItem>
                <ListItem className="itemAuth" onClick={handleRegister}>
                  <ListItemText primary="Đăng Ký" />
                </ListItem>
              </List>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
