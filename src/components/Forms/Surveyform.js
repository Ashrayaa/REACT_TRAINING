import React, { useState } from "react";

export const Surveyform = () => {
  return (
    <div class="p-8 w-full h-screen flex flex-column justify-center bg-gradient-to-t from-purple-500 via-pink-300 to-cyan-200">
      <div class="flex flex-col bg-white w-12/12 h-5/6 shadow-2xl rounded-3xl mt-14 justify-center">
        <div class=" flex flex-col gap-2 justify-center items-center sm:flex-shrink-0">
          <div class="p-8">
            <h1 className="text-2xl font-bold">Employee Satisfaction Survey</h1>
          </div>

          <div>
            <form class="flex flex-col gap-6 justify-center align-middle px-44 mb-2">
              <div class="flex flex-row w-full gap-1">
                <label class=" text-lg font-semibold">Name </label>
                <input
                  type="text"
                  class="border-2 border-rose-600 shadow-xl p-4 h-12 w-64 mx-2 rounded-xl"
                />
                <label class=" text-lg font-semibold">Designation </label>
                <input
                  type="text"
                  class="border-2 border-rose-600 shadow-xl p-4 h-12 w-64 mx-2 rounded-xl"
                />
              </div>

              <div class="flex flex-row gap-4">
                <label class="text-lg font-semibold">DOB </label>
                <input
                  type="date"
                  class="border-rose-600 shadow-xl rounded-xl w-72 h-12 mx-2 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-rose-600 focus:outline-none"
                />
                <label class=" text-lg font-semibold">Gender</label>
                <select
                  class="form-select appearance-none
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
                  <option selected> Choose gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="notspecify">Rather not to specify</option>
                </select>
              </div>

              <div class="flex flex-row w-1/2">
                <label class=" text-lg font-semibold">Address </label>
                <textarea
                  class="border-2 w-96 h-32 p-4 border-rose-600 shadow-xl mx-2 rounded-xl"
                  rows="2"
                  cols="32"
                ></textarea>
              </div>

              <div class="flex flex-row h-12 gap-2">
                <label class=" text-lg font-semibold">Phone number</label>
                <input
                  class="border-2 border-rose-600 shadow-xl px-4 mx-2 rounded-xl"
                  type="text"
                />
                <label class=" text-lg font-semibold">Email</label>
                <input
                  class="border-2 border-rose-600 px-4 shadow-xl mx-2 rounded-xl"
                  type="email"
                />
              </div>

              <div class="flex gap-8">
                <p class=" text-lg font-semibold">
                  How do you describe your overall level of job satisfaction?
                </p>
                <div class="flex flex-row gap-4">
                  <input
                    type="radio"
                    id="satisfied"
                    name="satisfaction"
                    value="satisfied"
                  />
                  <label for="satisfied" class=" text-lg font-semibold">
                    Satisfied
                  </label>
                  <input
                    type="radio"
                    id="neutral"
                    name="satisfaction"
                    value="neutral"
                  />
                  <label for="neutral" class=" text-lg font-semibold">
                    Neutral
                  </label>
                  <input
                    type="radio"
                    id="disatisfied"
                    name="satisfaction"
                    value="disatisfied"
                    
                  />
                  <label for="disatisfied" class=" text-lg font-semibold">
                    Dissatisfied
                  </label>
                </div>
              </div>
            </form>
          </div>

          <button
            className="w-32 h-12 bg-orange-600 rounded-full shadow-2xl text-white font-semibold hover:bg-lime-700 hover:text-black"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
