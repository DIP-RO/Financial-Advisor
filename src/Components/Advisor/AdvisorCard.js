import React from 'react';
import { Link } from 'react-router-dom';

const AdvisorCard = ({advisor}) => {
    const {_id } = advisor;
    return (
        <div>
        <div
          style={{ height: "500px" }}
          className="relative bg-gray-200 hover:bg-gray-300 border-none hover:border border-orange-500 hover:shadow-2xl  shadow-lg   text-gray-900"
        >
          <img
            src={advisor.image}
            alt=""
            className="object-cover object-center w-full  h-72 bg-gray-400 hover:bg-gray-500"
          />
          <div className="flex flex-col justify-between  space-y-8">
            <div className="space-y-2 p-2">
              <h2 className="text-xl font-bold tracking-wide">
                {advisor.name}
              </h2>
              <p className="text-gray-600">{advisor.position}</p>
              <p className="text-gray-600">{advisor.education}</p>
           
             
              <Link to={`/service/${_id}`}>
                <button
                  type="button"
                  className="flex  w-50 bottom-5 absolute  items-center justify-center  p-3 font-semibold tracking-wide  bg-gray-800  text-white"
                >
                  View Details
                </button>
                        </Link>
                      
            </div>
          </div>
        </div>
      </div>
    );
};

export default AdvisorCard;