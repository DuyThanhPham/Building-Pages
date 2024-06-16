import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  url: string;
  children: ReactNode;
  buttonName?: string;
  className?: string;
  classNameWrap?: string;
}
const Card = ({
  className,
  classNameWrap,
  buttonName,
  url,
  children,
}: Props) => {
  return (
    <div
      className={classNames(
        "border rounded-lg grid grid-cols-2 gap-2 lg:gap-4",
        classNameWrap
      )}
    >
      <div className={classNames("h-[200px] w-full", className)}>
        <img src={url} loading="lazy" className="object-cover h-full w-full" />
      </div>
      <div className="pt-2 pb-4 flex flex-col justify-between">
        {children}
        {buttonName && (
          <button className="text-sm lg:text-base w-[150px] lg:w-[200px] max-w-[calc(100%-20px)] bg-[#2f3035de] text-white py-2 px-4 rounded">
            {buttonName}
          </button>
        )}
      </div>
    </div>
  );
};
export default Card;
