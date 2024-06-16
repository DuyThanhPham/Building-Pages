import { useRef } from "react";
import { ListImage } from "./data";
import style from "./index.module.css";
import classnames from "classnames";
import ArrowLeftIcon from "../../assets/icons/arrowLeft";
import ArrowRightIcon from "../../assets/icons/arrowRight";

const Navbar = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div
        onClick={scrollLeft}
        className="hidden md:block absolute left-0 z-10 top-[50%] cursor-pointer"
      >
        <ArrowLeftIcon />
      </div>
      <div
        ref={carouselRef}
        className={classnames(style.carousel, "flex gap-4 mx-4 md:mx-7")}
      >
        {ListImage.map((e, index) => {
          return (
            <img
              key={index}
              src={e}
              loading="lazy"
              className={classnames(
                style.carouselSection,
                "scroll-na object-fill min-w-[300px] h-[300px]"
              )}
            />
          );
        })}
      </div>
      <div
        onClick={scrollRight}
        className="hidden md:block absolute right-0 z-10 top-[50%] cursor-pointer"
      >
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default Navbar;
