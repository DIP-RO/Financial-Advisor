import React from "react";
//import backgroundImg from '../../../assets/images/appointment.png'

const ConnectUs = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="flex md:flex-row flex-col my-10 mx-4 md:mx-20 p-10 md:p-20  gap-10 border items-center justify-center bg-gradient-to-t from-slate-900 bg-slate-900 py-2 md:py-6 text-center"
    >
      <div>
        <h1 className="text-3xl font-bold text-white">Contact Us</h1>
        <p className="w-full text-white">
          We daily send a news letter about the current stocks sports bike.We'll
          happy to help you, fill form given below to contact with us.We'll
          happy to help you, fill form given below to contact with us. If any
          issue related query then please mail us
        </p>
      </div>

      <div className="flex flex-col ">
        <div className="flex flex-col">
          <input
            type="email"
            name="Search"
            placeholder="email"
            className="w-48 h-10 my-auto mb-5 md:w-80 pl-3 text-sm rounded mr-4 focus:outline-none border  text-gray-800  "
          />

          <input
            type="Password"
            name="Search"
            placeholder="subject"
            className="w-48 h-10 my-auto mb-5 md:w-80 pl-3 text-sm rounded mr-4 focus:outline-none border  text-gray-800  "
          />
        </div>

        <div className="flex flex-col">
          <textarea
            className="textarea w-48 h-24 my-auto  md:w-80 pl-3 text-sm rounded mr-4 "
            placeholder="Description"
          ></textarea>
          <button
            type="button"
            className="px-4 mx-auto my-3 py-2 font-semibold rounded  bg-gray-800 text-white border hover:border-purple-500 border-gray-900 hover:bg-purple-500 hover:text-white transition  text-gray-800"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectUs;
