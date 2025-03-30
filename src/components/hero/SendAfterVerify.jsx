import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

const SendAfterVerify = () => {
  const companyCommonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

  const { currentAccount } = useContext(TransactionContext);
  return (
    <div className="flex flex-1 justify-center items-start bottom-12 relative flex-col mf:mr-10">
      <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
        Receive Crypto <br /> and Verify the identity
      </h1>
      <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
        Global initiave to democratize all your card needs and verification services,
        through single tap. KRYPTAPP
      </p>

      <div className="p-3 px-5 flex justify-end items-start flex-col rounded-xl h-40 sm:w-96 w-full my-5 eth-card .white-glassmorphism ">
        <div className="flex justify-between flex-col w-full h-full">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
              <SiEthereum fontSize={21} color="#fff" />
            </div>
            <BsInfoCircle
              fontSize={17}
              color="#fff"
              className="relative top-2"
            />
          </div>
          <div>
            <p className="text-white font-light text-sm">
              {shortenAddress(currentAccount)}
            </p>
            <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SendAfterVerify;
