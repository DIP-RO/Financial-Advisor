import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import TeamCard from './TeamCard';

const Team = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
     
      fetch('http://localhost:5000/team') 
        .then((response) => response.json())
        .then((data) => setTeams(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []); 
    return (
        <div>
        <div className=" my-10 ">
          <h2 className="text-center my-10 font-semibold text-4xl text-gray-800">
            Team Detail
          </h2>
          <div className="grid px-4 md:px-20 gap-5 grid-cols-1 md:grid-cols-4">
            {teams?.map((team) => (
                <TeamCard key={team._id} team={team}></TeamCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Team;