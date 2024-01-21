import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { cityList, style } from "../data";
import DoctorInfo from "./DoctorsInfo";
import { useParams } from "react-router-dom";

export default function DoctorsList({ userDetails, onChangeHandler }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [doctorsList, setDoctorsList] = useState([]);
  const { city } = useParams()

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    const argument = city ? { target:{name: "city", value: city} } : event
    onChangeHandler(argument) ;
    handleOpen();
  };

  const fetchDoctorsData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dock-backend.onrender.com/doctors");
      const result = await response.json();
      const filteredDoctors = result.filter(
        (item) => item.contact.clinicAddress.city.toLowerCase() === userDetails.city.toLowerCase()
      );
      setDoctorsList(filteredDoctors);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctorsData(); 

  }, [userDetails.city]);

  

  return (
    <div>
      <div className="box">
        <select name="city" id="" onChange={handleChange} value={userDetails.city}>
          <option value="">Select city</option>
          {cityList.map((item) => (
            <option key={item} value={item} onClick={handleChange}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="choose doctors according to city"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading && <p>Getting Doctors List...</p>}
          {doctorsList.length > 0 &&
            !loading &&
<><p><b>{userDetails.city.toUpperCase()}</b></p>
            {doctorsList.map((doctor) => (
              <DoctorInfo
                key={doctor.id}
                doctor={doctor}
                onChangeHandler={onChangeHandler}
                userDetails={userDetails}
                handleClose={handleClose}
              />
            ))}
            </>
            }
          {!loading && doctorsList.length === 0 && (
            <p>Sorry, No doctor is available at {userDetails.city}. </p>
          )}
          <button onClick={handleClose}>Close</button>
        </Box>
      </Modal>
    </div>
  );
}
