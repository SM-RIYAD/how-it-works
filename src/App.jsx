import "./App.css";
import Circle from "./components/Circle";

function App() {
  return (
    <div className=" w-full p-20">
      <h1 className="text-4xl font-bold text-center text-red-400 my-20">
        How it works
      </h1>

      <div className="relative mt-56">
        <div className="bg-blue-500 flex items-center justify-center lg:h-[160px] lg:w-[160px] h-[200px] w-[200px] rounded-full">
          <div>
            <img className="ps-5" src="/images/goal 2.png" alt="" srcset="" />
            <p className="text-white ps-5  font-bold text-base"> Step 1: </p>

            <p className="text-white   font-bold text-base"> Set your goal</p>
          </div>
        </div>

        <img
          className="absolute lg:bottom-[150px]  lg:left-[130px] bottom-[200px]  left-[130px]"
          src="/images/Arrow 1.png"
          alt=""
        />
        <div className="bg-blue-500 flex items-center justify-center lg:h-[160px] lg:w-[160px] h-[200px] w-[200px] rounded-full absolute left-[325px] bottom-[190px]">
          <div>
            <img
              className="ps-5"
              src="/images/add-friend 1.png"
              alt=""
              srcset=""
            />
            <p className="text-white ps-5  font-bold text-base"> Step 2: </p>

            <p className="text-white   font-bold text-base">
              Create or  Join<br /> <span className="ps-5">Group</span> 
            </p>
          </div>
        </div>
        <img
          className="absolute lg:bottom-[240px]  lg:left-[465px]
          bottom-[140px] lg:rotate-0 rotate-45  left-[475px]
          "
          src="/images/Arrow 2.png"
          alt=""
        />
           <div className="bg-blue-500 flex items-center justify-center lg:h-[160px] lg:w-[160px] h-[200px] w-[200px] rounded-full absolute lg:left-[650px] lg:bottom-[100px] left-[480px] -bottom-[130px]">
          <div>
            <img
              className="ps-5"
              src="/images/pay-per-click 1.png"
              alt=""
              srcset=""
            />
            <p className="text-white ps-5  font-bold text-base"> Step 3: </p>

            <p className="text-white   font-bold text-base">
          
Pay amount <br /> <span className="ps-3">on time</span>
            </p>
          </div>
        </div>

        <img
          className="absolute lg:bottom-[160px] lg:rotate-0 rotate-180  lg:left-[810px] -bottom-[130px]  left-[220px]"
          src="/images/Arrow 3.png"
          alt=""
        />
         <div className="bg-blue-500 flex items-center justify-center lg:h-[160px] lg:w-[160px] h-[200px] w-[200px] rounded-full absolute left-[30px] -bottom-[300px] lg:left-[1040px] lg:bottom-[200px]">
          <div>
            <img
              className="ps-5"
              src="/images/gift-card 1.png"
              alt=""
              srcset=""
            />
            <p className="text-white ps-5  font-bold text-base"> Step 4: </p>

            <p className="text-white   font-bold text-base">
          
  
Earn Rewards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
