export default function AddeventUi({
  eventinfo,
  handleInputimage,
  handleInput,
  handleSubmit,
}) {
  return (
    <>
      <div className="container mt-3">
        <form method="POST" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mt-3"
            name="eventname"
            placeholder="Enter Name of Event"
            value={eventinfo.eventname}
            onChange={handleInput}
          ></input>
          <input
            type="text"
            className="form-control mt-3"
            name="eventtype"
            placeholder="Enter Event Type"
            value={eventinfo.eventtype}
            onChange={handleInput}
          ></input>
          <input
            type="text"
            className="form-control mt-3"
            name="details"
            placeholder="Enter Event Details"
            value={eventinfo.details}
            onChange={handleInput}
          ></input>
          <input
            type="date"
            className="form-control mt-3"
            name="startdate"
            value={eventinfo.startdate}
            onChange={handleInput}
          ></input>
          <input
            type="text"
            className="form-control mt-3"
            name="venue"
            placeholder="Venue"
            value={eventinfo.venue}
            onChange={handleInput}
          ></input>
          <input
            type="text"
            className="form-control mt-3"
            name="organizer"
            placeholder="organizer"
            value={eventinfo.organizer}
            onChange={handleInput}
          ></input>
          <input
            type="text"
            className="form-control mt-3"
            name="deptt"
            placeholder="Departement"
            value={eventinfo.deptt}
            onChange={handleInput}
          ></input>
          <input
            type="file"
            className="form-control mt-3"
            name="eventimg"
            onChange={handleInputimage}
          ></input>
          <button className="btn btn-outline-primary mt-3">Add Event</button>
        </form>
      </div>
    </>
  );
}
