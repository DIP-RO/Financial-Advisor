import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Admin = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data.rooms))
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


    // const handleDelele = (service) => {
    //     const agree = window.confirm('Are You sure You want to delete')
    //     console.log(service._id);
    //     if (agree) {
    //         fetch(`http://localhost:5000/service/${service._id}`, {
    //             method: 'DELETE',
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.deletedCount >= 0) {
    //                     toast.error('Room Deleted Success Fully')
    //                     const remainingUser = rooms
    //                         .filter(us => us._id !== room._id)
    //                     setRooms(remainingUser)
    //                 }
    //             })
    //     }

    // }





    return (
        <div className='bg-slate-900 '>
            <h1 className='text-4xl font-bold text-center py-4'>Admin Panel</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 px-20'>
                <div>

                    {/* <h1 className='text-center my-4 text-3xl font-bold'>Rooms:{rooms.length}</h1> */}
                    {/* <div>
                        {
                            rooms.map(room => <RoomSmallCard
                                key={room._id}
                                room={room}
                                handleDelele={handleDelele}
                            ></RoomSmallCard>)
                        }
                    </div> */}
                </div>
                <div className='px-20'>
                    <h1 className='text-center text-3xl my-4 font-bold'>Add a new </h1>
                    <form onSubmit={handleForm} className='p-30 flex flex-col  bg-slate-900  '>
                        <input name='title' id="username" type="text" placeholder='Title' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-400 focus:ring-violet-400" />
                        <textarea name='des' id="username" type="text" placeholder=' Details' className="flex items-center h-24 p-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-400 focus:ring-violet-400" />
                        <input name='price' id="username" type="number" placeholder=' Price' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-400 focus:ring-violet-400" />
                        <input name='capacity' id="username" type="text" placeholder=' Capcity' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-400 focus:ring-violet-400" />
                        <input name='url' id="username" type="text" placeholder=' Photo URL' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-400 focus:ring-violet-400" />
                        <button type="submit" className="px-8 py-3 my-4 font-semibold rounded bg-gray-400 text-gray-800">Upload</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;