import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ActionModal = ({ setOpenModal, id }) => {
  const [complain, setComplain] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const base_url = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${base_url}/complains/${id}`)
      .then((res) => res.json())
      .then((data) => setComplain(data));
  }, [base_url, id]);

  const handleAction = (data) => {
    fetch(`${base_url}/complains/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.data.acknowledged) {
          setOpenModal(null);
          toast.success("Action is On going");
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="action-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-[800px] relative">
          <div className="absolute top-5 right-5 z-10">
            <label
              htmlFor="action-modal"
              className="btn btn-circle btn-outline mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>
          <div className="card card-side">
            <figure className="">
              <img
                src={complain?.data?.photo_url}
                alt={complain?.data?.location}
                className="h-full object-fill"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">User Name: {complain?.data?.name}</h2>
              <h2 className="card-title">
                Contact Number: {complain?.data?.contact_no}
              </h2>
              <h2 className="card-title">
                Location: {complain?.data?.location}
              </h2>
              <p>{complain?.data?.description}</p>
              <form className="mt-3" onSubmit={handleSubmit(handleAction)}>
                <label htmlFor="action">
                  Which Action Do you want to on This Attempt
                </label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="write your action"
                  id="action"
                  {...register("action", {
                    required: "Action field is required!",
                  })}
                ></textarea>
                {errors.action && (
                  <span className="text-red-500">{errors.action.message}</span>
                )}
                <div className="card-actions justify-end mt-4">
                  <button type="submit" className="btn btn-primary">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionModal;
