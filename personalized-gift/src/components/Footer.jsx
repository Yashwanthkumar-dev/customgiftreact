import React from "react";

const Footer = (props) => {
  return (
    <div className="inline-flex mb-10">
      <div className="mx-9 p-7 hover:cursor-pointer">
        <div>
          <img src={props.companyLogo} alt="" className="w-[200px]" />
        </div>
            <div className=" mt-10 border-r w-70  py-0 px-8">
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
    </div>
  );
};

export default Footer;
