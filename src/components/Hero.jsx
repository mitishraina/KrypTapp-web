import { useContext } from "react";
import useModeStore from "../context/modeStore";
import Send from "./hero/Send";
import SendAction from "./hero/SendAction";
import Verify from "./hero/Verify";
import VerifyAction from "./hero/VerifyAction";
import SendAfterVerify from "./hero/SendAfterVerify";
import SendAfterVerifyAction from "./hero/SendAfterVerifyAction";
import { AiOutlineStock } from "react-icons/ai";
import Stock from "./Stock";
import { BrowserRouter, useNavigate } from 'react-router-dom'

const Hero = () => {
  const { mode } = useModeStore();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('./Stock');
  }

  console.log(mode);
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between relative bottom-8 md:p-20 py-12 px-4">
        {mode === "receive" && (
          <>
            <Send />
            <SendAction />
          </>
        )}
        {mode === "verify" && (
          <>
            <VerifyAction />
            <Verify />
          </>
        )}
        {mode === "receiveafterverify" && (
          <>
            <SendAfterVerify />
            <SendAfterVerifyAction />
          </>
        )}
      </div>
      <div className="chit hover:bg-gray-600 hover:text-white"
      onClick={handleNavigate}>
          <div className="z-10 fixed bottom-5 right-8 mx-auto flex w-8 h-8 justify-center items-center gap-x-4 rounded-full bg-white hover:bg-gray-600 p-6 shadow-lg cursor-pointer">
            <div className="">
              <AiOutlineStock className="h-7 w-7 font-bold" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;

