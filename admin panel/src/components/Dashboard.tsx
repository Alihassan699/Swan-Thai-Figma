import React from 'react';
import Common from './Common';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const pieData = [
  { name: 'Salary', value: 520 },
  { name: 'Bonus', value: 580 },
  { name: 'Tips', value: 50 },
];

const barData = [
  { name: 'Jan', earnings: 3000 },
  { name: 'Feb', earnings: 2800 },
  { name: 'Mar', earnings: 2700 },
  { name: 'Apr', earnings: 2900 },
  { name: 'May', earnings: 3100 },
  { name: 'Jun', earnings: 3300 },
  { name: 'Jul', earnings: 3200 },
];

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56'];

const tableData = [
  { payrun: 'CH66 2RD', period: 'June 13, 2020', type: 'Offline', status: 'Paid', salary: '$40,000' },
  { payrun: 'KT17 9NL', period: 'June 13-14, 2020', type: 'One-Time', status: 'Pending', salary: '$100,000' },
  { payrun: 'SN10 2RP', period: 'June 4-7, 2020', type: 'Full Amount', status: 'Paid', salary: '$150,000' },
  { payrun: 'G72 7ND', period: 'June 11-14, 2020', type: 'Recurring', status: 'Pending', salary: '$180,000' },
  { payrun: 'NW6 4HA', period: 'June 13-14, 2020', type: 'Full Amount', status: 'Pending', salary: '$120,000' },
];

function Dashboard() {
  return (
    <>
      <Common />
        <div className='container'>
            {/* Date Picker */}
            <div className='row'>
                <div className='col-12 d-flex justify-content-end'>
                    <input type="date" className="form-control p-2 border-[#ccc] border-[2px] w-48 inter text-sm text-[#293050]" aria-describedby="date" />
                </div>
            </div>

            {/* Cards Section */}
        <div className='row gap-4 mt-5 ml-10'>
            <div className='col-3 d-flex flex-column border rounded-sm w-64 p-4'>
                <h1 className='text-[#404040] sans text-xl'>Total Employees</h1>
                <h2 className='text-[#146ADC] inter text-3xl'>34</h2>
            </div>
            <div className='col-3 d-flex flex-column border border-[#C5C5C5] rounded-sm w-64 p-4'>
                <h1 className='text-[#404040] sans text-xl'>Total Hours Worked</h1>
                <h2 className='text-[#146ADC] inter text-3xl'>20</h2>
            </div>
            <div className='col-3 d-flex flex-column border border-[#C5C5C5] rounded-sm w-64 p-4'>
                <h1 className='text-[#404040] sans text-xl'>Avg Working Hours</h1>
                <h2 className='text-[#146ADC] inter text-3xl'>87</h2>
            </div>
            <div className='col-3 d-flex flex-column border border-[#C5C5C5] rounded-sm w-64 p-4'>
                <h1 className='text-[#404040] sans text-xl'>Avg Working Hours</h1>
                <h2 className='text-[#146ADC] inter text-3xl'>122</h2>
            </div>
        </div>

        {/* Charts Section */}
        <div className='row gap-1 mt-5'>
            <div className='col-7'>
                <div className='border rounded-sm p-2'>
                    <h2 className='text-[#404040] sans text-xl mt-2'>Earnings Per Month</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={barData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="earnings" fill="#36A2EB" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className='col-4'>
                <div className='border rounded-sm p-2'>
                    <div className="flex justify-between items-center">
                        <h2 className='text-[#404040] sans text-xl'>EARNINS</h2>
                        <select className='form-select w-40'>
                            <option>This Week</option>
                            <option>This Month</option>
                            <option>This Year</option>
                        </select>
                    </div>
                    <h1 className='text-[#146ADC] text-4xl'>$5,000</h1>
                    <h4 className='text-[#666666]'>28 Days</h4>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={70}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                                >
                                {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className='flex justify-between mt-4'>
                        <div className='flex items-center'>
                            <div className='w-3 h-3 rounded-full mr-2' style={{ backgroundColor: COLORS[0] }}></div>
                                <span>Salary</span>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-3 h-3 rounded-full mr-2' style={{ backgroundColor: COLORS[1] }}></div>
                                    <span>Bonus</span>
                                </div>
                            <div className='flex items-center'>
                            <div className='w-3 h-3 rounded-full mr-2' style={{ backgroundColor: COLORS[2] }}></div>
                                <span>Tips</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                {/* Table Section */}
            <div className='row gap-1 mt-5'>
                <div className='col-12'>
                    <div className='border rounded-sm p-4'>
                        <div className='d-flex justify-content-between mb-3'>
                            <h2 className= '  text-[#404040] sans text-4xl'>Slip</h2>
                            <input type="date" className="form-control p-2 border-[#ccc] border-[2px] w-48 inter text-sm text-[#293050]" aria-describedby="date" />
                        </div>
                        <div className='d-flex justify-content-around mb-3 mt-8'>
                        <div className='text-start border w-48 p-3 rounded-lg'>
                  <h3 className='text-[#404040] inter text-xl'>24</h3>
                  <p className='text-[#9E9E9E] text-base'>Total Payslip</p>
                </div>
                <div className='text-start border w-48 rounded-lg p-3'>
                  <h3 className='text-[#404040] inter text-xl'>6</h3>
                  <p className='text-[#9E9E9E] text-base'>Payslip Sent</p>
                </div>
                <div className='text-start border w-48 rounded-lg p-3'>
                  <h3 className='text-[#404040] inter text-xl'>2</h3>
                  <p className='text-[#9E9E9E] text-base'>Conflicted Payslip</p>
                </div>
              </div>
              <table className='table table-bordered table-hover'>
                <thead className='table-light'>
                  <tr>
                    <th>Payrun</th>
                    <th>Period</th>
                    <th>Payrun Type</th>
                    <th>Status</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.payrun}</td>
                      <td>{row.period}</td>
                      <td>{row.type}</td>
                      <td>{row.status}</td>
                      <td>{row.salary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Pagination */}
              <div className='d-flex justify-content-between'>
                <button className='btn btn-outline-secondary'>Prev</button>
                <div className='d-flex align-items-center'>
                  <span>Page: </span>
                  <span className='mx-2'>1</span> of <span className='mx-2'>100</span>
                </div>
                <button className='btn btn-outline-secondary'>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
