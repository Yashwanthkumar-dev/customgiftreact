import React from "react";

const Question = () => {
  return (
    <div className="mt-10 mb-15 capitalize ">
      <div className=" bg-rose-100 items-center text-center text-xl  w-fit mx-auto px-20 py-6">
        <h2>Did you find what you were looking for?</h2>
        <div className="mt-8">
          <button className="mr-8 capitalize border border-neutral-300 outline-none px-12 bg-white py-0.5 hover:cursor-pointer ">yes</button>
          <button className=" capitalize border px-9 bg-rose-600 text-white py-0.5 outline-none hover:bg-rose-700 hover:cursor-pointer" >no</button>
        </div>
      </div>
    </div>
  );
};

export default Question;
