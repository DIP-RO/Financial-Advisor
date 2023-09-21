import React from 'react';

const SRS = () => {
    return (
        <div>
      <div
        style={{ height: "500px" }}
        className="relative bg-gray-200 hover:bg-gray-300 border-none hover:border border-orange-500 hover:shadow-2xl  shadow-lg   text-gray-900"
      >
        <img
          src="https://media.licdn.com/dms/image/D5603AQFLPx1l5wiKDQ/profile-displayphoto-shrink_800_800/0/1675196543363?e=2147483647&v=beta&t=uNAYZec1_4waHRawc2aPFhFrVvDKuH1KoB24_nXPzJ8"
          alt=""
          className="object-cover object-center w-full h-72  bg-gray-400 hover:bg-gray-500"
        />
        <div className="flex flex-col justify-between  space-y-8">
          <div className="space-y-2 p-2">
            <h2 className="text-xl font-bold tracking-wide">
              Dipro Paul
            </h2>
            <p className="text-gray-600">ID : 221-15-5666</p>
            <p className="text-gray-600"></p>
           
          
          </div>
        </div>
      </div>
    </div>
    );
};

export default SRS;