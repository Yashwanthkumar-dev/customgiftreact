import React from "react";

const Policy = (props) => {
  return (
    <div className="inline-flex">
    <div className="mt-6 w-70  py-0 px-8">
      <h4 className="capitalize font-bold font-poppins mt-4 text-xl">
        {props.ourcompany}
      </h4>
      <p className="text-neutral-500 capitalize font-poppins mt-1">
        {props.aboutus}
      </p>
      <p className="text-neutral-500 capitalize font-poppins mt-1">
        {props.careers}
      </p>
      <p className="text-neutral-500 capitalize font-poppins mt-1">
        {props.affliate}
      </p>
      <p className="text-neutral-500 capitalize font-poppins mt-1">
        {props.news}
      </p>
    </div>
    </div>
  );
};

export default Policy;
