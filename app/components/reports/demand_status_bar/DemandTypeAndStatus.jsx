import React from "react"

const DemandTypeAndStatus = ({ category }) => {

   if (category.toLowerCase() === "demand type") {
     return (
       <div className="text-sm text-gray-600 space-y-2">
         <h2 className="text-lg font-semibold text-green-600 pl-2">{category}</h2>

         <div className="flex flex-wrap gap-3 ">
           <Status value={"02"} status={"Green"} />
           <Status value={"02"} status={"Blue"} />
         </div>
       </div>
     )
   } else if (category.toLowerCase() === "status bar") {
     return (
       <div className="text-sm text-gray-600 space-y-2">
         <h2 className="text-lg font-semibold text-green-600 pl-2">{category}</h2>

         <div className="flex flex-wrap gap-3 ">
           <Status value={"02"} status={"Submit (Under Process)"} />
           <Status value={"10"} status={"Online (Visa)"} />
           <Status value={"5"} status={"Qvc (Med Appointment)"} />
           <Status value={"1"} status={"Ready to Print (Visa)"} />
           <Status value={"1"} status={"Submit (Under Prasess)"} />
         </div>
       </div>
     )
   }

}

function Status({ status, value }) {
  return (
    <div className="min-w-[120px] px-3 py-2 bg-gray-100 rounded-lg shadow text-center flex flex-col">
      <span className="text-xs font-medium truncate">{status}</span>
      <span className="text-lg font-bold">{value}</span>
    </div>
  )
}

export default DemandTypeAndStatus
