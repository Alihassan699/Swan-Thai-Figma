import React from 'react'
import { Link } from 'react-router-dom'

function Common() {
  return (
    <>
        <div className='container' >
            <div className="col-12 w-full">
                <div className='row-3'>
                    <ul className="nav justify-content-end gap-6 mt-3">
                        <li className="nav-item">
                            <img className='w-6 h-6' src='/public/world.png' alt='world.png' />
                        </li>
                        <li className="nav-item">
                            <p>EN</p>
                        </li>
                        <li className="nav-item">
                            <img className='w-6 h-6' src='/public/bell.png' alt='bell.png' />
                        </li>
                        <li className="nav-item">
                            <Link to="/login"  style={{ width: '100%' }}>
                                <img className="me-2 w-6 h-6"  src="/public/profile.png" alt="overview.png" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="row align-items-center bg-light mt-4">
                    <div className="col-4">
                        <h2 className="h4 font-weight-bold">Dashboard</h2>
                    </div>
                    <div className="col-8 text-right p-3">
                        <div className="btn-group gap-3">
                            <button className="inter bg-[#009B77] d-flex align-items-center text-base p-2.5 rounded-lg gap-2 text-[#f5f5f5]">
                                <img  src="/public/add.png" alt="add" className="mr-2 w-5 h-5" />
                                    Buddy Punching
                            </button>
                            <button className=" inter text-base  bg-[#fff] ml-2 p-2.5 rounded-lg ">
                                Manager POV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-4">
            <div className="flex justify-between items-center py-4 px-6 "><div>
                <h1 className="font-bold text-lg">Good to see you, Kimi! 👋</h1>
                <p className="text-sm text-gray-600">You came 15 minutes early today.</p>
            </div>
            <div className="flex gap-4">
                <div className="flex items-center gap-2">
                    <img src="/public/green.png" alt="Punch In Icon" className="w-6 h-6" />
                        <div>
                            <p className="text-sm font-medium">7:14 AM</p>
                            <p className="text-xs text-gray-500">Punch In</p>
                        </div>
                </div>
                <div className="flex items-center gap-2">
                    <img src="/public/red.png" alt="Punch Out Icon" className="w-6 h-6" />
                        <div>
                            <p className="text-sm font-medium">05:00 PM</p>
                            <p className="text-xs text-gray-500">Punch Out</p>
                        </div>
                </div>
            </div>
            </div>  
        </div>

    </>
  )
}

export default Common
