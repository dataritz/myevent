import { useState, useContext } from "react";
import AddeventUi from "../component/AddeventUi";
import { AuthContext } from "../context/AuthContext";
export default function AddEvent() {
  const { authinfo } = useContext(AuthContext);
  console.log(authinfo);
  const [eventinfo, seteventinfo] = useState({
    eventname: "",
    eventtype: "",
    details: "",
    startdate: "",
    venue: "",
    organizer: "",
    deptt: "",
    eventimg: "",
  });
  console.log(authinfo);
  const handleInput = (event) => {
    let targetname = event.target.name;
    let value = event.target.value;
    seteventinfo({ ...eventinfo, [targetname]: value });
  };

  const handleInputimage = (e) => {
    seteventinfo({ ...eventinfo, eventimg: e.target.files[0] });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("eventname", eventinfo.eventname);
    formData.append("eventtype", eventinfo.eventtype);
    formData.append("details", eventinfo.details);
    formData.append("startdate", eventinfo.startdate);
    formData.append("venue", eventinfo.venue);
    formData.append("organizer", eventinfo.organizer);
    formData.append("deptt", eventinfo.deptt);
    formData.append("eventimg", eventinfo.eventimg);
    formData.append("userId", authinfo.email);
    try {
      const p = await fetch(`http://localhost:3000/addevent`, {
        method: "POST",
        body: formData,
      });
      alert("Event Uploaded");
      seteventinfo({
        ...eventinfo,
        eventname: "",
        eventtype: "",
        details: "",
        startdate: "",
        venue: "",
        organizer: "",
        deptt: "",
        eventimg: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AddeventUi
      eventinfo={eventinfo}
      handleInput={handleInput}
      handleInputimage={handleInputimage}
      handleSubmit={handleSubmit}
    ></AddeventUi>
  );
}
