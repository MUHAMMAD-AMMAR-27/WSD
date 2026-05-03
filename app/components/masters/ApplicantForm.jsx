import React, { useEffect, useState } from "react"
import { LucidePhoneCall, PlusIcon } from "lucide-react"
import PhoneInput from "react-phone-input-2"
import Select from "react-select"
import { createApiRoute, createDataForEevee } from "../../src/utils/api_client.js"

const ApplicantForm = ({ ref, applicantReferenceName, status, applicantReferenceAddress, city, editMode, applicantReferenceNumber, applicantReferenceSecondaryNumber, country, applicantReferencePassword }) => {
  const [selected, setSelected] = useState("")
  const [value, setValue] = useState()
  const [selectedOption, setSelectedOption] = useState("")

  const [isCountriesLoading, setIsCountriesLoading] = useState(false)
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [messageType, setMessageType] = useState("")

  const [referenceName, setReferenceName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [secondaryPhoneNumber, setSecondaryPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [residentialCity, setResidentialCity] = useState("")
  const [password, setPassword] = useState("")
  const [countryId, setCountryId] = useState("")
  const [isCountry, setIsCountry] = useState("")

  const [applicantReferenceEditMode, setApplicantReferenceEditMode] = useState(null)

  useEffect(() => {
    if (editMode != null) {
      setReferenceName(applicantReferenceName || "")
      setPhoneNumber(applicantReferenceNumber || "")
      setSecondaryPhoneNumber(applicantReferenceSecondaryNumber || "")
      setAddress(applicantReferenceAddress || "")
      setResidentialCity(city || "")
      setPassword(applicantReferencePassword || "")
      setIsCountry(country || "")
      setSelectedOption(status || "")
      setApplicantReferenceEditMode(editMode)

      const matchedCountry = countries.find(c => c.name === country)
      if (matchedCountry) {
        setCountryId(matchedCountry.id)
      }
    }
  }, [editMode, applicantReferenceName, applicantReferenceNumber, applicantReferenceSecondaryNumber, applicantReferenceAddress, city, applicantReferencePassword, country, status, countries])

  useEffect(() => {
    fetchCountries()
  }, [])

  const fetchCountries = () => {
    setIsCountriesLoading(true)

    const data = createDataForEevee()
    const formBody = new URLSearchParams(data).toString()

    fetch(createApiRoute("fetch_all_countries.php"), {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.state === "OK") {
          setMessageType("success")
          setCountries(result.data.countries)
        }
        setIsCountriesLoading(false)
      })
      .catch(error => {
        console.error(error)
        setIsCountriesLoading(false)
      })
  }

  const addNewApplicantReference = () => {
    setIsLoading(true)

    const data = createDataForEevee({
      reference_name: referenceName,
      phone_number: phoneNumber,
      secondary_phone_number: secondaryPhoneNumber,
      address: address,
      residential_city: residentialCity,
      country_id: countryId,
      password: password,
      status: selectedOption,
    })

    const formBody = new URLSearchParams(data).toString()

    fetch(createApiRoute("create_applicant_references.php"), {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    })
      .then(res => res.json())
      .then(res => {
        if (res.state === "FAILURE") {
          setMessageType("failure")
          alert("Failed to add applicant reference. Please try again.")
        } else {
          console.log(res)
          setMessageType("success")
          setShowSuccess(true)
          setTimeout(() => setShowSuccess(false), 4000)
        }
        setIsLoading(false)
      })
      .catch(err => {
        console.error(err)
        setIsLoading(false)
        alert("Something went wrong. Please try again.")
      })
  }

  const updateApplicantReference = () => {
    setIsLoading(true)

    const data = createDataForEevee({
      applicant_reference_id: applicantReferenceEditMode,
      reference_name: referenceName,
      phone_number: phoneNumber,
      secondary_phone_number: secondaryPhoneNumber,
      address: address,
      residential_city: residentialCity,
      country_id: countryId,
      password: password,
      status: selectedOption,
    })

    const formBody = new URLSearchParams(data).toString()

    console.log("Update payload:", formBody)

    fetch(createApiRoute("update_applicant_reference.php"), {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    })
      .then(res => res.json())
      .then(res => {
        if (res.state === "FAILURE") {
          setMessageType("failure")
          alert("Failed to update applicant reference. Please try again.")
        } else {
          setMessageType("success")
          setShowSuccess(true)
          setTimeout(() => setShowSuccess(false), 4000)
        }
        setIsLoading(false)
      })
      .catch(err => {
        console.error(err)
        setIsLoading(false)
        alert("Something went wrong. Please try again.")
      })
  }

  return (
    <>
      {/*Bread Crumb*/}
      <div className="text-sm text-gray-500 mb-4">
        <span className="font-medium text-gray-700">Dashboard</span> / Masters/ Add Applicant Reference
      </div>
      <div className="bg-white rounded-xl shadow-md p-5 md:p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {applicantReferenceEditMode ? `Update ${ref} Reference` : `Add New ${ref} Reference`}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              data-slot="label"
              className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
            >
              Reference Name
            </label>
            <input
              value={referenceName}
              onChange={e => setReferenceName(e.target.value)}
              data-slot="input"
              className="file:text-foreground border-gray-200 placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-gray-200 focus-within:ring-2  focus-within:ring-gray-300 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
              placeholder="Reference Name *"
            />
          </div>
          <div className="space-y-2">
            <label
              data-slot="label"
              className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
            >
              Phone (Optional)
            </label>
            <div className="relative" style={{ width: "100%" }}>
              <div className="react-tel-input">
                <PhoneInput
                  country={"pk"}
                  value={phoneNumber}
                  onChange={phone => setPhoneNumber(phone)}
                  enableSearch={true}
                  inputStyle={{
                    width: "100%",
                  }}
                />
              </div>
              <LucidePhoneCall className="absolute right-3 top-2.5 w-4  h-4 text-gray-500 rotate-270" />
            </div>
          </div>
          <div className="space-y-2">
            <label
              data-slot="label"
              className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
            >
              Secondary Phone (Optional)
            </label>
            <div className="relative" style={{ width: "100%" }}>
              <div className="react-tel-input">
                <PhoneInput
                  country={"pk"}
                  value={secondaryPhoneNumber}
                  onChange={phone => setSecondaryPhoneNumber(phone)}
                  enableSearch={true}
                  inputStyle={{
                    width: "100%",
                  }}
                />
              </div>
              <LucidePhoneCall className="absolute right-3 top-2.5 w-4  h-4 text-gray-500 rotate-270" />
            </div>
          </div>
          <div className="space-y-2">
            <label
              data-slot="label"
              className="flex items-center gap-2 text-sm  leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
            >
              Address
            </label>
            <input
              value={address}
              onChange={e => setAddress(e.target.value)}
              data-slot="input"
              className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-gray-200 focus-within:ring-2  focus-within:ring-gray-300 border-gray-200 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
              placeholder="Address *"
            />
          </div>
          <div className="space-y-2">
            <label
              data-slot="label"
              className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
            >
              Residential City
            </label>
            <input
              value={residentialCity}
              onChange={e => setResidentialCity(e.target.value)}
              data-slot="input"
              className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-gray-200 focus-within:ring-2  focus-within:ring-gray-300 border-gray-200 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
              placeholder="City *"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              data-slot="label"
              className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
            >
              Country Name
            </label>
            <div className="css-b62m3t-container">
              <select
                value={countryId}
                className="w-full p-1.5 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                onChange={e => setCountryId(e.target.value)}
              >
                <option value="" disabled>
                  Select Country
                </option>
                {countries.map(country => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-2 relative">
            <label
              data-slot="label"
              className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
            >
              Password (Optional)
            </label>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              data-slot="input"
              className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-gray-200 focus-within:ring-2  focus-within:ring-gray-300 border-gray-200 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
              placeholder="Password *"
              type="password"
            />
          </div>
          <div className="space-y-2">
            <label
              data-slot="label"
              className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
            >
              Status
            </label>
            <div className="css-b62m3t-container">
              <select
                value={selectedOption}
                onChange={e => setSelectedOption(e.target.value)}
                className="custom-select w-full p-1.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" selected={true} disabled={true}>Select Status</option>
                <option value="Active">Active</option>
                <option value="Dormant">Dormant</option>
                <option value="Block">Block</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => applicantReferenceEditMode ? updateApplicantReference(): addNewApplicantReference()}
            disabled={isLoading}
            data-slot="button"
            className="inline-flex items-center justify-center text-white gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([className*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-9 px-4 py-2 has-[>svg]:px-3 mt-4 w-full md:w-auto cursor-pointer min-w-48 bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PlusIcon />
            {isLoading ? "Processing..." : applicantReferenceEditMode ? `Update ${ref} Reference` : `Add ${ref} Reference`}
          </button>
        </div>
      </div>
    </>
  )
}

export default ApplicantForm;