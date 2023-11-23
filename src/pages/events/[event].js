import { useRouter } from 'next/router';
import SideBarInternal from '../components/SideBarInternal';

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
    <div className="d-flex" style={{ height: '100vh', overflow: 'hidden' }}>
      <SideBarInternal />
      <div className='bg-light p-5 w-100 overflow-auto' style={{ flex: 1 }}>
        {eventDetails ? (
          <>
            <div className='container bg-white p-4 mb-5 border border-secondary rounded'>
              <div className='row mb-4'>
                <div className='col-md-8'>
                  <h2>{eventDetails.title}</h2>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <h5>{eventDetails.date}</h5>
                      <p>18 Days Ago</p>
                    </div>
                    <div>
                      <p>Website URL</p>
                      <button className='btn btn-outline-primary'>Enable</button>
                      <p>Page Views</p>
                      <h6>0</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 event-image text-light" style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '150px',
                }}>
                  <img className="img-fluid" src='/login-bg-fe1235a9.jpg' alt='Event' />
                </div>
              </div>
            </div>

            <div className='container bg-white p-4 mb-5 border border-secondary rounded'>
              <div className='row mb-4'>
                <h3 className='mb-5'>Event Usage</h3>
                <div className='col-md-4 mb-4'>
                  <p>Guest Check-Ins</p>
                  <p>Registration Form</p>
                  <p>Ticketing & Ordering</p>
                  <p>Multiple Event Sessions</p>
                  <div>
                    <div className='d-flex justify-content-between'>
                      <p>Guest Limit</p>
                      <p>276/15,000</p>
                    </div>
                    <div className='progress'>
                      <div className='progress-bar' role='progressbar' style={{ width: '5%' }} aria-valuenow='5' aria-valuemin='0' aria-valuemax='100'></div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mb-4'>
                  <p>Standard Emails</p>
                  <p>Invites with Private RSVPs</p>
                  <p>QR Code Distribution</p>
                  <p>Custom Email Domain</p>
                  <div>
                    <div className='d-flex justify-content-between'>
                      <p>Daily Email Limit</p>
                      <p>0/15,000</p>
                    </div>
                    <div className='progress'>
                      <div className='progress-bar' role='progressbar' style={{ width: '0%' }} aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'></div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mb-4'>
                  <p>Tables & Seating</p>
                  <p>Website & Agenda</p>
                  <p>Badge Printing</p>
                  <p>White-Label</p>
                  <div>
                    <div className='d-flex justify-content-between'>
                      <p>Team Size</p>
                      <p>3/15</p>
                    </div>
                    <div className='progress'>
                      <div className='progress-bar' role='progressbar' style={{ width: '20%' }} aria-valuenow='20' aria-valuemin='0' aria-valuemax='100'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between'>
              <div className='container bg-white p-4 mb-5 border border-secondary rounded'>
                <h3 className='mb-5'>Guests</h3>
                <div className='d-flex justify-content-between mb-1'>
                  <p>All Guests</p>
                  <h5>276</h5>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='mb-1'>Confirmed</p>
                  <p className='mb-1'>276(100%)</p>
                </div>
                <div className='progress mb-4'>
                      <div className='progress-bar bg-info' role='progressbar' style={{ width: '100%' }} aria-valuenow='20' aria-valuemin='0' aria-valuemax='100'></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='mb-1'>Waitlisted</p>
                  <p className='mb-1'>0</p>
                </div>
                <div className='progress mb-4'>
                      <div className='progress-bar' role='progressbar' style={{ width: '0%' }} aria-valuenow='20' aria-valuemin='0' aria-valuemax='100'></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='mb-1'>Declined</p>
                  <p className='mb-1'>0</p>
                </div>
                <div className='progress mb-4'>
                      <div className='progress-bar' role='progressbar' style={{ width: '0%' }} aria-valuenow='20' aria-valuemin='0' aria-valuemax='100'></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='mb-1'>Unconfirmed</p>
                  <p className='mb-1'>0</p>
                </div>
                <div className='progress mb-4'>
                      <div className='progress-bar' role='progressbar' style={{ width: '0%' }} aria-valuenow='20' aria-valuemin='0' aria-valuemax='100'></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='mb-1'>Checked In</p>
                  <p className='mb-1'>218 (79%)</p>
                </div>
                <div className='progress mb-4'>
                      <div className='progress-bar bg-success' role='progressbar' style={{ width: '79%' }} aria-valuenow='20' aria-valuemin='0' aria-valuemax='100'></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='mb-1'>Not Checked In</p>
                  <p className='mb-1'>58 (21%)</p>
                </div>
                <div className='progress mb-4'>
                      <div className='progress-bar bg-danger' role='progressbar' style={{ width: '21%' }} aria-valuenow='20' aria-valuemin='0' aria-valuemax='100'></div>
                </div>
              </div>
              <div className='container bg-white p-4 mb-5 border border-secondary rounded ms-4 h-auto'>
              <h3 className='mb-5'>Emails</h3>
                <div className='d-flex justify-content-between mb-1'>
                  <p>Total Emails Sent</p>
                  <h5>276</h5>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='mb-1'>Opened</p>
                  <p className='mb-1'>0</p>
                </div>
                <div className='progress mb-4'>
                      <div className='progress-bar bg-info' role='progressbar' style={{ width: '0%' }} aria-valuenow='20' aria-valuemin='0' aria-valuemax='100'></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='mb-1'>Clicked</p>
                  <p className='mb-1'>0</p>
                </div>
                <div className='progress mb-4'>
                      <div className='progress-bar' role='progressbar' style={{ width: '0%' }} aria-valuenow='20' aria-valuemin='0' aria-valuemax='100'></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='mb-1'>Unopened</p>
                  <p className='mb-1'>276 (100%)</p>
                </div>
                <div className='progress mb-4'>
                      <div className='progress-bar bg-secondary' role='progressbar' style={{ width: '100%' }} aria-valuenow='20' aria-valuemin='0' aria-valuemax='100'></div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='mb-1'>Bounced</p>
                  <p className='mb-1'>0</p>
                </div>
                <div className='progress mb-4'>
                      <div className='progress-bar' role='progressbar' style={{ width: '0%' }} aria-valuenow='20' aria-valuemin='0' aria-valuemax='100'></div>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between'>
              <div className='container bg-white p-4 mb-5 border border-secondary rounded'>
                <h3 className='mb-5'>Ticketing</h3>
                <div className='d-flex justify-content-between mb-1'>
                  <p>Tickets Processed</p>
                  <h5>0</h5>
                </div>
                <div className='d-flex justify-content-between mb-1'>
                  <p>Orders Placed</p>
                  <h5>0</h5>
                </div>
                <div className='d-flex justify-content-between mb-1'>
                  <p>Net Sales</p>
                  <h5>$0.00</h5>
                </div>
                <div className='d-flex justify-content-between mb-1'>
                  <p>Gross Sales</p>
                  <h5>$0.00</h5>
                </div>
              </div>
              <div className='container bg-white p-4 mb-5 border border-secondary rounded ms-4 h-auto'>
              <h3 className='mb-5'>Seating</h3>
                <div className='d-flex justify-content-between mb-1'>
                  <p>Tables</p>
                  <h5>0</h5>
                </div>
                <div className='d-flex justify-content-between mb-1'>
                  <p>All Seats</p>
                  <h5>0</h5>
                </div>
                <div className='d-flex justify-content-between mb-1'>
                  <p>Vacant Seats</p>
                  <h5>0</h5>
                </div>
                <div className='d-flex justify-content-between mb-1'>
                  <p>Waitlisted Guests</p>
                  <h5>0</h5>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1 className='text-center'>Event Details for Event ID: {eventId || 'Loading...'}</h1>
        )}
      </div>
    </div>
  );
};

export default EventDetailPage;
