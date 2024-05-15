import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("time", time);
    formData.append("status", status);
    formData.append("image", image);

    const response = await fetch("http://localhost:4000/api/hawa/AddFood", {
      method: "POST",
      body: formData,
    });

    const json = await response.json();
    if (!response.ok) {
      const { errors } = json;
      setError(errors.join(","));
    } else {
      setName("");
      setDescription("");
      setPrice("");
      setTime("");
      setStatus("");
      navigate("/");
    }
  };
  return (
    <>
      <div className="container">
        <h1>Add Food</h1>
        <form onSubmit={handleSubmit} style={{ width: "60%" }}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Name"
              id="name"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Description
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Description"
              id="description"
              name="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Price
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Price"
              id="price"
              name="price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              value={price}
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Estimated Time
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Estimated Time"
              id="estimated-time"
              name="estimated-time"
              onChange={(e) => {
                setTime(e.target.value);
              }}
              value={time}
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Status
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Status"
              id="status"
              name="status"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              value={status}
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Add Image
            </label>
            <input
              type="file"
              class="form-control"
              id="file"
              name="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary my-2">
            Add Food
          </button>
        </form>

        {error && <div className="text-danger">{error}</div>}
      </div>
    </>
  );
};

export default AddFood;
