import SideBar from "./components/sideBar";

export default function PastEvents() {
    return (
        <div className="d-flex">
            <SideBar />
            <div className="w-100">
                <div className="d-flex justify-content-between text-center w-100 p-4 border-bottom">
                    <div>
                        <h4>All Events (7)</h4>
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
                                <h5 className="text-center mt-3">The Yellow Diary, at Artistry, Hyderabad</h5>
                                <p className="text-center m-0">November 4th, 2023</p>
                                <p className="text-center">272 guests</p>
                            </div>
                        </div>
                    </div>
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
                                <h5 className="text-center mt-3">Artistry, Hyderabad</h5>
                                <p className="text-center m-0">November 3rd, 2023</p>
                                <p className="text-center">38 guests</p>
                            </div>
                        </div>
                    </div>

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
                                <h5 className="text-center mt-3">Ritviz Live At Artistry, Hyderabad</h5>
                                <p className="text-center m-0">October 29th, 2023</p>
                                <p className="text-center">242 guests</p>
                            </div>
                        </div>
                    </div>

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
                                <h5 className="text-center mt-3">Ritviz Live At Artistry Goa</h5>
                                <p className="text-center  m-0">October 28th, 2023</p>
                                <p className="text-center">495 guests</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}