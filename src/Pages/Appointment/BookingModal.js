import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const BookingModal = ({ treatment, date,setTreatment }) => {
  const { _id,name, slots } = treatment;
const [user, loading, error] = useAuthState(auth);  

  const handleBooking=(event)=>{
    event.preventDefault();
    const slot=event.target.slot.value;
    console.log(slot);
    setTreatment(null)
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal"class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            htmlFor="booking-modal"
           class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary">Booking for: {name}</h3>
          <form onSubmit={handleBooking} class="grid sm:grid-cols-1 gap-3 justify-items-center mt-2">
            <input
              type="text"
              value={format(date, "PP")}
              readOnly
             class="input input-bordered w-full max-w-xs"
            />
            <select name="slot"class="select select-bordered w-full max-w-xs">
            {
                  slots.map((slot,index)=><option 
                    key={index}
                    value={slot}
                    >{slot}
                    </option>)
            }
            </select>
            <input
             type="text"
             disabled
             value={user?.displayName || ""}
             class="input input-bordered w-full max-w-xs"
            />
            <input
             type="email"
             disabled
             value={user?.email || ""}
             class="input input-bordered w-full max-w-xs"
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
             class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
             class="btn btn-secondary w-full max-w-xs"
            />
          </form>
          <div class="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
