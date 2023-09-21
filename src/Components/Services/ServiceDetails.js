// ServiceDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const { id } = useParams(); // Get the service ID from the route parameter
  const [service, setService] = useState(null);

  useEffect(() => {
    // Fetch the service details based on the ID from the local JSON file
    fetch('http://localhost:5000/services')
      .then((response) => response.json())
      .then((data) => {
        const foundService = data.find((item) => item.id === id);

        if (foundService) {
          setService(foundService);
        } else {
          console.error(`Service with ID ${id} not found`);
        }
      })
      .catch((error) => console.error('Error fetching service details:', error));
  }, [id]);

  if (!service) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  return (
    <div>
      <h1>Service Details</h1>
      <div>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <p>Price: ${service.price}</p>
        {/* Add more service details here */}
      </div>
    </div>
  );
}

export default ServiceDetails;
