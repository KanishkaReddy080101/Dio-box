import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "react-bootstrap";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EmailIcon from '@mui/icons-material/Email';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LanguageIcon from '@mui/icons-material/Language';

function SideBarInternal() {
  const [wearenocturnal_dropdown_item, setWeareNocturnal_dropdown_item] =
    useState(null);
  const wearenocturnal = (
    <div className="bg-white mx-1 rounded-3">
      <div className="p-3">
        <div className="p-3">
          <div className="d-flex justify-content-center">
          <Image src="/Color_DP.png" alt="logo" width={40} height={40} />          </div>
          <h3 className="text-center">WeAreNocturnal</h3>
          <div className="d-flex justify-content-center mb-4">
            <button className="btn btn-outline-primary py-0" type="button">
              Corporate Plan
            </button>
          </div>
          <div className="d-flex flex-column text-black">
            <Link href="/" className="mb-4 text-decoration-none text-black">
              {/* Icon */}
              Events
            </Link>
            <Link href="/account" className="text-decoration-none text-black">
              {/* Icon */}
              Account
            </Link>
          </div>
        </div>
        <div className="border-top p-3">
          <div className="d-flex justify-content-center">
            <Image src="" alt="logo" />
          </div>
          <h3 className="text-center">WeAreNocturnal</h3>
          <p className="text-center mb-4">events@wearenocturnal.com</p>
          <div className="d-flex flex-column">
            <Link href="/" className="mb-4 text-decoration-none text-black">
              {/* Icon */}
              Switch Account
            </Link>
            <Link href="/" className="mb-4 text-decoration-none text-black">
              {/* Icon */}
              What's New
            </Link>
            <Link href="/" className="mb-4 text-decoration-none text-black">
              {/* Icon */}
              Help Center
            </Link>
            <Link href="/" className="mb-4 text-decoration-none text-black">
              {/* Icon */}
              Message Us
            </Link>
            <Link href="/" className="text-decoration-none text-black">
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
    } else {
      setWeareNocturnal_dropdown_item(null);
    }
  };
  return (
    <>
      <Nav
        defaultActiveKey="/home"
        className="flex-column w-25"
        style={{ backgroundColor: "#1C1C1C", height: "100vh" }}
      >
        <div
          className="text-white d-flex p-4"
          onClick={wearenocturnal_dropdown}
          style={{ width: "317px" }}
        >
        <Image src="/Color_DP.png" alt="logo" width={40} height={40} />
          <p className="mx-2">
            WeAreNocturnal <br />
            WeAreNocturnal Events
          </p>
        </div>

        {/* <div>{wearenocturnal_dropdown_item}</div> */}
        <div className="mb-4 border-top border-white">
            <div className="px-2 mt-3 py-3 d-flex bg-black border-start border-info">
            <Image src="/login-bg-fe1235a9.jpg" alt="logo" width={40} height={40} />
                <p className="text-white mx-2" >The Yellow Diary, at <br/> Artistry, Hyderabad</p>
            </div>
          <Link
            href="/"
            className="text-white mx-4 my-3 d-flex align-middle text-decoration-none"
          >
            <PeopleAltIcon className="me-3" />
            <p>Guests</p>
          </Link>
          <Link
            href="/"
            className="text-white mx-4 mb-3 d-flex align-middle text-decoration-none"
          >
            <EmailIcon className="me-3" />
            <p>Emails</p>
          </Link>
          <Link
            href="/"
            className="text-white mx-4 mb-3 d-flex align-middle text-decoration-none"
          >
            <WorkspacesIcon className="me-3 " />
            <p>Seating</p>
          </Link>
        </div>

        <div className="mb-4">
          <Link
            href="/"
            className="text-white mx-4 my-3 d-flex align-middle text-decoration-none"
          >
            <FormatAlignJustifyIcon className="me-3" />
            <p>Forms</p>
          </Link>
          <Link
            href="/"
            className="text-white mx-4 mb-3 d-flex align-middle text-decoration-none"
          >
            <ConfirmationNumberIcon className="me-3" />
            <p>Tickets</p>
          </Link>
          <Link
            href="/"
            className="text-white mx-4 mb-3 d-flex align-middle text-decoration-none"
          >
            <ReceiptIcon className="me-3" />
            <p>Orders</p>
          </Link>
          <Link
            href="/"
            className="text-white mx-4 mb-3 d-flex align-middle text-decoration-none"
          >
            <LanguageIcon className="me-3" />
            <p>Websites</p>
          </Link>
        </div>
        <Link
        href="/settings"
        className="text-white mx-4 mt-3 d-flex align-middle text-decoration-none"
        >
        <SettingsIcon className="me-3" />
        <p>Settings</p>
        </Link>
      </Nav>
    </>
  );
}

export default SideBarInternal;