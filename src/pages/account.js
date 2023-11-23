import SideBar from "./components/sideBar";

export default function Account() {
    return(
        <div className="d-flex" style={{ height: '100vh', overflow: 'hidden' }}>
      <SideBar />
      <div className="p-5 mx-5 overflow-auto" style={{ flex: 1 }}>
        <h2 className="mb-5">Account Settings</h2>
        <form className="border rounded-4 container-fluid p-0 mb-5">
          <div className="p-3">
            <div className="row mb-4 p-2">
              <label className="justify-content-start col-md-3">
                <strong>Account Name</strong>
              </label>
              <div class="mb-3 col-md-9">
                <input
                  type="text"
                  class="form-control border-0 border-bottom rounded-0 "
                  id="floatingInput"
                  placeholder=""
                />
                <label>
                  The account name is displayed in menus and headings. In most
                  cases, it will be the name of your company or team.
                </label>
              </div>
            </div>
            <div className="row mb-4 p-2">
              <label className="col-md-3">
                <strong>Account ID</strong>
              </label>
              <p className="col-md-9">9ba1f13a-17de-42c2-90e6-72c7f30967be</p>
            </div>
            <div className="row mb-4 p-2">
              <label className="col-md-3">
                {" "}
                <strong>Industry</strong>
              </label>
              <div className="col-md-5">
                <select className="rounded-2 form-control">
                  <option> Entertainment</option>
                  <option>Option1</option>
                  <option>Option2</option>
                  <option>Option3</option>
                </select>
              </div>
            </div>
            <div className="row mb-4 p-2">
              <label className="col-md-3">
                <strong>Logo</strong>
              </label>
              <div className="col-md-9">
                <div className="d-flex align-items-center">
                  <img style={{width: '10rem', height: '10rem'}} src="/Color_DP.png"/>
                  <div className="me-3">
                    <button type="button" class="btn btn-outline-primary disabled m-3">
                      Upload
                    </button>
                  </div>
                  <button type="button" class="btn btn-outline-primary disabled">
                    Remove
                  </button>
                </div>
                <p>
                  Account logo should be uploaded in a 1x1 ratio (square) at
                  least 256x256. JPG or PNG only.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end border-top p-3">
            <div className="me-3">
              <button type="button" class="btn btn-outline-secondary">
                Cancel
              </button>
            </div>
            <input
              class="btn btn-primary ps-3 disabled"
              type="submit"
              value="Save"
            ></input>
          </div>
        </form>

        <h2 className="mb-5">Contact Settings</h2>
        <div className="border rounded-4">
          <div className="p-4">
            <p>
              <strong>Orphan Contacts</strong>
            </p>
            {/* <br/> */}
            <p>
              Diobox automatically stores your guests in a unified contacts
              database so that they can be added in future events, giving you
              the ability to track their activity across events.
            </p>
            {/* <br/> */}
            <p>
              This means if you use the "Remove" feature, they are removed from
              that event but will still remain in the contacts database.
              However, if you have contacts that are not associated with any
              events (for example if there were added by mistake), you can use
              this feature to permanently delete them. Proceeding with this
              process will <strong>not </strong> delete any guest present at an
              event.
            </p>
          </div>
          <div className="d-flex justify-content-end border-top p-3">
            <button type="button" class="btn btn-outline-danger px-4 py-2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}