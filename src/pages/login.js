import Link from 'next/link';
import React, { useState } from 'react';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PagesOutlinedIcon from '@mui/icons-material/PagesOutlined';

const LoginPage = () => {
    const [page,setPage]=useState("login")

    const [loginData, setLoginData] = useState({
      username: '',
      password: ''
    });
    const [signupData, setSignupData] = useState({
      email: '',
      firstName: '',
      lastName: '',
      organization: '',
      password: ''
    });
  
    const handleLoginChange = (event) => {
      const { name, value } = event.target;
      setLoginData({
        ...loginData,
        [name]: value
      });
    };
  
    const handleSignupChange = (event) => {
      const { name, value } = event.target;
      setSignupData({
        ...signupData,
        [name]: value
      });
    };
  return (
    <div className="vw-100 vh-100 p-0">
      <div className="row h-100">
      <div className="col-md-6 bg-primary p-0" style={{ width: '30%', position: 'relative' }}>
  <div className="h-100 position-relative">
    <img src="/login-bg-fe1235a9.jpg" style={{ objectFit: 'cover' }} alt="Image" className="img-fluid h-100" />
    <div className="position-absolute top-50 start-50 translate-middle h-100 w-100 p-5 d-flex flex-column justify-content-between">
      {/* Add your logos and content here */}
      <img src="/diobox-logo-af3f776a.svg" alt="Logo" className="img-fluid" style={{width:'10rem'}} />
        <div>
            <div className='text-light'>The most advanced platform for managing events and guests.</div>
            <div>
              <GroupOutlinedIcon/>
              <AssignmentTurnedInOutlinedIcon/>
              <LanguageOutlinedIcon/>
              <MobileFriendlyOutlinedIcon/>
              <EmailOutlinedIcon/>
              <PagesOutlinedIcon/>
            </div>
        </div>
        <div></div>
    </div>
    </div>
    </div>
        <div className="col-md-6 d-flex flex-column vh-100 justify-content-between align-items-center" style={{ width: '70%', position: 'relative' }}>

          {page==="login"?
          <>
                   <div className="w-100 d-flex justify-content-end p-4">
            <div className='d-flex judtify-content-center text-center align-items-center' style={{gap:"1rem"}}>
                <p className="mt-3 text-center">
                    Don't have an account?
                </p>
                <a>
                    <button onClick={()=>setPage("signup")} className="btn btn-light btn-outline-secondary btn-sm ml-5 ml-md-3">Get Started</button>
                </a>
            </div>
        </div>

          <div className="login-box p-4 w-50 d-flex flex-column">
            <h2 className='mb-5'>Sign In</h2>
            <form style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between', gap: "1.8rem" }}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Username" name="username" value={loginData.username} onChange={handleLoginChange} />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" name="password" value={loginData.password} onChange={handleLoginChange} />
              </div>
              <Link href='/events'>
              <button type="submit" className={`btn btn-primary btn-lg mt-3 mb-0 ${loginData.username && loginData.password ? "" : "disabled"}`}>Login</button>
              </Link>
              <p className='text-center'>Forgot Password?</p>
            </form>
          
          </div> </>:
          <>
          <div className="w-100 d-flex justify-content-end p-4">
            <div className='d-flex judtify-content-center text-center align-items-center' style={{gap:"1rem"}}>
                <p className="mt-3 text-center">
                    Already have an account?
                </p>
                <a>
                    <button onClick={()=>setPage("login")} className="btn btn-light btn-outline-secondary btn-sm ml-5 ml-md-3">Sign In</button>
                </a>
            </div>
        </div>
          <div className="login-box p-4 w-50 d-flex flex-column">
            <h2 className='mb-5'>Welcome</h2>
            <form style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between', gap: "1.8rem" }}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Work Email Address" name="email" value={signupData.email} onChange={handleSignupChange} />
              </div>
              <div className="form-group d-flex">
                <input type="text" className="form-control" placeholder="First name" name="firstName" value={signupData.firstName} onChange={handleSignupChange} />
                <input type="text" className="form-control" placeholder="Last name" name="lastName" value={signupData.lastName} onChange={handleSignupChange} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Organization" name="organization" value={signupData.organization} onChange={handleSignupChange} />
                <p>Appears in menus and event headings</p>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" name="password" value={signupData.password} onChange={handleSignupChange} />
                <p>Must contain at least 6 characters</p>
              </div>
              <button type="submit" className={`btn btn-primary btn-lg mt-3 mb-0 ${Object.values(signupData).every(value => value) ? "" : "disabled"}`}>Sign Up Free</button>
              <p className='text-center'>By clicking this button, you agree to the <br/>
              Diobox <a href='#'>Terms of Use</a> and <a href='#'>Privacy Policy</a></p>
            </form>
          
          </div>
          </>
          }
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
