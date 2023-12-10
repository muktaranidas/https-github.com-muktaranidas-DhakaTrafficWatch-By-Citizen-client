import React, { useEffect, useState } from "react";
import ComplainCard from "../../complain/ComplainCard";
import ActionModal from "../../Products/BookingModal/BookingModal";

const ActionComplains = () => {
  const [complains, setComplains] = useState([]);
  const [complainId, setComplainId] = useState("");
  const [openModal, setOpenModal] = useState(null);
  const base_url = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
  useEffect(() => {
    fetch(`${base_url}/complains/action`)
      .then((res) => res.json())
      .then((data) => setComplains(data.data))
      .catch((error) => console.error(error.message));
  }, [base_url, complains]);
  return (
    <div className="container py-20 border-b">
      <h1 className="text-4xl font-semibold text-center mb-10 border-b pb-1">
        Complain List
      </h1>
      {complains.length === 0 ? (
        <h1 className="text-center">No Data</h1>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
          {complains.map((complain) => (
            <ComplainCard
              openModal={setOpenModal}
              setComplainId={setComplainId}
              key={complain._id}
              data={complain}
            />
          ))}
          {openModal && (
            <ActionModal id={complainId} setOpenModal={setOpenModal} />
          )}
        </div>
      )}
    </div>
  );
};

export default ActionComplains;
