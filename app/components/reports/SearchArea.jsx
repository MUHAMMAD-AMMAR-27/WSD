import React, { useState } from "react"
import Select from "react-select"
const SearchArea = ({ showReference }) => {
  const [selectedOption1, setSelectedOption1] = useState({
    value: "active",
    label: "Active",
  })

  const options1 = [
    { value: "Active", label: "Active" },
    { value: "Demand", label: "Demand" },
    { value: "Dormant", label: "Dormant" },
  ]

  const [selectedOption2, setSelectedOption2] = useState({
    value: "active",
    label: "Active",
  })
  const options2 = [
    { value: "Active", label: "Active" },
    { value: "Demand", label: "Demand" },
    { value: "Dormant", label: "Dormant" },
  ]

  const [selectedOption3, setSelectedOption3] = useState({
    value: "active",
    label: "Active",
  })
  const options3 = [
    { value: "Active", label: "Active" },
    { value: "Demand", label: "Demand" },
    { value: "Dormant", label: "Dormant" },
  ]

  const [selectedOption4, setSelectedOption4] = useState({
    value: "active",
    label: "Active",
  })
  const options4 = [
    { value: "Active", label: "Active" },
    { value: "Demand", label: "Demand" },
    { value: "Dormant", label: "Dormant" },
  ]

  const [selectedOption5, setSelectedOption5] = useState({
    value: "active",
    label: "Active",
  })
  const options5 = [
    { value: "Active", label: "Active" },
    { value: "Demand", label: "Demand" },
    { value: "Dormant", label: "Dormant" },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {showReference && (
        <div className="space-y-2">
          <label
            data-slot="label"
            className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
          >
            Reference
          </label>
          <div className="css-b62m3t-container">
            <Select
              value={selectedOption1}
              onChange={setSelectedOption1}
              options={options1}
              isSearchable={false}
            />
          </div>
        </div>
      )}
      <div className="space-y-2">
        <label
          data-slot="label"
          className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
        >
          Demand Status
        </label>
        <div className="css-b62m3t-container">
          <Select
            value={selectedOption1}
            onChange={setSelectedOption1}
            options={options1}
            isSearchable={false}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          data-slot="label"
          className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
        >
          Demand Type
        </label>
        <div className="css-b62m3t-container">
          <Select
            value={selectedOption2}
            onChange={setSelectedOption2}
            options={options2}
            isSearchable={false}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          data-slot="label"
          className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
        >
          Country
        </label>
        <div className="css-b62m3t-container">
          <Select
            value={selectedOption3}
            onChange={setSelectedOption3}
            options={options3}
            isSearchable={false}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          data-slot="label"
          className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
        >
          Demand
        </label>
        <div className="css-b62m3t-container">
          <Select
            value={selectedOption4}
            onChange={setSelectedOption4}
            options={options4}
            isSearchable={false}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          data-slot="label"
          className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
        >
          Status
        </label>
        <div className="css-3iigni-container">
          <span
            id="react-select-19-live-region"
            className="css-7pg0cj-a11yText"
          ></span>
          <span
            aria-live="polite"
            aria-atomic="false"
            aria-relevant="additions text"
            role="log"
            className="css-7pg0cj-a11yText"
          ></span>
          <div className="css-b62m3t-container">
            <Select
              value={selectedOption5}
              onChange={setSelectedOption5}
              options={options5}
              isSearchable={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchArea
