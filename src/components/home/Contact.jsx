import React from "react";
import Heading from "../common/Heading";
import { faEnvelope, faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="m-5 sm:m-10 " id="Contact">
        <Heading Heading={"CONTACT  US"} />
        <div className="bg-gray flex flex-col sm:flex-row m-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13604.684532050062!2d74.3514281!3d31.5194594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905edd849289f%3A0xa0a0ca3b4a89cae6!2sCherry%20Byte%20Technologies!5e0!3m2!1sen!2s!4v1707888795213!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: "0" }}
            className="sm:w-1/2"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex flex-col justify-center items-center sm:w-1/2 p-5">
            <h2 className="text-white text-4xl font-bold mb-5">GET IN TOUCH</h2>
            <form className="w-full px-4 flex flex-col gap-5 overflow-hidden ">
              <div className="flex items-center gap-4 bg-gray border-solid border-2 border-yellow-500 hover:border-yellow-500 focus:border-yellow-500 w-full px-2 py-2 sm:py-4  overflow-hidden">
                <FontAwesomeIcon
                  icon={faUser}
                  className=" text-white ml-4 size-6"
                />
                <input
                  type="text"
                  placeholder="Name"
                  className="text-white bg-gray outline-none flex-1"
                />
              </div>
              <div className="flex items-center gap-4 bg-gray border-solid border-2 border-yellow-500 hover:border-yellow-500 focus:border-yellow-500 w-full px-2 py-2 sm:py-4  overflow-hidden">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white ml-4 size-6"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="text-white bg-gray border-none outline-none flex-1"
                />
              </div>
              <div className="flex items-center gap-4 bg-gray border-solid border-2 border-yellow-500 hover:border-yellow-500 focus:border-yellow-500 w-full px-2 py-2 sm:py-4  overflow-hidden">
                <FontAwesomeIcon
                  icon={faPhone}
                  className=" text-white ml-4 size-6"
                />
                <input
                  type="number"
                  placeholder="Number"
                  className="text-white bg-gray outline-none flex-1"
                />
              </div>
            </form>
            <button className="justify-center text-center text-white bg-yellow-500 p-2 px-6 hover:bg-amber-400 duration-200 mt-4">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
