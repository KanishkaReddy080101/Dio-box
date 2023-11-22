import SideBar from "./components/sideBar";
import Link from "next/link";
import EventDetailPage from "./events/[event]";

export default function Events() {
    // Sample list of events with unique event IDs
    const events = [
        { id: 1, title: "The Yellow Diary, at Artistry, Hyderabad", date: "November 4th, 2023", guests: "272 guests" },
        { id: 2, title: "Artistry, Hyderabad", date: "November 3rd, 2023", guests: "38 guests" },
        { id: 3, title: "Ritviz Live At Artistry, Hyderabad", date: "October 29th, 2023", guests: "242 guests" },
        { id: 4, title: "Ritviz Live At Artistry Goa", date: "October 28th, 2023", guests: "495 guests" },
    ];

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
                    {events.map(event => (
                        <div className="col-md-3" key={event.id}>
                            <div className="event-card">
                                <Link href={`/events/${event.id}`} as={`/events/${event.id}`} passHref>
                                    
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
                                            <div className="text-decoration-none text-light" style={{ marginBottom: '1rem', textDecoration: 'none' }}>past event</div>
                                        </div>
                                        <div className="event-details">
                                            <h5 className="text-center mt-3 text-decoration-none text-dark" style={{ textDecoration: 'none' }}>{event.title}</h5>
                                            <p className="text-center m-0 text-decoration-none text-dark" style={{ textDecoration: 'none' }}>{event.date}</p>
                                            <p className="text-center text-decoration-none text-dark" style={{ textDecoration: 'none' }}>{event.guests}</p>
                                        </div>
                                        {/* <EventDetailPage eventDetails={event} /> */}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
