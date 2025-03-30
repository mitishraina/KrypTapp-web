import React, { useContext, useState } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import OtpInput from "react-otp-input";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MuiOtpInput } from "mui-one-time-password-input";
import axios from "axios";
import Circler from "../Circler";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import Loader from "../Loader";
import { initTransaction } from "../../lib/instance";
import success from "../../success.svg";
import Dropdown from "./Dropdown";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};
const items = [
  { name: "Demo: Age Verification" },
  { name: "Demo: Library Book Return" },
];

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    min={0}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-md py-2 px-4 outline-none text-black border-none text-sm white-glassmorphism"
  />
);

const SendAction = () => {
  const {
    currentAccount,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
    nfcResponse,
    setNfcResponse,
    modalLoading,
    setModalLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { amount, message } = formData;

    e.preventDefault();

    // if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [otp, setOtp] = useState("");

  const handleOtpChange = (newValue) => {
    setOtp(newValue);
  };

  const startTransaction = async () => {
    setModalLoading(true);
    try {
      const response = await axios.get("http://localhost:4000/retrieve");
      setNfcResponse(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setModalLoading(false);
    }
  };

  const handleModal = (e) => {
    e.preventDefault();
    setOpen(true);
    startTransaction();
  };
  const [th, setTh] = useState("");
  const [pinLoading, setPinLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  console.log(
    nfcResponse.encryptedPrivateKey,
    currentAccount,
    formData.amount,
    otp,
    nfcResponse.decryptIV,
    nfcResponse.decryptSalt
  );
  async function submitPin() {
    // start loading
    // start transaction
    // wait for transaction to complete
    // if wron
    setPinLoading(true);
    setSuccessful(false);
    try {
      console.log(
        nfcResponse.encryptedPrivateKey,
        currentAccount,
        formData.amount,
        otp,
        nfcResponse.decryptIV,
        nfcResponse.decryptSalt
      );
      const x = await initTransaction(
        nfcResponse.encryptedPrivateKey,
        currentAccount,
        formData.amount,
        otp,
        nfcResponse.decryptIV,
        nfcResponse.decryptSalt
      );
      setTh(x);
      setSuccessful(true);
    } catch (err) {
      setOtp("");
    } finally {
      setPinLoading(false);
    }
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center w-full mf:mt-0 mt-10  relative">
      {/* <div className="flex justify-between flex-col w-full h-full">
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
        </div> */}
      <div className="p-0 sm:w-96 w-full flex flex-col mb-8 rounded-lg justify-start items-center blue-glassmorphism">
        <Dropdown items={items} />
      </div>

      <div className="p-4 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
        <Input
          placeholder="Amount (ETH)"
          name="amount"
          type="number"
          handleChange={handleChange}
        />
        <Input
          placeholder="Enter Message"
          name="message"
          type="text"
          handleChange={handleChange}
        />

        {isLoading ? (
          <Loader />
        ) : (
          <button
            type="button"
            onClick={handleModal}
            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          >
            Receive now
          </button>
        )}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {modalLoading ? (
            <div className="flex flex-col">
              <div>
                <Typography
                  id="modal-modal-title"
                  className=" text-center"
                  variant="h6"
                  component="h2"
                >
                  Please tap your card
                </Typography>
              </div>
              <div className="relative -bottom-16 left-40">
                <Circler />
              </div>
            </div>
          ) : (
            // <Loader />
            // <Circler />
            <>
              {pinLoading === false && (
                // eslint-disable-next-line react/jsx-no-useless-fragment
                <>
                  {successful === true ? (
                    <div className="justify-center items-center flex flex-col gap-2">
                      <img className="w-1/3 h-1/3" src={success} alt="" />
                      <a
                        href={`https://goerli.etherscan.io/tx/${th}`}
                        className="underline"
                      >
                        Click here to see transaction on Ether Scan
                      </a>
                    </div>
                  ) : (
                    <div>
                      <Typography
                        id="modal-modal-title"
                        className=" text-center"
                        variant="h6"
                        component="h2"
                      >
                        Please enter the registered PIN
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <input
                          type="password"
                          value={otp}
                          onChange={(e) => handleOtpChange(e.target.value)}
                          maxLength={6}
                          style={{
                            width: "100%",
                            height: "40px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            fontSize: "20px",
                            textAlign: "center",
                            outline: "none",
                            color: "#000",
                            backgroundColor: "#fff",
                          }}
                          className="my-2 w-full rounded-md py-2 px-4 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                        />
                        <button
                          type="button"
                          onClick={submitPin}
                          className="w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer text-black"
                        >
                          OK
                        </button>
                      </Typography>
                    </div>
                  )}
                </>
              )}
              {pinLoading === true && (
                <div>
                  <Circler />
                </div>
              )}
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};
export default SendAction;
