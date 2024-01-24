import "./App.css";
import Circle from "./components/Circle";

function App() {
  return (
    <div className=" w-full p-20">
      <h1 className="text-4xl font-bold text-center text-red-400 my-20">
        How it works
      </h1>

      <div className="relative mt-56">
        <div className="bg-blue-500 flex items-center justify-center h-[200px] w-[200px] rounded-full">
          <div>
            <img className="ps-5" src="/images/goal 2.png" alt="" srcset="" />
            <p className="text-white ps-5  font-bold text-base"> Step 1: </p>

            <p className="text-white   font-bold text-base"> Set your goal</p>
          </div>
        </div>

        <img
          className="absolute bottom-[150px]  left-[190px]"
          src="/images/Arrow 1.png"
          alt=""
      
        />
 <div className="bg-blue-500 flex items-center justify-center h-[200px] w-[200px] rounded-full absolute left-[395px] bottom-[170px]">
          <div>
            <img className="ps-10" src="/images/add-friend 1.png" alt="" srcset="" />
            <p className="text-white ps-10  font-bold text-base"> Step 2: </p>

            <p className="text-white   font-bold text-base">Create or Join
 Group</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
