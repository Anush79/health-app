import { useState } from "react";
import { physiotherapyReviews } from "../data";
import Testimonial from "./TestimonialBox";
function Feature() {
  const [testimonial, setTestinmonials] = useState(
    physiotherapyReviews.slice(0, 4)
  );
  const onclickHandler = () => {
    if (testimonial.length > 4) {
      setTestinmonials(physiotherapyReviews.slice(0, 4));
    } else {
      setTestinmonials(physiotherapyReviews);
    }
  };
  return (
    <div id="features">
      <h1>TESTIMONIALS</h1>
      <div className="a-container">
        {testimonial.map((item) => (
          <Testimonial reviewData={item} />
        ))}
      </div>
      <button onClick={onclickHandler}>
        SHOW {testimonial.length > 4 ? "LESS" : "MORE"}
      </button>
    </div>
  );
}

export default Feature;
