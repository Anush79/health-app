import { useState } from "react";
import DoctorsList from "./DoctorsList";
import toast from "react-hot-toast";

function Contact() {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    phoneNumber: "",
    age: "",
    prevExp: "yes",
    city: "",
    company: "",
    complaints: "",
    appointment: "",
  });

  const onChangeHandler = (e) => {
    const { name, value} = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    toast.success(`Thanks ${userDetails.fullName} for booking appointment of ${userDetails.appointment}`)
    setUserDetails({
      fullName: "",
    phoneNumber: "",
    age: "",
    prevExp: "yes",
    city: "",
    company: "",
    complaints: "",
    appointment: "",
    })
  }

  return (
    <div id="contact">
      <h1>Consultation booking</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="flex-row">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={userDetails.fullName}
            onChange={onChangeHandler}
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone number "
            required
            value={userDetails.phoneNumber}
            onChange={onChangeHandler}
          />
        </div>
        <div className="flex-row">
          <input
            type="number"
            name="age"
            placeholder="age "
            required
            value={userDetails.age}
            onChange={onChangeHandler}
          />
 <input
          type="text"
          name="company"
          placeholder="company "
          required
          value={userDetails.company}
          onChange={onChangeHandler}
        />
          <DoctorsList
            userDetails={userDetails}
            onChangeHandler={onChangeHandler}
          />

          <div className="showAppointment">
            {userDetails.appointment && (
              <p>Selected: {userDetails.appointment}</p>
            )}
          </div>
        </div>
        { 
       userDetails.age > 40 && <div className="box"> <label htmlFor="prevExp">
          Any previous experience with physiotherapy
        </label>
        <select
          name="prevExp"
          id="prevExp"
          value={ userDetails.prevExp }
          onChange={onChangeHandler}
        >
        
          <option value="yes">Yes</option> 
          <option value="no">No</option>
        </select>
        </div>
        }
       

        <textarea
          name="complaints"
          placeholder="chief complaints"
          value={userDetails.complaints}
          onChange={onChangeHandler}
        ></textarea>

        <input type="submit" aria-label="Submit" value={"send"}  />
      </form>
    </div>
  );
}

export default Contact;
