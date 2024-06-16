import { Link, useParams } from "react-router-dom";
import Divider from "../../components/Divider";
import BuildingPolicies from "./policies";
import MenuIcon from "../../assets/icons/menu";
import ApartmentIcon from "../../assets/icons/apartment";

import { buildings } from "./dataBuildings";
import ApartmentPage from "./apartment";
import { apartmentsForRent } from "./dataApartment";

const Building = () => {
  const { buildingId } = useParams();
  const building = buildings.find((e) => e.id === Number(buildingId));

  if (!building) return <div>This building does not exist</div>;

  return (
    <>
      <div className="w-full h-[500px] relative ">
        <div className="grid grid-cols-3 items-center content-center absolute h-24 bg-[#e5e5e575] backdrop-blur-[8px] w-full px-2 md:px-8">
          <Link to={`/`}>
            <MenuIcon />
          </Link>
          <Link to={`/`} className="flex justify-center items-center">
            <ApartmentIcon />
          </Link>
          <div className="text-end ">
            <p className="md:text-xl font-medium text-gray-800">
              {building?.name}
            </p>
            <p className="text-gray-600">{building?.location}</p>
            <p className="text-gray-600">Co-op</p>
          </div>
        </div>
        <img src={building?.image} className="w-full h-full" />
      </div>
      <div className="px-4 md:px-10">
        <div className="my-8">
          <p className="text-gray-600">
            {building?.name} I a pre-war cooperative building built in 1929,
            then converted in 1987. The building has 13 floors with 88 units.
          </p>
          <Divider className="" />
          <div className="mt-4">
            <h2 className="text-2xl font-medium">Apartments for Rent</h2>
            <p className="text-gray-600">
              Please note that apartment availability is always changing. Some
              of these apartments may no longer be available, while others may
              have been vacated recently.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-10 lg:gap-x-48 gap-y-10">
          {apartmentsForRent.map((apartment) => (
            <ApartmentPage apartment={apartment} key={apartment.id} />
          ))}
        </div>
        <Divider className="mt-10" />
        <BuildingPolicies />
        <Divider className="mt-10 md:mt-20" />
      </div>
    </>
  );
};
export default Building;
