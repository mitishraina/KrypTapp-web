import React from "react";

import kryplogo from "../../images/kryplogo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-20 pb-3 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col items-center my-2">
      <div className="flex flex-[0.3] justify-around items-center">
        <img src={kryplogo} alt="logo" className="w-40" />
      </div>
      <div className="flex flex-1 justify-evenly flex-wrap sm:mt-0 mt-5 w-full text-white">
        <div className="footer-column ">
          <h3 className="">Get to know us!</h3>
          <ul className="">
            <li>Home</li>
            <li>Blog</li>
            <li>About KrypTapp</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="">KrypTapp Payment Products</h3>
          <ul className="">
            <li>Buisness Card</li>
            <li>Reload your balance</li>
            <li>Metamask Currency</li>
            <li></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="">Let us help you!</h3>
          <ul className="">
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Help</li>
            <li>Manage your content</li>
            <li>Complaint</li>
            <li>KrypTapp and Crypto</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">info@kryptapp.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-md">@kryptapp2025</p>
      <p className="text-white text-right text-md">&#169;All rights reserved&#8482;</p>
    </div>
  </div>
);

export default Footer;
