import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Divider from "../../components/Divider";
import { buildings } from "../building/dataBuildings";
import Card from "../../components/Card";
import MenuIcon from "../../assets/icons/menu";
import ApartmentIcon from "../../assets/icons/apartment";

function Home() {
  return (
    <div>
      <div className="w-full  ">
        <div className="grid grid-cols-3 items-center content-center w-full py-4 px-2 md:px-8">
          <Link to={`/`}>
            <MenuIcon />
          </Link>
          <Link to={`/`} className="flex justify-center items-center">
            <ApartmentIcon />
          </Link>
          <div className="text-end "></div>
        </div>
      </div>
      <Navbar />
      <div className="mx-4 md:mx-7 ">
        <Divider />
        <div className="">
          <h1 className="text-xl mb-8">Rental Buildings</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-24 lg:gap-x-48 gap-y-10">
            {buildings.map((building) => (
              <Link to={`/building/${building.id}`} key={building.id}>
                <Card url={building.image} buttonName="See Apartment">
                  <div>
                    <div className="text-xl">{building.name}</div>
                    <div className=" text-gray-500 mt-4">
                      {building.location}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        <Divider className="mt-10 md:mt-20" />
      </div>
    </div>
  );
}

export default Home;
