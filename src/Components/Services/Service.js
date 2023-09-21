import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
   
    fetch('http://localhost:5000/services') 
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); 

  return (
    <div>
      <div className=" my-10 ">
        <h2 className="text-center my-10 font-semibold text-4xl text-gray-800">
          All Services
        </h2>
        <div className="grid px-4 md:px-20 gap-5 grid-cols-1 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
