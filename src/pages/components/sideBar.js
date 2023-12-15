import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { GoArrowSwitch } from "react-icons/go";
import { CiBellOn } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { CiCircleChevRight } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
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
                  <FaCalendar className="me-2"/>
                  Events
                </Link>
                <Link href = "/account" className="text-decoration-none text-black">
                  <IoMdSettings className="me-2"/>
                  Account
                </Link>
              </div>
            </div>
            <div className="border-top p-3">
            <div className="d-flex justify-content-center" >
            <CiUser width={30} height={30} />
              </div>
              <h3 className="text-center">WeAreNocturnal</h3>
              <p className="text-center mb-4">events@wearenocturnal.com</p>
              <div className="d-flex flex-column">
                <a className="mb-4 text-decoration-none text-black"  data-toggle="modal" data-target="#exampleModalCenter2">
                  <GoArrowSwitch className="me-2"/>
                  Switch Account
                </a>
                <Link href = "/" className="mb-4 text-decoration-none text-black">
                  <CiBellOn className="me-2"/>
                  What's New
                </Link>
                <Link href = "/" className="mb-4 text-decoration-none text-black">
                  <CiCircleQuestion className="me-2"/>
                  Help Center
                </Link>
                <Link href = "/" className="mb-4 text-decoration-none text-black">
                  <FiMessageSquare className="me-2"/>
                  Message Us
                </Link>
                <Link href = "/" className="text-decoration-none text-black">
                  <LiaSignOutAltSolid className="me-2"/>
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
        <CiCircleChevRight className="me-2"/>
        Upcoming Events
      </Link>
      <Link href="/pastEvents" className="text-white text-decoration-none mx-5 my-2">
      <IoTimeOutline className="me-2"/>
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
          <FaCalendar className="me-2 mt-1" />
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
      <div className="modal fade" id="exampleModalCenter2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Switch Account</h5>
              <button type="button" className="close border-0" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ maxHeight: '500px', overflowY: 'auto' }}>
        <div className="d-flex align-items-center">
        <h6 className="m-3 mt-0">Team Member</h6>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center m-3 mt-0 mb-0" style={{ gap: '10px'}}>
          <img src="/Color_DP.png"/>
          <h5>WeAreNocturnal</h5>
          </div>
          <button type="button" class="btn btn-outline-primary">Corporate Plan</button>
        </div>
            </div>
            <div className="modal-footer d-flex justify-content-start">
              <a className="text-primary m-3 mt-0 mb-0" style={{ fontSize: '20px', textDecoration: 'none'}}>+ Add Account</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;