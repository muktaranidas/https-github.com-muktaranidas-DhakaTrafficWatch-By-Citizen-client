import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const base_url = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

  
  const handleAddProduct = (data) => {
    console.log(data);
    data['status'] = true
    // save complain info to the database
    fetch(`${base_url}/add-complain`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`Your Compalain is Posted Successfully`);
        navigate("/");
      })
      .catch(error=> console.error(error))
  };

  return (
    <div className="w-1/2 mx-auto px-10 bg-white my-10 py-4 rounded">
      <h2 className="text-4xl text-center mb-4">Add Your Valueable Complain</h2>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="border my-2 px-10 mx-auto"
      >
        <div className="my-2 flex gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="name"
              className="input input-bordered w-full "
            />
            {errors.name && (
              <p className="text-red-600"> {errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              {...register("photo_url", { required: "photo url is required" })}
              type="text"
              placeholder="photo url"
              className="input input-bordered w-full "
            />
            {errors.photo_url && (
              <p className="text-red-600"> {errors.photo_url.message}</p>
            )}
          </div>
        </div>
        <div className="my-2 flex gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Contact Number</span>
            </label>
            <input
              {...register("contact_no", {
                required: "contact number is required",
              })}
              type="text"
              placeholder="contact number"
              className="input input-bordered w-full "
            />
            {errors.contact_no && (
              <p className="text-red-600"> {errors.contact_no.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              {...register("location", { required: "Location is required" })}
              type="text"
              placeholder="location"
              className="input input-bordered w-full "
            />
            {errors.location && (
              <p className="text-red-600"> {errors.location.message}</p>
            )}
          </div>
        </div>
        {/* Description */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="description"
            rows={3}
            className="textarea textarea-bordered"
          />
          {errors.description && (
            <p className="text-red-600"> {errors.description.message}</p>
          )}
        </div>

        {/* button */}
        <input
          className="btn btn-accent my-4 text-slate-900 hover:text-white "
          value="Add Complain"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
