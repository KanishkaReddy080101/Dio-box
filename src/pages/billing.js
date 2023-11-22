import React from "react";
import Image from "next/image";
import Link from "next/link";
import SideBar from "./components/sideBar";

function billing() {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="container p-5 mx-5">
        <h1 className="mb-5">Plan</h1>
        <br />
        <p>Corporate Subscription Plan</p>
        <br />
        <div>
          <p>Team Size: 15</p>
          <p>$3,588.00/year</p>
          <p>Includes 40% discount</p>
        </div>
        <br />
        <p className="mb-4">Downgrade &#x2022; Switch to Monthly Billing</p>
        <div className="border rounded-0 px-5 py-3 mb-5 bg-body-tertiary">
          <p className="text-center pt-3">Diobox Enterprise</p>
          {/* <br /> */}
          <p className="text-center pt-2">
            Contact us to create a custom solution that suits your event
            management needs.
          </p>
          <div className="d-flex justify-content-center mt-3">
            <div className="pe-5">
              <Image src="" alt="" />
              <p>
                {" "}
                Phone <br />
                Support
              </p>
            </div>
            <div className="pe-5">
              <Image src="" alt="" />
              <p>
                {" "}
                Custom <br />
                Developement
              </p>
            </div>
            <div>
              <Image src="" alt="" />
              <p>
                {" "}
                Unlimited Team <br />
                Members
              </p>
            </div>
          </div>
          <div className="text-center mt-3">
            <button type="button" class="btn btn-primary px-4 py-2 disabled">
              Contact Us
            </button>
          </div>
        </div>

        <h1 className="mb-5">Billing</h1>
        <br />
        <p><strong>Visit the <Link href = "/" className="text-decoration-none">Stripe Billing Portal</Link> to:</strong></p>
        <br />
        <div>
          <p> &#x2022; Change your credit card number</p>
          <p> &#x2022; View your past invoices</p>
        </div>
      </div>
    </div>
  );
}

export default billing;