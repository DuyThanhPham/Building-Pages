import classNames from "classnames";

interface Props {
  className?: string;
}

const Divider = ({ className }: Props) => {
  return (
    <div className={classNames("bg-gray-400 h-[2px] my-4", className)}></div>
  );
};

export default Divider;
