import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AdvisorCard from './AdvisorCard';

const Advisor = () => {
    const [advisors, setAdvisors] = useState([]);

    useEffect(() => {
     
      fetch('http://localhost:5000/advisor') 
        .then((response) => response.json())
        .then((data) => setAdvisors(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []); 
    return (
        <div>
        <div className=" my-10 ">
          <h2 className="text-center my-10 font-semibold text-4xl text-gray-800">
            Specialist 
          </h2>
          <div className="grid px-4 md:px-20 gap-5 grid-cols-1 md:grid-cols-4">
            {advisors?.map((advisor) => (
                <AdvisorCard key={advisor._id} advisor={advisor}></AdvisorCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Advisor;