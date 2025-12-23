import React from 'react'

const FeatureCard = ({ title, desc }) => {
  return (
    <div className="bg-orange-50 border border-orange-100 p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </div>
  )
}

export default FeatureCard
