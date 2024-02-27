import React from "react";
import './Header.scss';
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { MdArrowDropDown,MdArrowRight   } from "react-icons/md";
const Menu=[{
  title:"Hà Nội",
  Rap:[
    "Rap1",
    "Rap2",
    "Rap3"
  ]
},
{
  title:"Hà Nội",
  Rap:[
    "Rap1",
    "Rap2",
    "Rap3"
  ]
},
{
  title:"Hà Nội",
  Rap:[
    "Rap1",
    "Rap2",
    "Rap3"
  ]
},
{
  title:"Hà Nội",
  Rap:[
    "Rap1",
    "Rap2",
    "Rap3"
  ]
},
{
  title:"thanh hoa",
  Rap:[
    "Rap1",
    "Rap2",
    "Rap3"
  ]
}]

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [submenuVisible, setSubmenuVisible] =React.useState(false);
  const [text, setText] = React.useState("Vui Lòng chọn rạp");
  const handleClick = (e) => {
    // Thay đổi state của text
    setText(e);
  };
  const toggleSubmenu = () => {
    setSubmenuVisible(!submenuVisible);
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Lịch Chiếu Theo Rạp
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Phim
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Rạp
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
         Giá vé
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div className="">
      <Navbar className="z-10 top-0 w-full  h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 fixed">
        <div className="flex items-center justify-around text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Material Tailwind
          </Typography>
          <div >
          <button className="dropbtn" onClick={toggleSubmenu}>
          <span className="span1">
          {text}
          </span>
            
            <MdArrowDropDown  className="icon"/>
          </button>
     
      <div className={`dropdown-content ${submenuVisible ? 'show' : ''}`}>
     
        {Menu.map(e=>(  
          // eslint-disable-next-line react/jsx-key
          <div>
          <div className="sub-menu">
            <button className="sub-menu-trigger">
            <span className="span1">
            {e.title}
          </span>
          <MdArrowRight  className="icon"/>
          </button>
            <div className="sub-menu-content">
          
           {e.Rap.map(item=>( // eslint-disable-next-line react/jsx-key
            <a onClick={()=>handleClick(e.title+" - "+item)}>
              {item}
           </a>))} 
          </div>
         </div>
         </div>) )}    
      </div>
          
          </div>
          <div className="flex items-center gap-[240px]">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              
            </IconButton>
          </div>
        </div>
        {/* <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav> */}
      </Navbar>
      {/* <div className="mx-auto max-w-screen-md py-12">
        <Card className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
        </Card>
        <Typography variant="h2" color="blue-gray" className="mb-2">
          What is Material Tailwind
        </Typography>
        <Typography color="gray" className="font-normal">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?. I think we need to start from scratch can my
          website be in english?, yet make it sexy i&apos;ll pay you in a week
          we don&apos;t need to pay upfront i hope you understand can you make
          it stand out more?. Make the font bigger can you help me out? you will
          get a lot of free exposure doing this that&apos;s going to be a chunk
          of change other agencies charge much lesser. Are you busy this
          weekend? I have a new project with a tight deadline that&apos;s going
          to be a chunk of change. There are more projects lined up charge extra
          the next time.
        </Typography>
      </div> */}
    </div>
  );
}