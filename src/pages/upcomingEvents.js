import SideBar from "./components/sideBar";

export default function UpcomingEvents() {
    return(
        <div className="d-flex">
            <SideBar/>
            {/* <div className="d-flex justify-content-between">
            <img src="/diobox-platform-fe36ed96.svg"/>
            </div> */}
            <div className="w-100">
                <div className="d-flex justify-content-between text-center w-100 p-4 border-bottom">
                    <div>
                        <h4>Upcoming Events (1)</h4>
                    </div>
                    <div className="w-30">
                        <button className="w-15 m-2 mt-0 mb-0 btn btn-outline-primary">View </button>
                        <button className="w-15 m-2 mt-0 mb-0 btn btn-primary">+ Event</button>
                    </div>
                </div>
                <div className="border border-light w-100"></div>
                <div className="row p-5">
                    <div className="col-md-3">
                        <div className="event-card">
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
                                <div style={{ marginBottom: '1rem' }}>past event</div>
                            </div>

                            <div className="event-details">
                                <h5 className="text-center mt-3">House of Artistry ft Perch at Artistry, Goa</h5>
                                <p className="text-center m-0">November 11th, 2023</p>
                                <p className="text-center">0 guests</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}