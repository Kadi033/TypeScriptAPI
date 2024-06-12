import axios from "axios";
import { useEffect, useState } from "react";
import { postType } from "../types";
import first from '../assets/1.jpg'
function Home() {
  const [user, setUser] = useState<postType[]>([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = response.data;
        console.log(data);

        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-600 to-blue-500 opacity-95 h-[70vh] grid grid-cols-3 content-evenly">
      {user.slice(0, 6).map((item) => (
        <div key={item.id} className=" bg-white p-5 rounded-xl w-[285px] flex flex-col justify-center text-center m-auto items-center">
          <img src={first} className="w-32 h-23" alt="" />
          <div >
            <h2>name: {item.name}</h2>
            <p>usename:{item.username}</p>
            <p>email:{item.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
