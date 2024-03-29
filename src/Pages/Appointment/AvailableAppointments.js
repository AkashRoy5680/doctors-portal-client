import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  //const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["sky", formattedDate], () =>
    fetch(
      `https://doctors-portal-server-afgw.onrender.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  /*useEffect(() => {
    fetch(`https://doctors-portal-server-afgw.onrender.com/available?date=${formattedDate}`)
   //fetch("https://doctors-portal-server-afgw.onrender.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);*/

  return (
    <div>
      <p class="text-xl text-secondary text-center my-12">
        Available Appointment on {format(date, "PP")}
      </p>

      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
