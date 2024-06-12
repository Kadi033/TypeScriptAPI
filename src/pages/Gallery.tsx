import axios from "axios";
import { useEffect, useState } from "react";
import { imageType } from "../types";

function Gallery() {
  const [img, setImg] = useState<imageType[]>([]);
  useEffect(() => {
    async function getPhotos() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = response.data;
        console.log(data);
        setImg(data);
      } catch (error) {
        console.error(error);
      }
    }
    getPhotos();
  }, []);
  return (
    <div className=" bg-gradient-to-br from-purple-600 to-blue-500 opacity-95 grid grid-cols-3 justify-items-center items-center h-[70vh]">
      {img.slice(0, 6).map((item) => (
        <div key={item.id}>
          <div>
            <img src={item.thumbnailUrl} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
