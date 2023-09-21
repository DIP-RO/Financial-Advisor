import React from "react";
import "./Home.css";
import { FaCheck } from "react-icons/fa";
import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";
import ConnectUs from "../Contact/ConnectUs";
import ServiceCard from "../Services/ServiceCard";
import { useState } from "react";
import { useEffect } from "react";
import Advisor from "../Advisor/Advisor";
const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/service.json")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <div className="justify-items-center my-20 mb-10 px-10 md:px-20 grid grid-cols-1 md:grid-cols-2">
        <div
          data-aos-duration="10000"
          data-aos="zoom-in-left"
          className="text-gray-800 md:text-start text-center mt-5 md:mt-20"
        >
          <p className="my-2 text-gray-600 font-semibold">
            WELCOME TO FUNDAMENTAL
          </p>
          <h1 className="text-4xl text-dark   font-bold">
            Get a clear path to your financial goals.
          </h1>
          <p className="my-2 text-white-600 font-semibold">
            Our Wealth Advising team can help you.
          </p>
          <Link to="/rooms">
            <button
              type="button"
              className="px-3 py-1 md:my-0 my-2  rounded-full bg-violet-600 text-white "
            >
              AI Chatbot
            </button>
          </Link>
        </div>
        <div data-aos-duration="10000" data-aos="zoom-in-down">
          <img
            className="w-full"
            src="https://worldfinancialreview.com/wp-content/uploads/2022/07/iStock-1141142286-1.jpg"
            alt=""
          />
        </div>
      </div>

      <div className=" py-2 md:py-6 text-center">
        <h2 className="text-4xl my-4 md:my-10 text-Black text-center font-bold">
          Services
        </h2>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-5 md:px-20 px-4"
        >
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <Link to="/service">
          <button className="btn my-5 btn-outline text-white  ">
            Show All
          </button>
        </Link>
      </div>
      <div
        data-aos="fade-up"

      >
        <Advisor></Advisor>
      </div>

      <div className="text-center grid grid-cols-1 md:grid-cols-3 p-4 md:p-10 bg-gray-700">
        <div className="mt-10  md:mt-20" data-aos="zoom-in-right">
          <h2 className="text-4xl font-semibold text-white">Our Facilites</h2>
          <p className="text-gray-400 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam
            suscipit assumenda minima magni necessitatibus, odit animi incidunt
            quaerat eos iusto temporibus non molestias nulla accusamus culpa
            sapiente saepe. Excepturi.
          </p>
          <div>
            <div className="font-semibold pl-28 md:pl-32 mb-5 ">
            <div className="flex  items-center">
                <FaCheck></FaCheck>
                <p className="px-2 text-white">24/7 Customer Service</p>
              </div>
              <div className="flex  items-center">
                <FaCheck></FaCheck>
                <p className="px-2 text-white">quick response</p>
              </div>
              <div className="flex  items-center">
                <FaCheck></FaCheck>
                <p className="px-2 text-white">appointment</p>
              </div>
              <div className="flex  items-center">
                <FaCheck></FaCheck>
                <p className="px-2 text-white">well oppurtunity</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className="rounded"
            style={{
              height: "500px",
            }}
            src="https://cdn-icons-png.flaticon.com/512/8312/8312818.png"
            alt=""
          />
        </div>
        <div>
          <div className="mt-20 " data-aos="zoom-in-left">
            <h2 className="text-4xl font-semibold text-white my-4">
              Our Services
            </h2>

            <div className=" my-5 ">
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo saepe amet nulla, quod nihil quaerat magni aliquam,
                earum sed veniam nobis. Doloremque natus optio illum est harum
                quo, voluptas voluptatem excepturi
              </p>
            </div>
            <div className="font-semibold pl-28 md:pl-32">
              <div className="flex  items-center">
                <FaCheck></FaCheck>
                <p className="px-2 text-white">24/7 Customer Service</p>
              </div>
              <div className="flex  items-center">
                <FaCheck></FaCheck>
                <p className="px-2 text-white">quick response</p>
              </div>
              <div className="flex  items-center">
                <FaCheck></FaCheck>
                <p className="px-2 text-white">appointment</p>
              </div>
              <div className="flex  items-center">
                <FaCheck></FaCheck>
                <p className="px-2 text-white">well oppurtunity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <ConnectUs></ConnectUs>
      </div>
      <ScrollRestoration></ScrollRestoration>
      {/* <ConnectUs></ConnectUs> */}
    </div>
  );
};

export default Home;
