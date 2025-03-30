const Verify = () => {
  const companyCommonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

  return (
    <div className="flex flex-1 justify-start items-start flex-col relative bottom-6 mf:mr-10">
      <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
        Verify Age Securely and Seamlessly
      </h1>
      <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
        Global initiave to democratize all your card needs and verification services,
        through single tap. KRYPTAPP
      </p>

      <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
        <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
          Reliability
        </div>
        <div className={companyCommonStyles}>Security</div>
        <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
          Ethereum
        </div>
        <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
          Web 3.0
        </div>
        <div className={companyCommonStyles}>Low Fees</div>
        <div className={`rounded-br-2xl ${companyCommonStyles}`}>
          Blockchain
        </div>
      </div>
    </div>
  );
};
export default Verify;
