import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ServiceCard from '../Services/ServiceCard';



const AllRooms = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data.service))
    }, [services])

    const handleForm = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.title.value;
        const price = form.price.value;
        const image = form.url.value;
        const capacity = form.capacity.value;
        const des = form.des.value;

        const serviceDetails = {
            name,
            price,
            image,
            capacity,
            des
        }
        console.log(serviceDetails);

        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Room Added Success Fully')
                    form.reset()
                }
            })

    }


    const handleDelele = (room) => {
        const agree = window.confirm('Are You sure You want to delete')
        console.log(room._id);
        if (agree) {
            fetch(`http://localhost:5000/room/${room._id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount >= 0) {
                        toast.error('Room Deleted Success Fully')
                        const remainingUser = services
                            .filter(us => us._id !== room._id)
                        setServices(remainingUser)
                    }
                })
        }

    }


    return (
        <div className='h-screen w-full'>
            <h1 className='text-center my-4 text-3xl font-bold'>Rooms:{services.length}</h1>
            <div className='px-40'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                        handleDelele={handleDelele}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllRooms;