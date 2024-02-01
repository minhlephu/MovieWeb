import { StickyNavbar } from "./layouts/MainLayout/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import ButtonAppBar from "./pages/HomePage/HomePage";
import CarouselWeb from "./pages/HomePage/Carousel";
export default function App() {
  return (
   <><StickyNavbar></StickyNavbar>
   <CarouselWeb></CarouselWeb></>
  )
}