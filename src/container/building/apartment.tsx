import Card from "../../components/Card";
import Apartment from "../../type/apartment";

interface Props {
  apartment: Apartment;
}
const ApartmentPage = ({ apartment }: Props) => {
  return (
    <Card url={apartment.image} buttonName="Schedule a Visit">
      <div>
        <div className="text-3xl">{apartment.floor}</div>
        <div className=" text-gray-500 mt-2 text-xs">
          <strong className="mr-2 text-xl">$ {apartment.price}</strong>
          MONTHLY
        </div>
        <div className=" text-gray-500 ">
          {apartment.type === "Studio"
            ? "STUDIO"
            : `${apartment.beds} BEDS  /  ${apartment.baths} BATH`}
        </div>
      </div>
    </Card>
  );
};
export default ApartmentPage;
