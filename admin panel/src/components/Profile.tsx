import React from 'react'
import Common from './Common'

function Profile() {
  return (
    <>
        <Common />
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-1'>
                    <img src='/public/pic.png' alt='Profile Picture' className='rounded-full w-16 h-16' />
                </div>
                <div className='col-2'>
                    <div className='row'>
                        <h1 className='text-[#000] sans text-xl font-medium'>Alexa Rawles</h1>
                    </div>
                    <div className='row'>
                        <p className='text-[#000] sans text-sm'>alexarawles@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='row gap-2  mt-5 justify-content-center'>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>First Name*</label>
                    <input type="text" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='Your First Name' />
                </div>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>Middle Name</label>
                    <input type="text" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='Your middle Name' />
                </div>
            </div>
            <div className='row gap-2  mt-2 justify-content-center'>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>Last Name*</label>
                    <input type="text" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='Your Last Name' />
                </div>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>Nick Name*</label>
                    <input type="text" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='Your Nick Name' />
                </div>
            </div>
            <div className='row gap-2 mt-2 justify-content-center'>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>Gender*</label>
                    <input type="text" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='Your Gender' />
                </div>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>Language*</label>
                    <select className="form-select text-[#000] text-sm mt-1 bg-[#f9f9f9]" id="floatingSelect" aria-label="Floating label select example">
                        <option selected className='text-sm text-[#000]'>Choose Language</option>
                        <option className='text-sm text-[#000]' value="1">English</option>
                        <option className='text-sm text-[#000]' value="2">Arabic</option>
                        <option className='text-sm text-[#000]' value="3">France</option>
                    </select>
                </div>
            </div>
            <div className='row gap-2  mt-2 justify-content-center'>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>Mobile Number*</label>
                    <input type="number" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='(###) ###-####' />
                </div>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>Date of Birth*</label>
                    <input type="date" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date"  />
                </div>
            </div>
            <div className='row gap-2  mt-2  justify-content-center'>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>Social Security Number*</label>
                    <input type="number" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='(###-##-####)' />
                </div>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>Email Address</label>
                    <input type="email" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='Your Email Address'/>
                </div>
            </div>
            <div className='row gap-2  mt-3 justify-content-start ml-16'>
                <div className='col-5'>
                    <h1 className='pop text-xl text-[#000] text-'>Onboarding Papers</h1>
                </div>
            </div>
            <div className='row gap-2 mt-2 justify-content-center'>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>Employee Handbook*</label>
                    <div className="relative">
                        <input type="file" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                        <span className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M21.25 11.2529C23.9688 11.2679 25.4413 11.3892 26.4013 12.3492C27.5 13.4479 27.5 15.2154 27.5 18.7504V20.0004C27.5 23.5367 27.5 25.3042 26.4013 26.4029C25.3038 27.5004 23.535 27.5004 20 27.5004H10C6.465 27.5004 4.69625 27.5004 3.59875 26.4029C2.5 25.3029 2.5 23.5367 2.5 20.0004V18.7504C2.5 15.2154 2.5 13.4479 3.59875 12.3492C4.55875 11.3892 6.03125 11.2679 8.75 11.2529" stroke="#545454" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M15 18.75V2.5M15 2.5L18.75 6.875M15 2.5L11.25 6.875" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
                
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>Arbitrate*</label>
                    <div className="relative">
                        <input type="file" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                        <span className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M21.25 11.2529C23.9688 11.2679 25.4413 11.3892 26.4013 12.3492C27.5 13.4479 27.5 15.2154 27.5 18.7504V20.0004C27.5 23.5367 27.5 25.3042 26.4013 26.4029C25.3038 27.5004 23.535 27.5004 20 27.5004H10C6.465 27.5004 4.69625 27.5004 3.59875 26.4029C2.5 25.3029 2.5 23.5367 2.5 20.0004V18.7504C2.5 15.2154 2.5 13.4479 3.59875 12.3492C4.55875 11.3892 6.03125 11.2679 8.75 11.2529" stroke="#545454" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M15 18.75V2.5M15 2.5L18.75 6.875M15 2.5L11.25 6.875" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className='row gap-2 mt-2 justify-content-center'>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>Meal Break Waiver*</label>
                    <div className="relative">
                        <input type="file" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                        <span className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M21.25 11.2529C23.9688 11.2679 25.4413 11.3892 26.4013 12.3492C27.5 13.4479 27.5 15.2154 27.5 18.7504V20.0004C27.5 23.5367 27.5 25.3042 26.4013 26.4029C25.3038 27.5004 23.535 27.5004 20 27.5004H10C6.465 27.5004 4.69625 27.5004 3.59875 26.4029C2.5 25.3029 2.5 23.5367 2.5 20.0004V18.7504C2.5 15.2154 2.5 13.4479 3.59875 12.3492C4.55875 11.3892 6.03125 11.2679 8.75 11.2529" stroke="#545454" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M15 18.75V2.5M15 2.5L18.75 6.875M15 2.5L11.25 6.875" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>eSign*</label>
                    <div className="relative">
                        <input type="file" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                        <span className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M21.25 11.2529C23.9688 11.2679 25.4413 11.3892 26.4013 12.3492C27.5 13.4479 27.5 15.2154 27.5 18.7504V20.0004C27.5 23.5367 27.5 25.3042 26.4013 26.4029C25.3038 27.5004 23.535 27.5004 20 27.5004H10C6.465 27.5004 4.69625 27.5004 3.59875 26.4029C2.5 25.3029 2.5 23.5367 2.5 20.0004V18.7504C2.5 15.2154 2.5 13.4479 3.59875 12.3492C4.55875 11.3892 6.03125 11.2679 8.75 11.2529" stroke="#545454" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M15 18.75V2.5M15 2.5L18.75 6.875M15 2.5L11.25 6.875" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className='row gap-2 mt-2 justify-content-center'>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>Pay Sign*</label>
                    <div className="relative">
                        <input type="file" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                        <span className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M21.25 11.2529C23.9688 11.2679 25.4413 11.3892 26.4013 12.3492C27.5 13.4479 27.5 15.2154 27.5 18.7504V20.0004C27.5 23.5367 27.5 25.3042 26.4013 26.4029C25.3038 27.5004 23.535 27.5004 20 27.5004H10C6.465 27.5004 4.69625 27.5004 3.59875 26.4029C2.5 25.3029 2.5 23.5367 2.5 20.0004V18.7504C2.5 15.2154 2.5 13.4479 3.59875 12.3492C4.55875 11.3892 6.03125 11.2679 8.75 11.2529" stroke="#545454" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M15 18.75V2.5M15 2.5L18.75 6.875M15 2.5L11.25 6.875" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>Review Log*</label>
                    <div className="relative">
                        <input type="file" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                        <span className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M21.25 11.2529C23.9688 11.2679 25.4413 11.3892 26.4013 12.3492C27.5 13.4479 27.5 15.2154 27.5 18.7504V20.0004C27.5 23.5367 27.5 25.3042 26.4013 26.4029C25.3038 27.5004 23.535 27.5004 20 27.5004H10C6.465 27.5004 4.69625 27.5004 3.59875 26.4029C2.5 25.3029 2.5 23.5367 2.5 20.0004V18.7504C2.5 15.2154 2.5 13.4479 3.59875 12.3492C4.55875 11.3892 6.03125 11.2679 8.75 11.2529" stroke="#545454" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M15 18.75V2.5M15 2.5L18.75 6.875M15 2.5L11.25 6.875" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className='row gap-2 mt-2 justify-content-center'>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>CalSavers*</label>
                    <div className="relative">
                        <input type="file" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                        <span className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M21.25 11.2529C23.9688 11.2679 25.4413 11.3892 26.4013 12.3492C27.5 13.4479 27.5 15.2154 27.5 18.7504V20.0004C27.5 23.5367 27.5 25.3042 26.4013 26.4029C25.3038 27.5004 23.535 27.5004 20 27.5004H10C6.465 27.5004 4.69625 27.5004 3.59875 26.4029C2.5 25.3029 2.5 23.5367 2.5 20.0004V18.7504C2.5 15.2154 2.5 13.4479 3.59875 12.3492C4.55875 11.3892 6.03125 11.2679 8.75 11.2529" stroke="#545454" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M15 18.75V2.5M15 2.5L18.75 6.875M15 2.5L11.25 6.875" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>Direct Deposit</label>
                    <div className="relative">
                        <input type="file" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                        <span className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M21.25 11.2529C23.9688 11.2679 25.4413 11.3892 26.4013 12.3492C27.5 13.4479 27.5 15.2154 27.5 18.7504V20.0004C27.5 23.5367 27.5 25.3042 26.4013 26.4029C25.3038 27.5004 23.535 27.5004 20 27.5004H10C6.465 27.5004 4.69625 27.5004 3.59875 26.4029C2.5 25.3029 2.5 23.5367 2.5 20.0004V18.7504C2.5 15.2154 2.5 13.4479 3.59875 12.3492C4.55875 11.3892 6.03125 11.2679 8.75 11.2529" stroke="#545454" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M15 18.75V2.5M15 2.5L18.75 6.875M15 2.5L11.25 6.875" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className='row gap-2 mt-2 justify-content-center'>
                <div className='col-5'>
                    <label className='pop text-[#000] text-base'>Identification*</label>
                    <div className="relative">
                        <input type="file" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                        <span className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M21.25 11.2529C23.9688 11.2679 25.4413 11.3892 26.4013 12.3492C27.5 13.4479 27.5 15.2154 27.5 18.7504V20.0004C27.5 23.5367 27.5 25.3042 26.4013 26.4029C25.3038 27.5004 23.535 27.5004 20 27.5004H10C6.465 27.5004 4.69625 27.5004 3.59875 26.4029C2.5 25.3029 2.5 23.5367 2.5 20.0004V18.7504C2.5 15.2154 2.5 13.4479 3.59875 12.3492C4.55875 11.3892 6.03125 11.2679 8.75 11.2529" stroke="#545454" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M15 18.75V2.5M15 2.5L18.75 6.875M15 2.5L11.25 6.875" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='col-5'>
                    
                </div>
            </div>
            
            <div className='row gap-2  mt-3 justify-content-start ml-16'>
                <div className='col-5'>
                    <h1 className='pop text-xl text-[#000] text-'>Certificates</h1>
                </div>
            </div>
            <div className='row gap-2 mt-2 justify-content-center'>
                <div className='col-7'>
                    <label className='pop text-[#000] text-base'>Food Handlers*</label>
                    <div className="relative">
                        <input type="file" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                        <span className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M21.25 11.2529C23.9688 11.2679 25.4413 11.3892 26.4013 12.3492C27.5 13.4479 27.5 15.2154 27.5 18.7504V20.0004C27.5 23.5367 27.5 25.3042 26.4013 26.4029C25.3038 27.5004 23.535 27.5004 20 27.5004H10C6.465 27.5004 4.69625 27.5004 3.59875 26.4029C2.5 25.3029 2.5 23.5367 2.5 20.0004V18.7504C2.5 15.2154 2.5 13.4479 3.59875 12.3492C4.55875 11.3892 6.03125 11.2679 8.75 11.2529" stroke="#545454" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M15 18.75V2.5M15 2.5L18.75 6.875M15 2.5L11.25 6.875" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='col-3'>
                    <label className='pop text-[#000] text-base'>Expiration Date</label>
                    <div className="relative">
                        <input type="date" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                    </div>
                </div>
            </div>
            <div className='row gap-2 mt-2 justify-content-center'>
                <div className='col-7'>
                    <label className='pop text-[#000] text-base'>Food Allergen*</label>
                    <div className="relative">
                        <input type="file" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                        <span className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M21.25 11.2529C23.9688 11.2679 25.4413 11.3892 26.4013 12.3492C27.5 13.4479 27.5 15.2154 27.5 18.7504V20.0004C27.5 23.5367 27.5 25.3042 26.4013 26.4029C25.3038 27.5004 23.535 27.5004 20 27.5004H10C6.465 27.5004 4.69625 27.5004 3.59875 26.4029C2.5 25.3029 2.5 23.5367 2.5 20.0004V18.7504C2.5 15.2154 2.5 13.4479 3.59875 12.3492C4.55875 11.3892 6.03125 11.2679 8.75 11.2529" stroke="#545454" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M15 18.75V2.5M15 2.5L18.75 6.875M15 2.5L11.25 6.875" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='col-3'>
                    <label className='pop text-[#000] text-base'>Expiration Date</label>
                    <div className="relative">
                        <input type="date" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                    </div>
                </div>
            </div>
            <div className='row gap-2 mt-2 justify-content-center'>
                <div className='col-7'>
                    <label className='pop text-[#000] text-base'>Harassment Prevention*</label>
                    <div className="relative">
                        <input type="file" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                        <span className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M21.25 11.2529C23.9688 11.2679 25.4413 11.3892 26.4013 12.3492C27.5 13.4479 27.5 15.2154 27.5 18.7504V20.0004C27.5 23.5367 27.5 25.3042 26.4013 26.4029C25.3038 27.5004 23.535 27.5004 20 27.5004H10C6.465 27.5004 4.69625 27.5004 3.59875 26.4029C2.5 25.3029 2.5 23.5367 2.5 20.0004V18.7504C2.5 15.2154 2.5 13.4479 3.59875 12.3492C4.55875 11.3892 6.03125 11.2679 8.75 11.2529" stroke="#545454" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M15 18.75V2.5M15 2.5L18.75 6.875M15 2.5L11.25 6.875" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='col-3'>
                    <label className='pop text-[#000] text-base'>Expiration Date</label>
                    <div className="relative">
                        <input type="date" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                    </div>
                </div>
            </div>
            <div className='row gap-2 mt-2 justify-content-center'>
                <div className='col-7'>
                    <label className='pop text-[#000] text-base'>Work Violence Prevention*</label>
                    <div className="relative">
                        <input type="file" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                        <span className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M21.25 11.2529C23.9688 11.2679 25.4413 11.3892 26.4013 12.3492C27.5 13.4479 27.5 15.2154 27.5 18.7504V20.0004C27.5 23.5367 27.5 25.3042 26.4013 26.4029C25.3038 27.5004 23.535 27.5004 20 27.5004H10C6.465 27.5004 4.69625 27.5004 3.59875 26.4029C2.5 25.3029 2.5 23.5367 2.5 20.0004V18.7504C2.5 15.2154 2.5 13.4479 3.59875 12.3492C4.55875 11.3892 6.03125 11.2679 8.75 11.2529" stroke="#545454" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M15 18.75V2.5M15 2.5L18.75 6.875M15 2.5L11.25 6.875" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='col-3'>
                    <label className='pop text-[#000] text-base'>RBS Training</label>
                    <div className="relative">
                        <input type="date" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                    </div>
                </div>
            </div>
            <div className='row gap-2 mt-2 justify-content-center'>
                <div className='col-7'>
                    <label className='pop text-[#000] text-base'>OpenTable</label>
                    <div className="relative">
                        <input type="file" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                        <span className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M21.25 11.2529C23.9688 11.2679 25.4413 11.3892 26.4013 12.3492C27.5 13.4479 27.5 15.2154 27.5 18.7504V20.0004C27.5 23.5367 27.5 25.3042 26.4013 26.4029C25.3038 27.5004 23.535 27.5004 20 27.5004H10C6.465 27.5004 4.69625 27.5004 3.59875 26.4029C2.5 25.3029 2.5 23.5367 2.5 20.0004V18.7504C2.5 15.2154 2.5 13.4479 3.59875 12.3492C4.55875 11.3892 6.03125 11.2679 8.75 11.2529" stroke="#545454" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M15 18.75V2.5M15 2.5L18.75 6.875M15 2.5L11.25 6.875" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='col-3'>
                    <label className='pop text-[#000] text-base'>Expiration Date</label>
                    <div className="relative">
                        <input type="date" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                    </div>
                </div>
            </div>
            <div className='row gap-2 mt-2 justify-content-center'>
                <div className='col-7'>
                    <label className='pop text-[#000] text-base'>Food Handlers*</label>
                    <div className="relative">
                        <input type="file" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                        <span className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M21.25 11.2529C23.9688 11.2679 25.4413 11.3892 26.4013 12.3492C27.5 13.4479 27.5 15.2154 27.5 18.7504V20.0004C27.5 23.5367 27.5 25.3042 26.4013 26.4029C25.3038 27.5004 23.535 27.5004 20 27.5004H10C6.465 27.5004 4.69625 27.5004 3.59875 26.4029C2.5 25.3029 2.5 23.5367 2.5 20.0004V18.7504C2.5 15.2154 2.5 13.4479 3.59875 12.3492C4.55875 11.3892 6.03125 11.2679 8.75 11.2529" stroke="#545454" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M15 18.75V2.5M15 2.5L18.75 6.875M15 2.5L11.25 6.875" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='col-3'>
                    <label className='pop text-[#000] text-base'>Expiration Date</label>
                    <div className="relative">
                        <input type="date" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000] placeholder-[#999]" aria-describedby="file" placeholder='Choose File'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile