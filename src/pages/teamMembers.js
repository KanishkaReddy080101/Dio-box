import React, { useState } from "react";
import Image from "next/image";
import SideBar from "./components/sideBar";

function teamMembers() {
  const [teamsize, setTeamsize] = useState("15");
  const [active, setActive] = useState("3");
  const [remaining, setRemainig] = useState("12");
  const addMembers = () => {};
  return (
<div className="d-flex" style={{ height: '100vh', overflow: 'hidden' }}>
      <SideBar />
      <div className="p-5 mx-5 overflow-auto" style={{ flex: 1 }}>
        <div className="container ">
          <div className="d-flex justify-content-between">
            <h2 className="">Team Members</h2>
            <div className="">
              <button
                type="button"
                className="btn btn-primary disabled"
                onClick={addMembers}
              >
                <i ></i>
                Invite Members
              </button>
            </div>
          </div>
          <div className="d-flex">
            <p className="pe-5"> <strong>Team Size : {teamsize}</strong> </p>
            <p className="pe-5"><strong>Active : {active}</strong> </p>
            <p><strong>Remaining : {remaining}</strong> </p>
          </div>
          <div className="my-5">
            <h3 className="mb-3">Account Admins</h3>
            <div className="border rounded-0 container">
              <div className="row bg-body-tertiary py-3 px-5">
                <div className="col-md-6">Name & Email</div>
                <div className="col-md-2">Access</div>
                <div className="col-md-4">Invited</div>
              </div>
              <div className="row border-top py-3 px-5">
                <div className="col-md-6">
                  <div className="d-flex">
                    <Image src="" alt=""></Image>
                    <div>
                      <h2>WeAreNocturnal Events </h2>
                      <button className="border-1 rounded-3 px-3 py-1">You</button>
                      <p>events@wearenocturnal.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <p>
                    Account <br /> Admin
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    September 7, <br /> 2022
                  </p>
                </div>
              </div>
              <div className="row border-top py-4 px-5">
                <div className="col-md-6">
                  <div className="d-flex">
                    <Image src="" alt=""></Image>
                    <div>
                      <h2>Nocturnal Network </h2>
                      <p>events@wearenocturnal.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <p>
                    Account <br /> Owner
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="d-flex justify-content-between">
                    <p>July 10, 2022</p>
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <button type="button" class="btn btn-outline-primary">
                          Edit
                        </button>
                      </div>
                      <button type="button" class="btn btn-outline-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <h3 className="mb-3">Limited Access</h3>
            <div className="border rounded-0 container">
              <div className="row bg-body-tertiary py-3 px-5">
                <div className="col-md-6">Name & Email</div>
                <div className="col-md-2">Access</div>
                <div className="col-md-4">Invited</div>
              </div>
              <div className="row border-top py-4 px-5">
                <div className="col-md-6">
                  <div className="d-flex">
                    <Image src="" alt=""></Image>
                    <div>
                      <h2>Artistry Hyd </h2>
                      <p>artistry.hyd@nocturnal.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <p>
                    <strong>2 events</strong>
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="d-flex justify-content-between">
                    <p>July 10, 2022</p>
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <button type="button" class="btn btn-outline-primary">
                          Edit
                        </button>
                      </div>
                      <button type="button" class="btn btn-outline-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default teamMembers;