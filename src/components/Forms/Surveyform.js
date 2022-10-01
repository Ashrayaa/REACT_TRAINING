import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Surveyform = () => {
  const { register, handleSubmit, errors } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };
  console.log(errors);

  // const [name, setName] = useState();
  // const [designation, setDesignation] = useState();
  // const [phone, setPhone] = useState();
  // const [email, setEmail] = useState();
  // const [address, setAddress] = useState();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: name,
  //       designation: designation,
  //       phone: phone,
  //       email: email,
  //       address: address,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // };

  return (
    <div className="p-8 w-full h-screen flex flex-column justify-center bg-gradient-to-t from-purple-500 via-pink-300 to-cyan-200">
      <div className="flex flex-col bg-white w-12/12 h-5/6 shadow-2xl rounded-3xl mt-14 justify-center">
        <div className=" flex flex-col gap-2 justify-center items-center sm:flex-shrink-0">
          <div className="p-8">
            <h1 className="text-2xl font-bold">Employee Satisfaction Survey</h1>
          </div>

          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 justify-center align-middle px-44 mb-2"
            >
              <div className="flex flex-row w-full gap-1">
                <label className=" text-lg font-semibold">Name </label>
                <input
                  type="text"
                  name="name"
                  className="border-2 border-rose-600 shadow-xl p-4 h-12 w-64 mx-2 rounded-xl"
                  //value={name}
                  placeholder="Name"
                 // ref={register({ required: "Your name is mandatory" })}
                  // onChange={(event) => setName(event.target.value)}
                />
                {/* <p>{errors.name.message}</p> */}
                <label className=" text-lg font-semibold">Designation </label>
                <input
                  type="text"
                  name="designation"
                  className="border-2 border-rose-600 shadow-xl p-4 h-12 w-64 mx-2 rounded-xl"
                 // value={designation}
                  placeholder="Designation"
                  {...register('Your designation is required', { required: false })}
                  //onChange={(event) => setDesignation(event.target.value)}
                />
                {/* <p>{errors.designation?.message}</p> */}
              </div>

              <div className="flex flex-row gap-4">
                <label className="text-lg font-semibold">DOB </label>
                <input
                  type="date"
                  className="border-rose-600 shadow-xl rounded-xl w-72 h-12 mx-2 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-rose-600 focus:outline-none"
                />
                <label className=" text-lg font-semibold">Gender</label>
                <select
                  className="form-select appearance-none
                        px-3
                        py-1.5
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-rose-600
                        rounded-xl
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-rose-600 focus:outline-none"
                  name="gender"
                >
                  <option value="choose"> Choose gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="notspecify">Rather not to specify</option>
                </select>
              </div>

              <div className="flex flex-row w-1/2">
                <label className=" text-lg font-semibold">Address </label>
                <textarea
                  className="border-2 w-96 h-32 p-4 border-rose-600 shadow-xl mx-2 rounded-xl"
                  name="address"
                  rows="2"
                  cols="32"
                  //value={address}
                  placeholder="Type your address here"
                  //ref={register({ required: "Please fill the address field" })}
                  //onChange={(event) => setAddress(event.target.value)}
                ></textarea>
              </div>

              <div className="flex flex-row h-12 gap-2">
                <label className=" text-lg font-semibold">Phone number</label>
                <input
                  className="border-2 border-rose-600 shadow-xl px-4 mx-2 rounded-xl"
                  name="phone"
                  type="text"
                  //value={phone}
                  placeholder="Phone number"
                  //ref={register({ required: "Phone number is required" })}
                  //onChange={(event) => setPhone(event.target.value)}
                />
                <label className=" text-lg font-semibold">Email</label>
                <input
                  className="border-2 border-rose-600 px-4 shadow-xl mx-2 rounded-xl"
                  name="email"
                  type="email"
                  //value={email}
                  placeholder="Email"
                  //ref={register({ required: "Email is required" })}
                  //onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="flex gap-8">
                <p className=" text-lg font-semibold">
                  How do you describe your overall level of job satisfaction?
                </p>
                <div className="flex flex-row gap-4">
                  <input
                    type="radio"
                    id="satisfied"
                    name="satisfaction"
                    value="satisfied"
                  />
                  <label className=" text-lg font-semibold">Satisfied</label>
                  <input
                    type="radio"
                    id="neutral"
                    name="satisfaction"
                    value="neutral"
                  />
                  <label className=" text-lg font-semibold">Neutral</label>
                  <input
                    type="radio"
                    id="disatisfied"
                    name="satisfaction"
                    value="disatisfied"
                  />
                  <label className=" text-lg font-semibold">Dissatisfied</label>
                </div>
              </div>
              <button
                className="w-32 ml-96 h-12 bg-orange-600 rounded-full shadow-2xl text-white font-semibold hover:bg-lime-700 hover:text-black"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
