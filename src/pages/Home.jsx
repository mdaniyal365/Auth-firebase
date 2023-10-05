import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import Axios from "axios";
import Repos from "./repo";
function Home() {
  const context = useContext(UserContext);
  const [user,setUser]=useState(null)
  const [query,setQuery]=useState()

  const navigate = useNavigate();

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log({ data });
    } catch (eror) {
      toast("Not able to locate user", { type: "error" });
    }
  };
  console.log(user);
  if (!context.user) {
    return navigate("/signin");
  }

  const HandleSubmit=e=>{
    e.preventDefault();
    fetchDetails()

  }
  return (
    <div className="flex flex-row h-auto p-32 bg-blue-700 ">
      <div className="left w-[50%]">
        <div className="Finding  pl-24">
          <form action="" onSubmit={HandleSubmit} >
            <input
              type="text"
              placeholder="Search Git User"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="p-4 rounded-lg"
            />
            <input className=" p-4 ml-32  bg-red-400 rounded-lg hover:bg-red-800  text-white cursor-default " type="submit" value="Fetch User"/>
          </form>
          <div className="userPic mt-11">
            {user?(<div className="text-center mt-3 mb-4">
      <img src={user.avatar_url} className="" />
      <div>
        <div className="text-primary">{user.name}</div>
        <div className="text-primary">{user.location}</div>
        <div className="text-primary">{user.bio}</div>
        <div className="text-info">
          Available for hire: {user.hireable ? "YES" : "NOPE"}
        </div>
        <div className="text-info">Followers {user.followers}</div>
      </div>
    </div>):("")}
          </div>
        </div>
      </div>
      <div className="right bg-orange-600 p-32 ">
      <div className="mb-7">{user ? <Repos repos_url={user.repos_url} /> : null}</div>
      </div>
    </div>
  );
}

export default Home;
