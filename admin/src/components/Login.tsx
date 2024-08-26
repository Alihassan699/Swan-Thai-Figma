import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
  return (
    <>
         <div className='container w-full h-full'>
      <div className='row border-none'>
        {/* Small screens (sm) - full width */}
        <div className="col-sm-6 d-block d-md-none">
          <div className="login-left d-flex justify-content-center align-items-center p-0 flex-column bg-white">
            <img src="/public/Logo.png" alt="logo" className="d-block w-[150px] h-[150px] object-contain" />
            <h2 className="sans text-center text-[#0C1421] text-[20px] fw-bold">
              Welcome Back <span role="img" aria-label="wave">👋</span>
            </h2>
            <p className="lato text-[#313957] fw-[600] font-[16px] m-2">
              Today is a new day. It's your day. You shape it.
            </p>
            <form className="form w-full max-w-[320px] mb-0">
              <label className="form-label text-[#0C1421] text-sm fw-bold">Email address</label>
              <input type="email" className="form-control w-full p-2 border-[#ccc] border-[2px]" id="exampleInputEmail1" placeholder="example@gmail.com" aria-describedby="emailHelp" />
              <label className="form-label mt-2 text-[#0C1421] text-sm fw-bold">Password</label>
              <input type="password" className="form-control w-full p-2 border-[#ccc] border-[2px]" id="exampleInputPassword1" placeholder="at least 8 characters" />
              <p className="forgot-password d-block text-right text-[#1E4AE9] text-sm mt-2 fw-bold m-4">Forgot Password?</p>
              <button type="submit" className="btn-signin w-full p-2.5 rounded-[12px] bg-[#009B77] text-base">Submit</button>
            </form>
            <div className="m-2 mt-4">or</div>
            <button className="btn-google btn d-block w-[90%] p-2.5 bg-[#F3F9FA] text-[#444] rounded-[8px] d-flex items-center justify-center gap-3">
              <img className="w-[20px] h-[20px] object-contain" src="/public/google.png" alt="" />Sign in with Google
            </button>
            <p className="signup-text sans mt-4 text-sm text-[#666]">
              Don't have an account? <a className="text-[#007bff] text-decoration-underline" href="/signup">Sign up</a>
            </p>
            <footer className="text-base text-[#888] align-middle text-center d-flex mt-5">
              <p className="lato">© 2022. All rights reserved.</p>
            </footer>
          </div>
        </div>

        {/* Small screens (sm) - 7/12 width 
        <div className="col-sm-6 d-block d-md-none">
          <div className="login-right flex-1 d-flex w-[22rem] h-[41rem]">
            <img
              src="/public/image 1.png"
              alt="Family"
              className="img-fluid d-block object-cover"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      */}

        {/* Medium screens (md) - half width each */}
        <div className="col-md-6 d-none d-md-block d-lg-none">
          <div className="login-left d-flex justify-content-center align-items-center p-0 flex-column bg-white">
            <img src="/public/Logo.png" alt="logo" className='d-block w-[150px] h-[150px] object-contain' />
            <h2 className="sans text-center text-[#0C1421] text-[30px] fw-bold">Welcome Back <span role="img" aria-label="wave">👋</span></h2>
            <p className='lato text-[#313957] fw-[600] font-[20px] m-2'>Today is a new day. It's your day. You shape it.</p>
            <form className='form w-full max-w-[320px] mb-0'>
              <label className="form-label text-[#0C1421] text-base fw-bold">Email address</label>
              <input type="email" className="form-control w-full p-2 border-[#ccc] border-[2px]" id="exampleInputEmail1" placeholder='example@gmail.com' aria-describedby="emailHelp" />
              <label className="form-label mt-2 text-[#0C1421] text-base fw-bold">Password</label>
              <input type="password" className="form-control w-full p-2 border-[#ccc] border-[2px]" id="exampleInputPassword1" placeholder='at least 8 characters' />
              <p className='forgot-password d-block text-right text-[#1E4AE9] text-base mt-2 fw-bold m-2'>Forgot Password?</p>
              <button type="submit" className="btn-signin w-full p-2.5 rounded-[12px] bg-[#009B77] text-base">Submit</button>
            </form>
            <div className='m-2 mt-2'>or</div>
            <button className='btn-google btn d-block w-[100%] p-2.5 bg-[#F3F9FA] text-[#444] rounded-[8px] d-flex items-center justify-center gap-3'>
              <img className='w-[20px] h-[20px] object-contain' src='/public/google.png' alt='' />Sign in with Google
            </button>
            <p className='signup-text sans mt-4 text-lg text-[#666]'>Don't have an account? <a className='text-[#007bff] text-decoration-underline' href='/signup'>Sign up</a></p>
            <footer className='text-lg text-[#888] align-middle text-center d-flex mt-4'>
              <p className='lato'>© 2022. All rights reserved.</p>
            </footer>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block d-lg-none">
          <div className="login-right flex-1  d-flex  w-[25.7rem] h-[43.28rem]">
            <img
              src="/public/image 1.png"
              alt="Family"
              className="img-fluid d-block object-cover"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
        {/* Large screens (lg) - 6/6 grid */}
        <div className="col-lg-6 d-none d-lg-block d-xl-none">
          <div className="login-left d-flex justify-content-center align-items-center p-0 flex-column bg-white">
            <img src="/public/Logo.png" alt="logo" className='d-block w-[150px] h-[150px] object-contain' />
            <h2 className="sans text-center text-[#0C1421] text-[20px] fw-bold">Welcome Back <span role="img" aria-label="wave">👋</span></h2>
            <p className='lato text-[#313957] fw-[600] font-[20px] m-2'>Today is a new day. It's your day. You shape it.</p>
            <form className='form w-full max-w-[320px] mb-0'>
              <label className="form-label text-[#0C1421] text-base fw-bold">Email address</label>
              <input type="email" className="form-control w-full  border-[#ccc] border-[2px]" id="exampleInputEmail1" placeholder='example@gmail.com' aria-describedby="emailHelp" />
              <label className="form-label mt-1 text-[#0C1421] text-base fw-bold">Password</label>
              <input type="password" className="form-control w-full  border-[#ccc] border-[2px]" id="exampleInputPassword1" placeholder='at least 8 characters' />
              <p className='forgot-password d-block text-right text-[#1E4AE9] text-base mt-1 fw-bold m-2'>Forgot Password?</p>
              <button type="submit" className="btn-signin w-full p-2.5 rounded-[12px] bg-[#009B77] text-base">Submit</button>
            </form>
            <div className=' mt-2'>or</div>
            <button className='btn-google btn d-block w-[66%] p-2.5 bg-[#F3F9FA] text-[#444] rounded-[8px] d-flex items-center justify-center gap-3'>
              <img className='w-[20px] h-[20px] object-contain' src='/public/google.png' alt='' />Sign in with Google
            </button>
            <p className='signup-text sans mt-2 text-lg text-[#666]'>Don't have an account? <a className='text-[#007bff] text-decoration-underline' href='/signup'>Sign up</a></p>
            <footer className='text-lg text-[#888] align-middle text-center d-flex mt-6'>
              <p className='lato'>© 2022. All rights reserved.</p>
            </footer>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block d-xl-none">
          <div className="login-right flex-1  d-flex w-[32.45rem] h-[38.4rem]">
            <img
              src="/public/image 1.png"
              alt="Family"
              className="img-fluid d-block object-cover"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Extra large screens (xl) - same as lg */}
        <div className="col-xl-6 d-none d-xl-block d-xxl-none">
          <div className="login-left d-flex justify-content-center align-items-center p-0 flex-column bg-white">
            <img src="/public/Logo.png" alt="logo" className='d-block w-[150px] h-[150px] object-contain' />
            <h2 className="sans text-center text-[#0C1421] text-[26px] fw-bold">Welcome Back <span role="img" aria-label="wave">👋</span></h2>
            <p className='lato text-[#313957] fw-[600] font-[15px] '>Today is a new day. It's your day. You shape it.</p>
            <form className='form w-full max-w-[320px] '>
              <label className="form-label text-[#0C1421] text-base fw-bold">Email address</label>
              <input type="email" className="form-control w-full  border-[#ccc] border-[2px]" id="exampleInputEmail1" placeholder='example@gmail.com' aria-describedby="emailHelp" />
              <label className="form-label mt-2 text-[#0C1421] text-base fw-bold">Password</label>
              <input type="password" className="form-control w-full  border-[#ccc] border-[2px]" id="exampleInputPassword1" placeholder='at least 8 characters' />
              <p className='forgot-password d-block text-right text-[#1E4AE9] text-base mt-1 fw-bold m-2'>Forgot Password?</p>
              <button type="submit" className="btn-signin w-full p-2.5 rounded-[12px] bg-[#009B77] text-base">Submit</button>
            </form>
            <div className='m-2'>or</div>
            <button className='btn-google btn d-block w-[52%] p-2.5 bg-[#F3F9FA] text-[#444] rounded-[8px] d-flex items-center justify-center gap-3'>
              <img className='w-[20px] h-[20px] object-contain' src='/public/google.png' alt='' />Sign in with Google
            </button>
            <p className='signup-text sans mt-3 text-lg text-[#666]'>Don't have an account? <a className='text-[#007bff] text-decoration-underline' href='/signup'>Sign up</a></p>
            <footer className='text-lg text-[#888] align-middle text-center d-flex mt-6'>
              <p className='lato'>© 2022. All rights reserved.</p>
            </footer>
          </div>
        </div>
        <div className="col-xl-6 d-none d-xl-block d-xxl-none">
          <div className="login-right flex-1  d-flex w-[40.75rem] h-[39.4rem]">
            <img
              src="/public/image 1.png"
              alt="Family"
              className="img-fluid d-block object-cover"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Extra-extra large screens (xxl) - similar layout */}
        <div className="col-xxl-6 d-none d-xxl-block">
          <div className="login-left d-flex justify-content-center align-items-center p-0 flex-column bg-white">
            <img src="/public/Logo.png" alt="logo" className='d-block w-[150px] h-[150px] object-contain' />
            <h2 className="sans text-center text-[#0C1421] text-[36px] fw-bold">Welcome Back <span role="img" aria-label="wave">👋</span></h2>
            <p className='lato text-[#313957] fw-[600] font-[20px] m-2'>Today is a new day. It's your day. You shape it.</p>
            <form className='form w-full max-w-[320px] mb-0'>
              <label className="form-label text-[#0C1421] text-base fw-bold">Email address</label>
              <input type="email" className="form-control w-full p-2 border-[#ccc] border-[2px]" id="exampleInputEmail1" placeholder='example@gmail.com' aria-describedby="emailHelp" />
              <label className="form-label mt-2 text-[#0C1421] text-base fw-bold">Password</label>
              <input type="password" className="form-control w-full p-2 border-[#ccc] border-[2px]" id="exampleInputPassword1" placeholder='at least 8 characters' />
              <p className='forgot-password d-block text-right text-[#1E4AE9] text-base mt-2 fw-bold m-2'>Forgot Password?</p>
              <button type="submit" className="btn-signin w-full p-3 rounded-[12px] bg-[#009B77] text-base">Submit</button>
            </form>
            <div className='m-2 mt-2'>or</div>
            <button className='btn-google btn d-block w-[50%] p-3 bg-[#F3F9FA] text-[#444] rounded-[8px] d-flex items-center justify-center gap-3'>
              <img className='w-[20px] h-[20px] object-contain' src='/public/google.png' alt='' />Sign in with Google
            </button>
            <p className='signup-text sans mt-1 text-lg text-[#666]'>Don't have an account? <a className='text-[#007bff] text-decoration-underline' href='/signup'>Sign up</a></p>
            <footer className='text-lg text-[#888] align-middle text-center d-flex mt-12'>
              <p className='lato'>© 2022. All rights reserved.</p>
            </footer>
          </div>
        </div>
        <div className="col-xxl-6 d-none d-xxl-block">
          <div className="login-right flex-1  d-flex w-[46.75rem] h-[45.4rem]">
            <img
              src="/public/image 1.png"
              alt="Family"
              className="img-fluid d-block object-cover"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login