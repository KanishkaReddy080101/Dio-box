import { useRouter } from 'next/router';
import SideBarInternal from '../components/SideBarInternal';
// import SideBar from '../components/sideBar';

const EventDetailPage = () => {
  const router = useRouter();
  const { eventId } = router.query;

  const events = [
    { id: 1, title: "The Yellow Diary, at Artistry, Hyderabad", date: "November 4th, 2023", guests: "272 guests" },
    { id: 2, title: "Artistry, Hyderabad", date: "November 3rd, 2023", guests: "38 guests" },
    { id: 3, title: "Ritviz Live At Artistry, Hyderabad", date: "October 29th, 2023", guests: "242 guests" },
    { id: 4, title: "Ritviz Live At Artistry Goa", date: "October 28th, 2023", guests: "495 guests" },
  ];

  const eventDetails = events.find(event => event.id === parseInt(eventId));

  return (
    <div className='d-flex'>
      {/* <SideBar/> */}
      <SideBarInternal/>
      <div>
      {eventDetails ? (
        // <div>
        //   <h1>{eventDetails.title}</h1>
        //   <p>Date: {eventDetails.date}</p>
        //   <p>Guests: {eventDetails.guests}</p>
        // </div>
        <div className='bg-light p-5 w-100 h-100'>
          <div className='container w-100 d-flex bg-white border border-secondary' style={{height: '30vh'}}>
            <div></div>
            <div className="event-image text-light" style={{
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            height: '30vh',
                                            width: '30vh'
                                        }}>
                                          <img style={{
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            height: '30vh',
                                            width: '30vh'
                                        }} src='/login-bg-fe1235a9.jpg'/>
                                        </div>          
                                        </div>
          <div>
            
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
        </div>
      ) : (
        <h1>Event Details for Event ID: {eventId || 'Loading...'}</h1>
      )}
      </div>
    </div>
  );
};

export default EventDetailPage;
