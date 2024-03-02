
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import TopBar from "./TopBar/TopBar";
const LayoutAdmin = () => {
    return (
        <>
        <TopBar></TopBar>
        <div className="flex gap-x-10">
            <NavBar></NavBar>
            <div className="w-full">
            <Outlet></Outlet>                  
            </div>
        </div>
    </>
    );
};

export default LayoutAdmin;