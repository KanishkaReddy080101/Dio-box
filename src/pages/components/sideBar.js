import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
// import diobox_logo from '@/assets/diobox-logo-af3f776a.svg'

const SideBar = () => {
  const [wearenocturnal_dropdown_item, setWeareNocturnal_dropdown_item] =
    useState(null);
    const [eventDropdownOpen, setEventDropdownOpen] = useState(true);
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
                <Link href = "/events" className="mb-4 text-decoration-none text-black">
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
  const wearenocturnalDropdown = () => {
    setWeareNocturnal_dropdown_item(
      wearenocturnal_dropdown_item === null ? wearenocturnal : null
    );
    setEvent(null);
    setAccount(null);
  };

  
  const events_content = (
    <div className="d-flex flex-column mb-3">
      <Link href="/upcomingEvents" className="text-white text-decoration-none mx-5 my-2">
        Upcoming Events
      </Link>
      <Link href="/pastEvents" className="text-white text-decoration-none mx-5 my-2">
        Past Events
      </Link>
    </div>
  );
  const events = () => {
    setEvent(event === null ? events_content : null);
    setAccount(null);
    setWeareNocturnal_dropdown_item(null);
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
    setAccount(account === null ? accounts_content : null);
    setWeareNocturnal_dropdown_item(null);
    setEvent(null);
  };

  return (
    <>
      <Nav
        defaultActiveKey="/home"
        className="flex-column w-25"
        style={{ backgroundColor: "#1C1C1C", height: "100vh" }}
      >
        <div
          className={`text-white d-flex p-4 ${
            wearenocturnal_dropdown_item !== null ? "active-bg" : ""
          }`}
          onClick={wearenocturnalDropdown}
          style={{ width: "317px" }}
        >
          <Image src="/Color_DP.png" alt="logo" width={40} height={40} />
          <p className="mx-2">
            WeAreNocturnal <br />
            WeAreNocturnal Events
          </p>
        </div>

        <div>{wearenocturnal_dropdown_item}</div>
        <div
          onClick={events}
          className={`text-white mx-5 my-3 d-flex align-middle ${
            event !== null ? "active-bg" : ""
          }`}
        >
          <CalendarMonthIcon className="me-2" />
          <p>Events</p>
        </div>
        <div>{event}</div>
        <div
          onClick={accounts}
          className={`text-white mx-5 d-flex align-middle ${
            account !== null ? "active-bg" : ""
          }`}
        >
          <SettingsIcon className="me-2" />
          Accounts
        </div>
        <div>{account}</div>
      </Nav>
    </>
  );
};

export default SideBar;