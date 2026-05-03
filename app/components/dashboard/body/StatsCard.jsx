import React from 'react';

function StatsCard({ title, value }) {
  return (
    <div className="min-w-[100px] px-3 py-2 bg-gray-100 rounded-lg shadow text-center flex flex-col">
      <span className="text-xs font-medium truncate">{title}</span>
      <span className="text-lg font-bold">{value}</span>
    </div>
  )
}
export default StatsCard;