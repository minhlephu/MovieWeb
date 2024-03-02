import { NavLink, useNavigate } from "react-router-dom";
import IconProfile from "../../../components/icons/IconProfile";
import IconLogout from "../../../components/icons/IconLogout";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
const sidebarLinks = [
  {
    icon: <LiveTvOutlinedIcon></LiveTvOutlinedIcon>,
    title: "Quản lý phim",
    url: "/movies",
  },
  {
    icon: <TheatersOutlinedIcon></TheatersOutlinedIcon>,
    title: "Quản lý rạp",
    url: "/cinema",
  },
  {
    icon: <CalendarMonthOutlinedIcon></CalendarMonthOutlinedIcon>,
    title: "Quản lý lịch chiếu",
    url: "/show",
  },
  {
    icon: <ScheduleOutlinedIcon></ScheduleOutlinedIcon>,
    title: "Quản lý TimeFrame",
    url: "/timeframe",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Quản lý người dùng",
    url: "/user",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/logout",
  },
];
const NavBar = () => {
  const navigate = useNavigate();

  const navlinkClass =
    "flex items-center p-5 gap-x-5  md:h-12  md:rounded-lg md:mb-8  last:mt-auto last:bg-white last:shadow-sdprimary";
  return (
    <div className="w-full md:w-[300px] h-screen bg-[white] shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col flex-shrink-0">
      {sidebarLinks.map((link) => {
        if (link.url === "/logout") {
          return (
            <button
              className={`${navlinkClass} text-icon-color`}
              key={link.title}
              onClick={() => {
                navigate("/");
                window.location.reload();
              }}
            >
              <span>{link.icon}</span>
              <span>{link.title}</span>
            </button>
          );
        }
        return (
          <NavLink
            to={link.url}
            key={link.title}
            className={({ isActive }) =>
              isActive
                ? `${navlinkClass} text-[#1976d2] bg-[#1976d2] bg-opacity-20`
                : `${navlinkClass} text-icon-color`
            }
          >
            <span>{link.icon}</span>
            <span>{link.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavBar;
