import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import LoadingAnimation from "../Shared/LoadingAnimation/LoadingAnimation";

const Allusers = () => {
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user", {
        headers: {
          authorization: `bearer ${localStorage.getItem("Radission BluToken")}`,
        },
      });
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <LoadingAnimation></LoadingAnimation>;
  }

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/user/admin/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("Radission BluToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("SuccessFully Made Admin");
          refetch();
        }
      });
  };

  return (
    <div className="h-screen w-full my-4">
      <h1 className="text-center text-xl text-white font-semibold">
        All Users{" "}
      </h1>
      <div className="px-5">
        {users.map((user, i) => (
          <div key={user._id}>
            <div className="flex  relative py-4 items-center mx-auto rounded-lg  gap-5 px-8 bg-white my-3 text-slate-800 font-semibold w-full md:w-[500px]">
              <p>{i + 1}</p>
              <div className="flex md:flex-row gap-2 flex-col">
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
              <div className="dropdown absolute right-4 dropdown-end">
                <label tabIndex={0} className=" m-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="text-white"
                    >
                      {user.role === "admin" ? "Admin" : "Make Admin"}
                    </button>
                  </li>
                  <li>
                    <button className="text-white">Make Moderator</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allusers;
