import React, { useState, useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import useModeStore from "../context/modeStore.js";
import { TransactionContext } from "../context/TransactionContext";
import kryplogo from "../kryplogo.png"


const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { currentAccount, connectWallet } = useContext(TransactionContext);

  const { setMode } = useModeStore();

  const handleReceiveMode = () => {
    setMode("receive");
  };

  const handleVerifyMode = () => {
    console.log("verify");
    setMode("verify");
  };

  const handleReceiveAfterVerifyMode = () => {
    console.log("verify");
    setMode("receiveafterverify");
  };

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={kryplogo} alt="logo" className="w-32  cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <li>
          <button type="button" onClick={handleReceiveMode}>
            <NavBarItem key={1} title="Receive Money" />
          </button>
        </li>
        <li>
          <button type="button" onClick={handleVerifyMode}>
            <NavBarItem key={2} title="Verify User" />
          </button>
        </li>
        <li>
          <button type="button" onClick={handleReceiveAfterVerifyMode}>
            <NavBarItem key={3} title="Receive Money After Verification" />
          </button>
        </li>

        {!currentAccount ? (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li
            className="bg-black py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-gray-700"
            onClick={connectWallet}
          >
            Connect to Hard Wallet
            {/* add the connect with Metamask button here which sets the to Wallet address  */}
          </li>
        ) : (
          <li className="bg-black py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-gray-700">
            Connected to Hard Wallet
            {/* add the connect with Metamask button here which sets the to Wallet address  */}
          </li>
        )}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
