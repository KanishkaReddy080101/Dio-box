import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
// import diobox_logo from '@/assets/diobox-logo-af3f776a.svg'

const SideBar = () => {
  const [wearenocturnal_dropdown_item, setWeareNocturnal_dropdown_item] =
    useState(null);
  const [event, setEvent] = useState(null);
  const [account, setAccount] = useState(null);
  const wearenocturnal = (
    <div className="bg-white mx-1 rounded-3">
          <div className="p-3">
            <div className="p-3">
              <div className="d-flex justify-content-center" >
              <Image src="/Color_DP.png" alt="logo" width={40} height={40} />
                {/* <img src="/diobox-logo-af3f776a.svg" alt="Logo" className="img-fluid" style={{width:'10rem'}} /> */}
              </div>
              <h3 className="text-center">WeAreNocturnal</h3>
              <div className="d-flex justify-content-center mb-4">
                <button className="btn btn-outline-primary py-0" type = "button">Corporate Plan</button>
              </div>
              <div className="d-flex flex-column text-black">
                <Link href = "/" className="mb-4 text-decoration-none text-black">
                  {/* Icon */}
                  Events
                </Link>
                <Link href = "/account" className="text-decoration-none text-black">
                  {/* Icon */}
                  Account
                </Link>
              </div>
            </div>
            <div className="border-top p-3">
            <div className="d-flex justify-content-center" >
            <Image src="/Color_DP.png" alt="logo" width={30} height={30} />
              </div>
              <h3 className="text-center">WeAreNocturnal</h3>
              <p className="text-center mb-4">events@wearenocturnal.com</p>
              <div className="d-flex flex-column">
                <Link href = "/" className="mb-4 text-decoration-none text-black">
                  {/* Icon */}
                  Switch Account
                </Link>
                <Link href = "/" className="mb-4 text-decoration-none text-black">
                  {/* Icon */}
                  What's New
                </Link>
                <Link href = "/" className="mb-4 text-decoration-none text-black">
                  {/* Icon */}
                  Help Center
                </Link>
                <Link href = "/" className="mb-4 text-decoration-none text-black">
                  {/* Icon */}
                  Message Us
                </Link>
                <Link href = "/" className="text-decoration-none text-black">
                  {/* Icon */}
                  Sign Out
                </Link>
              </div>
            </div>

          </div>
        </div>
  );
  const wearenocturnal_dropdown = () => {
    if (wearenocturnal_dropdown_item === null) {
      setWeareNocturnal_dropdown_item(wearenocturnal);
      setAccount (null);
      setEvent (null);
    } else {
      setWeareNocturnal_dropdown_item(null);
    }
  };

  
  const events_content = (
    <div className="d-flex flex-column mb-3">
      <Link href="/" className="text-white text-decoration-none mx-5 my-2">
        Upcoming Events
      </Link>
      <Link href="/" className="text-white text-decoration-none mx-5 my-2">
        Past Events
      </Link>
    </div>
  );
  const events = () => {
    if (event === null) {
      setEvent(events_content);
      setAccount (null);
      setWeareNocturnal_dropdown_item (null);
    } else {
      setEvent(null);
    }
  };

  
  const accounts_content = (
    <div className="d-flex flex-column mt-3">
      <Link
        href="/billing"
        className="text-white text-decoration-none mx-5 my-2"
      >
        Plan & Billing
      </Link>
      <Link
        href="/teamMembers"
        className="text-white text-decoration-none mx-5 my-2"
      >
        Team Members
      </Link>
    </div>
  );
  const accounts = () => {
    if (account === null) {
      setAccount(accounts_content);
      setWeareNocturnal_dropdown_item (null);
      setEvent (null);
    } else {
      setAccount(null);
    }
  };

  return (
    // <Nav defaultActiveKey="/home" className="flex-column w-25" style={{backgroundColor: '#1C1C1C', height: '100vh'}}>
    //     <NavDropdown className='text-white' title="We are Nocturnal" id="basic-nav-dropdown">
    //     <NavDropdown.Item href="#">Dropdown Item 1.1</NavDropdown.Item>
    //     <NavDropdown.Item href="#">Dropdown Item 1.2</NavDropdown.Item>
    //   </NavDropdown>
    //   <Nav.Link className='text-white' href="/events">Events</Nav.Link>
    //   <Nav.Link className='text-white' href="/upcomingEvents">Upcoming Events</Nav.Link>
    //   <Nav.Link className='text-white' href="/pastEvents">Past Events</Nav.Link>
    //   <Nav.Link className='text-white' href="/account">Account</Nav.Link>
    // </Nav>

    //     <div class="dropdown-menu">
    //   <form class="px-4 py-3">
    //     <div class="form-group">
    //       <label for="exampleDropdownFormEmail1">Email address</label>
    //       <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
    //     </div>
    //     <div class="form-group">
    //       <label for="exampleDropdownFormPassword1">Password</label>
    //       <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
    //     </div>
    //     <div class="form-check">
    //       <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
    //       <label class="form-check-label" for="dropdownCheck">
    //         Remember me
    //       </label>
    //     </div>
    //     <button type="submit" class="btn btn-primary">Sign in</button>
    //   </form>
    //   <div class="dropdown-divider"></div>
    //   <a class="dropdown-item" href="#">New around here? Sign up</a>
    //   <a class="dropdown-item" href="#">Forgot password?</a>
    // </div>

    <>
      <Nav
        defaultActiveKey="/home"
        className="flex-column w-25"
        style={{ backgroundColor: "#1C1C1C", height: "100vh" }}
      >
        <div className="text-white d-flex p-4" onClick={wearenocturnal_dropdown} style = {{width: "317px"}}>
        <Image src="/Color_DP.png" alt="logo" width={40} height={40} />
          <p className="mx-2">
            WeAreNocturnal <br />
            WeAreNocturnal Events
          </p>
        </div>

        

        <div>{wearenocturnal_dropdown_item}</div>
        <div onClick={events} className="text-white mx-5 my-3 d-flex align-middle">
          {/* <Image src = {events_logo} alt = "" className="text-white me-2" style = {{width: "20px", height:'auto'}}></Image> */}
          <CalendarMonthIcon className="me-2"/>
          <p>Events</p>
        </div>
        <div>{event}</div>
        <div onClick={accounts} className="text-white mx-5 d-flex align-middle">
          {/* <Image src = {accounts_logo} alt = "" className="me-2" style = {{width: "20px", height:'auto'}}></Image> */}
          <SettingsIcon className="me-2"/>
          Accounts
        </div>
        <div>{account}</div>
      </Nav>
    </>
  );
};

export default SideBar;