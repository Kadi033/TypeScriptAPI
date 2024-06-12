import first from '../assets/1.jpg'
import second from '../assets/2.jpg'
import third from '../assets/3.jpg'
import fourth from '../assets/4.jpg'
import fiveth from '../assets/5.jpg'
import sixth from '../assets/6.jpg'
function Home() {
  return (
    <div className="  bg-gradient-to-br from-purple-600 to-blue-500 opacity-95 h-[70vh] text-white">
      <div className='flex justify-around items-center'>

        <div className=" flex flex-col text-[#1a2160] bg-white w-96 h-96 rounded-xl p-5  text-center">
          <h1 className=" text-5xl">Lorem ipsum dolor.</h1>
          <h2 className=' pt-3 text-2xl'>, sit amet consectetur adipisicing elit. </h2>
          <p className=' text-gray-400 text-xl pt-3'>
            Dolor veniam ad similique, at sequi perferendis, ea laudantium ipsum
            beatae iure fugiat animi quos distinctio doloremque ratione harum
            qui dignissimos natus
          </p>
        </div>
        <div className='grid grid-cols-3 gap-3 mt-5'>
          <img src={first} alt=""  className='w-52 h-52 rounded-xl'/>
          <img src={second} alt=""  className='w-52 h-52 rounded-xl'/>
          <img src={third} alt=""  className='w-52 h-52 rounded-xl'/>
          <img src={fourth} alt=""  className='w-52 h-52 rounded-xl'/>
          <img src={fiveth} alt="" className='w-52 h-52 rounded-xl' />
          <img src={sixth} alt=""  className='w-52 h-52 rounded-xl'/>
        </div>
      </div>
    </div>
  );
}

export default Home;
