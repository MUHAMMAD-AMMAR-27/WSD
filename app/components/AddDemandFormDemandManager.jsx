import React, { useEffect, useState } from 'react';
import { createApiRoute, createAxiosMultipartPostRequest, createDataForEevee } from "../src/utils/api_client.js";
import SearchableChipSelect from "./SearchableChipSelect.jsx";
import { useNavigate } from "react-router-dom";
import WSDOptionList from "./ui_kit/WSDOptionList.jsx"

const AddDemandFormDemandManager = () => {
    const navigate = useNavigate();

  const [trades, setTrades] = useState([]);

  const [isLoading, setIsLoading] = useState(false);


  const [selectedSubTrades, setSelectedSubTrades] = useState([]); // selected subtrades (array of names)
  const [subTradeData, setSubTradeData] = useState({});
  const [activeSubTrade, setActiveSubTrade] = useState(null);
  const [selectedTrades, setSelectedTrades] = useState([]);
  const [selectedTrade, setSelectedTrade] = useState(null);
  const [subTradeIDS, setSubTradeIDS] = useState({});

  const [demandType, setDemandType] = useState("");
  const [reference, setReference] = useState("");
  const [country, setCountry] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [visaType, setVisaType] = useState("");
  const [foodBenefit, setFoodBenefit] = useState("");
  const [accommodationBenefit, setAccommodationBenefit] = useState("");
  const [transportBenefit, setTransportBenefit] = useState("");
  const [medicalBenefit, setMedicalBenefit] = useState("");
  const [blueBenefit, setBlueBenefit] = useState("");
  const [agreementYear, setAgreementYear] = useState("");
  const [wakalaNumber, setWakalaNumber] = useState("");
  const [wakalaDate, setWakalaDate] = useState("");
  const [permissionNumber, setPermissionNumber] = useState("");
  const [permissionDate, setPermissionDate] = useState("");
  const [remarks, setRemarks] = useState("");
  const [countries, setCountries] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [demandReferences, setDemandReferences] = useState([]);


  useEffect(() => {
    fetchAllTradesAndSubTrades()
    fetchCountries()
    fetchCompanies()
    fetchAllDemandReferences()
  }, []);
  const fetchAllTradesAndSubTrades = () => {

    const data = createDataForEevee();
    const formBody = new URLSearchParams(data).toString();

    fetch(createApiRoute("fetch_all_trades.php"), {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("API Response:", result);

        if (result.state === "OK") {
          setTrades(result.data.trades);
        }

      })
      .catch((err) => {
        console.error(err);
      });
  };


  const registerDemand = () => {
    setIsLoading(true);

    createAxiosMultipartPostRequest("register_demands.php", {
      demand_type: demandType
    })
      .then((res) => res.data)
      .then(({ state, data }) => {
        console.log("Demand Reference Login Response: ", state, data);

        if (state === "FAILURE") {
          setIsLoading(false);
          alert("Incorrect phone number or password!");
          return;
        }

        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  const fetchCountries = () => {

    const data = createDataForEevee();
    const formBody = new URLSearchParams(data).toString();

    fetch(createApiRoute("fetch_all_countries.php"), {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.state === "OK") {
          setCountries(result.data.countries);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const fetchCompanies = () => {

    const data = createDataForEevee();
    const formBody = new URLSearchParams(data).toString();

    fetch(createApiRoute("fetch_all_companies.php"), {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.state === "OK") {
          setCompanies(result.data.companies);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchAllDemandReferences = () => {
    const data = createDataForEevee();
    const formBody = new URLSearchParams(data).toString();

    fetch(createApiRoute("fetch_all_demand_references.php"), {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.state === "OK") {
          console.log("Demand References: ", result);

          const demand_references = result.data.demand_references.map((ref) => {
            return { id: ref.id, name: ref.reference_name};
          });

          setDemandReferences(demand_references);

        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  for (let i = 0; i < demandReferences.length; i++) {
    console.log("temp", demandReferences[i]);
  }

  demandReferences.forEach((ref) => console.log("ref", ref));
  const options = [];
  for (const index in demandReferences) {
    const ref = demandReferences[index]; // get the actual object
    options.push(
      <option key={ref.id} value={ref.id}>
        {ref.name}
      </option>
    );
  }


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg z-40  max-h-[90vh]  overflow-auto shadow-lg w-screen max-w-3xl p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Add Demand</h2>
            <p className="text-sm text-gray-500 mt-1">Please enter the following details to create your demand.</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Demand Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Demand Type</label>
              <select
                onChange={e => setDemandType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Demand Type</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>
            </div>

            {/* Reference */}
            <WSDOptionList
              label="Reference"
              placeholder="Select Reference"
              options={demandReferences.map((r) => ({
                value: r.id,
                label: r.name,
              }))}
            />


            {/* Country */}
            <WSDOptionList
              label="Country"
              placeholder="Select country"
              options={countries.map((c) => ({
                value: c.id,
                label: c.name,
              }))}
            />

            {/* Company Name */}
            <WSDOptionList
              label="Company Name"
              placeholder="Select company"
              options={companies.map((c) => ({
                value: c.id,
                label: c.company_name,
              }))}
            />



            {/* Visa Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Visa Type</label>
              <select
                onChange={e => setVisaType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Visa Type</option>
                <option value="work">Work Visa</option>
                <option value="visit">Visit Visa</option>
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Benefits Provided */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Benefits Provided</label>
              <div className="space-y-2">
                <div className="flex items-center space-x-8">
                  <label className="flex items-center cursor-pointer">
                    <input
                      onChange={e => setFoodBenefit(e.target.checked)}
                      type="checkbox"
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Food</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      onChange={e => setAccommodationBenefit(e.target.checked)}
                      type="checkbox"
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Accommodation</span>
                  </label>
                </div>
                <div className="flex items-center space-x-8">
                  <label className="flex items-center cursor-pointer">
                    <input
                      onChange={e => setTransportBenefit(e.target.checked)}
                      type="checkbox"
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Transport</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      onChange={e => setMedicalBenefit(e.target.checked)}
                      type="checkbox"
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Medical</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center cursor-pointer">
                    <input
                      onChange={e => setBlueBenefit(e.target.checked)}
                      type="checkbox"
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Blue</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Agreement Year */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Agreement Year</label>
              <select
                onChange={e => setAgreementYear(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Agreement Year</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>

            <div className="max-w-md rounded-md border border-gray-300 bg-white p-4">
              {/* Title */}
              <h3 className="mb-3 text-sm font-medium text-gray-700">
                Wakala Status
              </h3>

              {/* Inputs Row */}
              <div className="grid grid-cols-2 gap-4">
                {/* Number */}
                <div className="space-y-1">
                  <label className="select-none text-xs font-medium text-gray-600">
                    Number
                  </label>
                  <input
                    onChange={e => setWakalaNumber(e.target.value)}
                    type="text"
                    placeholder="(24494380)"
                    className="h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 text-sm shadow-xs outline-none focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Date */}
                <div className="space-y-1">
                  <label className="select-none text-xs font-medium text-gray-600">
                    Date
                  </label>
                  <input
                    onChange={e => setWakalaDate(e.target.value)}
                    type="date"
                    className="h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 text-sm shadow-xs outline-none focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-md rounded-md border border-gray-300 bg-white p-4">
              {/* Title */}
              <h3 className="mb-3 text-sm font-medium text-gray-700">
                Permission Status
              </h3>

              {/* Inputs Row */}
              <div className="grid grid-cols-2 gap-4">
                {/* Number */}
                <div className="space-y-1">
                  <label className="select-none text-xs font-medium text-gray-600">
                    Number
                  </label>
                  <input
                    onChange={e => setPermissionNumber(e.target.value)}
                    type="text"
                    placeholder="(24494380)"
                    className="h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 text-sm shadow-xs outline-none focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Date */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600">
                    Date
                  </label>
                  <input
                    onChange={e => setPermissionDate(e.target.value)}
                    type="date"
                    className="h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 text-sm shadow-xs outline-none focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            {/* Remarks / Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Remarks / Notes</label>
              <textarea
                onChange={e => setRemarks(e.target.value)}
                placeholder="Enter remarks or demand notes"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-base font-semibold text-gray-800 mb-3">
            Demand Trade & SubTrade
          </h3>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Trade
          </label>

          {/* Dropdown for Trades */}
          <SearchableChipSelect
            tradeId={0} // placeholder
            options={trades.map((t) => t.name)}
            selectedChips={selectedTrades.map((t) => t.name)}
            onChange={(selectedTradeNames) => {
              const selectedTradeObjects = trades.filter((t) =>
                selectedTradeNames.includes(t.name)
              );
              setSelectedTrades(selectedTradeObjects);
            }}
          />



          {/* SUB-TRADES WRAPPED BY TRADE */}
          {selectedTrades.map((trade) => (
            <div key={trade.id} className="mt-4 border border-gray-300 rounded-md p-2">
              {/* Trade Name Header */}
              <h4 className="text-sm font-medium mb-2">{trade.name} SubTrades</h4>

              {/* Sub-trades for this trade */}
              {trade.sub_trades.map((subTrade) => (
                <div
                  key={subTrade.id}
                  className="rounded-md mt-2 border border-gray-300 p-3"
                >
                  {/* ROW */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{subTrade.name}</span>

                    {activeSubTrade === subTrade.id ? (
                      <button
                        onClick={() => {
                          setSubTradeData((prev) => {
                            const newData = { ...prev };
                            delete newData[subTrade.id];
                            return newData;
                          });
                          setActiveSubTrade(null);
                        }}
                        className="rounded-md bg-red-500 px-3 py-1 text-xs text-white"
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        onClick={() => setActiveSubTrade(subTrade.id)}
                        className="rounded-md bg-green-500 px-3 py-1 text-xs text-white"
                      >
                        Add
                      </button>
                    )}
                  </div>

                  {/* EXPANDED ROW */}
                  {activeSubTrade === subTrade.id && (
                    <div className="mt-4 space-y-3">
                      <div className="flex gap-4">
                        {/* Salary */}
                        <div className="w-1/4">
                          <label className="text-xs text-gray-600">Salary (PKR)</label>
                          <input
                            type="text"
                            value={subTradeData[subTrade.id]?.salary || ""}
                            onChange={(e) =>
                              setSubTradeData((prev) => ({
                                ...prev,
                                [subTrade.id]: {
                                  ...prev[subTrade.id],
                                  salary: e.target.value,
                                },
                              }))
                            }
                            className="mt-1 h-9 w-full border border-gray-300 rounded-md text-gray-500 px-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                          />
                        </div>

                        {/* Openings */}
                        <div className="w-1/4">
                          <label className="text-xs text-gray-600">Openings</label>
                          <input
                            type="number"
                            value={subTradeData[subTrade.id]?.openings || ""}
                            onChange={(e) =>
                              setSubTradeData((prev) => ({
                                ...prev,
                                [subTrade.id]: {
                                  ...prev[subTrade.id],
                                  openings: e.target.value,
                                },
                              }))
                            }
                            className="mt-1 h-9 w-full border border-gray-300 rounded-md text-gray-500 px-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                          />
                        </div>

                        {/* Duty Hours */}
                        <div className="w-1/4">
                          <label className="text-xs text-gray-600">Duty Hours</label>
                          <input
                            type="text"
                            value={subTradeData[subTrade.id]?.dutyHours || ""}
                            onChange={(e) =>
                              setSubTradeData((prev) => ({
                                ...prev,
                                [subTrade.id]: {
                                  ...prev[subTrade.id],
                                  dutyHours: e.target.value,
                                },
                              }))
                            }
                            className="mt-1 h-9 w-full border border-gray-300 rounded-md text-gray-500 px-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                          />
                        </div>

                        {/* Price Code */}
                        <div className="w-1/4">
                          <label className="text-xs text-gray-600">Price Code</label>
                          <input
                            type="text"
                            value={subTradeData[subTrade.id]?.priceCode || ""}
                            onChange={(e) =>
                              setSubTradeData((prev) => ({
                                ...prev,
                                [subTrade.id]: {
                                  ...prev[subTrade.id],
                                  priceCode: e.target.value,
                                },
                              }))
                            }
                            className="mt-1 h-9 w-full border border-gray-300 rounded-md text-gray-500 px-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                          />
                        </div>
                      </div>

                      {/* CHECKBOX */}
                      <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input
                          type="checkbox"
                          checked={subTradeData[subTrade.id]?.isMax || false}
                          onChange={(e) =>
                            setSubTradeData((prev) => ({
                              ...prev,
                              [subTrade.id]: {
                                ...prev[subTrade.id],
                                isMax: e.target.checked,
                              },
                            }))
                          }
                          className="h-4 w-4 border border-gray-300 rounded-sm text-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none checked:bg-green-500 checked:border-green-500"
                        />
                        Fill this box if subtrades have reached their maximum openings
                      </label>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}

        </div>



        {/* Footer Buttons */}
        <div className="flex justify-between mt-8">
          <button
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
          <div className="flex gap-3">
            <button
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={registerDemand}
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Add Demand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDemandFormDemandManager;
