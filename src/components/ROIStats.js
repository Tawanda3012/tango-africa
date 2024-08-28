import React from 'react';

const StatCard = ({ value, label, description }) => (
  <div className="flex flex-col items-center mb-8 text-center sm:mb-0">
    <div className="mb-2 text-4xl font-bold">{value}</div>
    <div className="mb-1 text-xl font-semibold">{label}</div>
    <div className="text-sm text-gray-600 max-w-[200px]">{description}</div>
  </div>
);

const ROIStats = () => {
  return (
    <div className="flex flex-col items-center justify-around p-4 bg-white sm:flex-row sm:items-start sm:p-8">
      <StatCard
        value="286%"
        label="Average ROI"
        description="Customers achieved over three years"
      />
      <StatCard
        value="$20"
        label="Million"
        description="Net present value customers reached over three years"
      />
      <StatCard
        value="2"
        label="Months"
        description="Time it took for customers to receive payback"
      />
    </div>
  );
};

export default ROIStats;