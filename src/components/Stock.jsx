import { useEffect, useRef, useState } from "react"

function Stock() {
  const tradingContainer = useRef();
  const compareContainer = useRef();
  const technicals = useRef();
  const [activeTab, setActiveTab] = useState("openOrders")

  useEffect(() => {
    const tradingScript = document.createElement("script");
    tradingScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    tradingScript.type = "text/javascript";
    tradingScript.async = true;
    tradingScript.innerHTML = `
      {
        "autosize": true,
        "symbol": "ETHUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }
    `;
    tradingContainer.current.appendChild(tradingScript);
  }, []);

  useEffect(() => {
    const compareScript = document.createElement("script");
    compareScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    compareScript.type = "text/javascript";
    compareScript.async = true;
    compareScript.innerHTML = `
      {
        "height": 550,
        "defaultColumn": "overview",
        "screener_type": "crypto_mkt",
        "displayCurrency": "USD",
        "colorTheme": "dark",
        "locale": "en"
      }
    `;
    compareContainer.current.appendChild(compareScript);
  }, []);

  useEffect(() => {
    const technical = document.createElement("script");
    technical.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    technical.type = "text/javascript";
    technical.async = true;
    technical.innerHTML = `
      {
        "interval": "1m",
        "width": 325,
        "isTransparent": false,
        "height": 370,
        "symbol": "COINBASE:ETHUSD",
        "showIntervalTabs": true,
        "displayMode": "single",
        "locale": "en",
        "colorTheme": "dark"
      }
    `;
    technicals.current.appendChild(technical);
  }, []);





  // <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" async>
  //   {
  //     "width": "100%",
  //   "height": 550,
  //   "defaultColumn": "overview",
  //   "screener_type": "crypto_mkt",
  //   "displayCurrency": "USD",
  //   "colorTheme": "dark",
  //   "locale": "en"
  //   }
  // </script>


  const cryptoPairs = [
    { name: "BTC/INR", price: "₹56,56,600", change: "0%" },
    { name: "XRP/INR", price: "₹51.3990", change: "0%" },
    { name: "ETH/INR", price: "₹3,03,000.0", change: "0%" },
    { name: "TRX/INR", price: "₹11.6402", change: "0%" },
    { name: "EOS/INR", price: "₹51.94", change: "0%" },
    { name: "ZIL/INR", price: "₹1.53", change: "0%" },
    { name: "BAT/INR", price: "₹47.037", change: "0%" },
    { name: "ZRX/INR", price: "₹31.78", change: "0%" },
    { name: "REQ/INR", price: "₹10.2500", change: "0%" },
    { name: "ICX/INR", price: "₹43.562", change: "0%" },
  ]

  const tradeHistory = [
    { price: "₹56,56,600", volume: "0.00088", time: "12:57:08" },
    { price: "₹56,56,600", volume: "0.00001", time: "12:57:08" },
    { price: "₹56,56,600", volume: "0.00001", time: "12:57:08" },
    { price: "₹56,56,603", volume: "0.00007", time: "12:55:21" },
    { price: "₹56,56,601", volume: "0.00161", time: "12:55:06" },
    { price: "₹56,56,601", volume: "0.00147", time: "12:55:06" },
    { price: "₹56,56,601", volume: "0.00002", time: "12:53:07" },
    { price: "₹56,56,601", volume: "0.00013", time: "12:47:33" },
    { price: "₹56,48,200", volume: "0.00252", time: "12:46:04" },
  ]

  return (
    <div className="min-h-screen stock-bg text-white">
      <nav className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold">KrypTapp</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="text-yellow-400 font-semibold">EXCHANGE</button>
          <button>INVITE & EARN</button>
          <button>HELP</button>
        </div>
        {/* <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">LOGIN</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">CREATE AN ACCOUNT</button>
        </div> */}
      </nav>

      <div className="flex">
        <div className="assets flex flex-col">
          <aside className=" p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">All Assets</span>
              <button>▼</button>
            </div>
            <div className="space-y-2">
              {cryptoPairs.map((pair) => (
                <div key={pair.name} className="flex justify-between items-center">
                  <div>
                    <div>{pair.name}</div>
                    <div className="text-green-500 text-sm">{pair.change}</div>
                  </div>
                  <div className="text-right">{pair.price}</div>
                </div>
              ))}
            </div>
          </aside>
            <div className="p-1">
              <div class="tradingview-widget-container" ref={technicals} style={{ height: "100%", width: "100%" }}>
                <div class="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
              </div>
            </div>
        </div>

        <main className="flex-1 p-1">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">BTC/INR Bitcoin</h2>
            <div className="flex space-x-4 mt-2">
              <span className="text-2xl font-bold">₹56,56,600</span>
              <span className="text-green-500">$56,566.00</span>
              <span className="text-green-500">+0.00%</span>
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <div className="trading" style={{ width: "68%" }}>
              <div className="tradingview-widget-container" ref={tradingContainer} style={{ height: "100%", width: "100%" }}>
                <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
              </div>
            </div>

            <div className="compare" style={{ width: "32%" }}>
              <div className="tradingview-widget-container" ref={compareContainer} style={{ height: "100%", width: "100%" }}>
                <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
              </div>
            </div>
          </div>

          <div className = "p-1 rounded-lg">
            <div className="flex mb-4">
              <button
                className={`mr-4 ${activeTab === "openOrders" ? "text-blue-500" : ""}`}
                onClick={() => setActiveTab("openOrders")}
              >
                Open Orders
              </button>
              <button
                className={activeTab === "completedOrders" ? "text-blue-500" : ""}
                onClick={() => setActiveTab("completedOrders")}
              >
                Completed Orders
              </button>
            </div>
            {activeTab === "openOrders" && (
              <div className="text-center py-8">
                <p>You have no open orders</p>
              </div>
            )}
            {activeTab === "completedOrders" && (
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Price</th>
                    <th className="text-left">Volume</th>
                    <th className="text-left">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {tradeHistory.map((trade, index) => (
                    <tr key={index}>
                      <td className={index % 2 === 0 ? "text-red-500" : "text-green-500"}>{trade.price}</td>
                      <td>{trade.volume}</td>
                      <td>{trade.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Stock

