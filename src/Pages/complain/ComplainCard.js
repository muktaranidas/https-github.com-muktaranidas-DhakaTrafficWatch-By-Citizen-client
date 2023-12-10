import React, { useContext } from "react";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../contexts/AuthProvider";

const ComplainCard = ({ data, openModal, setComplainId }) => {
  const { name, photo_url, contact_no, location, description, _id, action } = data;
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const handleAction = (id) => {
    openModal(true);
    setComplainId(id);
  };
  return (
    <div className="card bg-base-100 shadow">
      <figure>
        <img src={photo_url} alt={location} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p className="font-semibold">Location: {location}</p>
        <p className="font-semibold">Number: {contact_no}</p>
        <p>
          {description.length > 150 ? description.slice(0, 50) : description}
        </p>
        <p>
          {action}
        </p>
        {isAdmin && (
          <div className="card-actions justify-end">
            <label
              htmlFor="action-modal"
              onClick={() => handleAction(_id)}
              className="btn btn-primary"
            >
              Action
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplainCard;
