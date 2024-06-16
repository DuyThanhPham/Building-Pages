const BuildingPolicies = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Building Policies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-48">
        <div>
          <h3 className="bg-[#2f3035de] text-white px-4 py-2 gap-4 rounded-t-lg flex justify-center items-center">
            General Policies
            <div className="h-[0.8px] bg-white w-full flex-1"></div>
          </h3>
          <div className="border border-t-0 rounded-b-lg p-4 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div>Pets Allowed</div>
                <p className="text-gray-600 italic">
                  Only owners may have dogs
                </p>
              </div>
              <div>In-unit Washer/Dryer Allowed</div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div>Subletting Allowed</div>
                <p className="text-gray-600 italic">
                  Shareholders can sublet immediately; 30-day minimum
                </p>
              </div>
              <div>No Smoking</div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>Parents Buying for Employed Children Allowed</div>
              <div>Parents Buying for Student Children Allowed</div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="bg-[#2f3035de] text-white px-4 py-2 gap-4 rounded-t-lg flex justify-center items-center">
            Additional Building Info
            <div className="h-[0.8px] bg-white w-full flex-1"></div>
          </h3>
          <ul className="border border-t-0 rounded-b-lg p-4">
            <li className="mb-2">:: Storage Available for fee</li>
            <li>:: Applications reviewed by Building Counsel</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BuildingPolicies;
