const DoctorInfo = ({ doctor, onChangeHandler, userDetails ,handleClose}) => {
  const { id, name, specialization, appointments } = doctor;

  return (
    <div className="doctor-box">
      <h3>{name} </h3>

      <div>
        <p>{specialization} Appointments</p>
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              <label htmlFor={`appointment-${id + index}`}>
                <input
                  type="radio"
                  name="appointment"
                  value={name+" "+appointment.date + " " + appointment.time}
                  id={`appointment-${id + index}`}
                  checked={
                    userDetails.appointment.includes(appointment.date) &&
                    userDetails.appointment.includes(appointment.time)
                  }
                  onChange={onChangeHandler}
                />
                Date: {appointment.date}, Time: {appointment.time}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorInfo;
