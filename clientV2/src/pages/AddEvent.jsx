import { useState } from "react";
import AddeventUi from "../component/AddeventUi";

export default function AddEvent() {
  const [eventinfo, seteventinfo] = useState({
    eventname: "",
    eventtype: "",
    details: "",
    startdate: "",
    venue: "",
    organizer: "",
    deptt: "",
  });

  const handleInput = (event) => {
    let targetname = event.target.name;
    let value = event.target.value;
    seteventinfo({ ...eventinfo, [targetname]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("hi");
      const p = await fetch(`http://localhost:3000/addevent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: await JSON.stringify(eventinfo),
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
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AddeventUi
      eventinfo={eventinfo}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    ></AddeventUi>
  );
}
