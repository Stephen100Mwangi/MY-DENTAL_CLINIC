/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
 const salesData = [
  {
    name: 'Jan',
    revenue: 200,
    profit: 2400,
  },
  {
    name: 'Feb',
    revenue: 3000,
    profit: 1398,
  },
  {
    name: 'Mar',
    revenue: 9800,
    profit: 2000,
  },
  {
    name: 'Apr',
    revenue: 3908,
    profit: 2780,
  },
  {
    name: 'May',
    revenue: 4800,
    profit: 1890,
  },
  {
    name: 'Jun',
    revenue: 3800,
    profit: 2390,
  },
];

const ChartLine = ()=>{   
    return(
        <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={salesData}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#3b82f6" />
        <Line type="monotone" dataKey="profit" stroke="#08003a" />
      </LineChart>
    </ResponsiveContainer>
    )
}

export default ChartLine

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-blue-600 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-[#f0f8ff]">
          Revenue:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-[#f0f8ff]">
          Profit:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};