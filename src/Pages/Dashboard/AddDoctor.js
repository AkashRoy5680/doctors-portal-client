import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {register,formState: { errors },handleSubmit,reset} = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  const imageStorageKey=`d763bce467f9bd0b5f920d60fb4e62b6`;

  const onSubmit = async (data) => {
    console.log("data", data);
    //send image data to imagebb
    const image=data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url=`https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url,{
        method:"POST",
        body:formData
    })
    .then(res=>res.json())
    .then(result=>{
        console.log("imgbb",result)
        if(result.success){
            const img=result.data.url;
            const doctor={
                name:data.name,
                email:data.email,
                speciality:data.speciality,
                img:img
            }
        //send to my database
        fetch("http://localhost:5000/doctor",{
            method:"POST",
            headers:{
                "content-type":"application/json",
                authorization:`Bearer ${localStorage.getItem("accessToken")}`
            },
            body:JSON.stringify(doctor)
        })
        .then(res=>res.json())
        .then(inserted=>{
            console.log("doctor",inserted);
        if(inserted.insertedId){
            toast.success("Doctors added Successfully");
            reset();
        }
        else{
            toast.error("Failed to add the doctor")
        }

        })
      }           
    });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl">Add a new Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            class="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            class="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "provide a valid email",
              },
            })}
          />
          <label class="label">
            {errors.email?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span class="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Speciality</span>
          </label>
          <select {...register("speciality")} class="select w-full max-w-xs input-bordered">
              {
                  services.map(service=><option
                  key={service._id}
                  value={service.name}
                  >{service.name}</option>)
              }
          </select>
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Photo</span>
          </label>
          <input
            type="file"
            class="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs text-white mb-2"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
