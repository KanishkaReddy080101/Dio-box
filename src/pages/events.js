import React, { useState } from "react";
import SideBar from "./components/sideBar";
import Link from "next/link";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Events() {
  const events = [
    { id: 1, title: "The Yellow Diary, at Artistry, Hyderabad", date: "November 4th, 2023", guests: "272 guests" },
    { id: 2, title: "Artistry, Hyderabad", date: "November 3rd, 2023", guests: "38 guests" },
    { id: 3, title: "Ritviz Live At Artistry, Hyderabad", date: "October 29th, 2023", guests: "242 guests" },
    { id: 4, title: "Ritviz Live At Artistry Goa", date: "October 28th, 2023", guests: "495 guests" },
  ];
  const [showTime, setShowTime] = useState(false);
  const [selectedTimezone, setSelectedTimezone] = useState("UTC");

  const handleCheckboxChange = () => {
    setShowTime(!showTime);
  };

  const handleTimezoneChange = (event) => {
    setSelectedTimezone(event.target.value);
  };

  return (
    <div className="d-flex">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZwT" crossOrigin="anonymous" />
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8Wv2U+8r3h6" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
      <SideBar />
      <div className="w-100">
        <div className="d-flex justify-content-between text-center w-100 p-4 border-bottom">
          <div>
            <h4>All Events (7)</h4>
          </div>
          <div className="w-30">
            <button className="w-15 m-2 mt-0 mb-0 btn btn-outline-primary">View</button>
            <button type="button" className="w-15 m-2 mt-0 mb-0 btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
              + Event
            </button>
          </div>
        </div>
        <div className="border border-light w-100"></div>
        <div className="row p-5">
          {events.map(event => (
            <div className="col-md-3" key={event.id}>
              <div className="event-card">
                <Link href={`/events/${event.id}`} as={`/events/${event.id}`} passHref className="text-decoration-none">
                  <div className="event-image text-light" style={{
                    backgroundImage: `url('/login-bg-fe1235a9.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '30vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}>
                    <div className="text-light" style={{ marginBottom: '1rem', textDecoration: 'none' }}>past event</div>
                  </div>
                  <div className="event-details">
                    <h5 className="text-center mt-3 text-dark" style={{ textDecoration: 'none' }}>{event.title}</h5>
                    <p className="text-center m-0 text-dark" style={{ textDecoration: 'none' }}>{event.date}</p>
                    <p className="text-center text-dark" style={{ textDecoration: 'none' }}>{event.guests}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">New Event</h5>
              <button type="button" className="close border-0" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ maxHeight: '500px', overflowY: 'auto' }}>
        <input
          type="text"
          className="form-control border-0 border-bottom mb-5"
          placeholder="Event Title"
          name="title"
        />
        <div className="d-flex align-items-center">
        <MdDateRange  className="mb-3"/>
        <h6 className="m-3 mt-0">Date & Time</h6>
        </div>
        <input
          type="date"
          className="form-control mb-3"
          placeholder="Event Date"
          name="date"
        />
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="showTimeCheckbox"
            checked={showTime === false}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="showTimeCheckbox">Show End Time</label>
        </div>
          <input
            type="date"
            className="form-control mb-3"
            placeholder="Event Time"
            name="time"
            disabled={showTime}
          />
          <div className="form-group mb-5">
              <select
                className="form-control"
                id="timezoneSelect"
                value={selectedTimezone}
                onChange={handleTimezoneChange}
              >
                <option value="UTC">UTC</option>
                <option value="America/New_York">America/New_York</option>
                <option value="Europe/London">Europe/London</option>
                {/* Add more timezones as needed */}
              </select>
              </div>
              <div className="d-flex align-items-center">
              <FaLocationDot className="mb-3"/>
              <h6 className="m-3 mt-0">Location</h6>
              </div>
              <input
          type="text"
          className="form-control border-0 border-bottom mb-3"
          placeholder="Venue"
          name="title"
        />
        <input
          type="text"
          className="form-control border-0 border-bottom mb-3"
          placeholder="Line 1"
          name="title"
        />
        <input
          type="text"
          className="form-control border-0 border-bottom mb-3"
          placeholder="Line 2"
          name="title"
        />
        <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control border-0 border-bottom"
          placeholder="City"
          name="title"
        />
        <div className="d-flex">
            <input
          type="text"
          className="form-control border-0 border-bottom"
          placeholder="State"
          name="title"
        />
        <input
          type="text"
          className="form-control border-0 border-bottom"
          placeholder="Zip"
          name="title"
        />
        </div>
        </div>
        <input
          type="text"
          className="form-control border-0 border-bottom mb-5"
          placeholder="Country"
          name="title"
        />
            
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-dark" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary disabled">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
