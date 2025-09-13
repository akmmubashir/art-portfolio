"use client";
import React, { useState } from "react";

const ContactForm = ({ closePopup }: { closePopup?: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = { name: "", email: "", message: "" };
    let hasError = false;

    if (!name.trim()) {
      formErrors.name = "Name is required";
      hasError = true;
    }
    if (!email.trim()) {
      formErrors.email = "E-Mail is required";
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formErrors.email = "Enter a valid E-Mail";
      hasError = true;
    }
    if (!message.trim()) {
      formErrors.message = "Message is required";
      hasError = true;
    }

    setErrors(formErrors);

    if (!hasError) {
      console.log("Form submitted:", { name, email, message });
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setErrors({ name: "", email: "", message: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Name"
          className="bg-[#F7F7F7] text-[#5D5D5D] p-[20px_30px] max-md:p-[15px_15px] w-full placeholder:text-[18px] max-md:placeholder:text-[16px] text-[20px] max-md:text-[16px] font-medium focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p className="h-[30px] flex items-center text-red-400 text-[16px] max-md:text-[14px]">
          {errors.name ? errors.name : null}
        </p>
      </div>

      <div className="flex flex-col">
        <input
          type="text"
          placeholder="E-Mail"
          className="bg-[#F7F7F7] text-[#5D5D5D] p-[20px_30px] max-md:p-[15px_15px] w-full placeholder:text-[18px] max-md:placeholder:text-[16px] text-[20px] max-md:text-[16px] font-medium focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="h-[30px] flex items-center text-red-400 text-[16px] max-md:text-[14px]">
          {errors.email ? errors.email : null}
        </p>
      </div>

      <div className="flex flex-col">
        <textarea
          placeholder="Type your message here"
          rows={5}
          className="bg-[#F7F7F7] text-[#5D5D5D] p-[20px_30px] max-md:p-[15px_15px] w-full placeholder:text-[18px] max-md:placeholder:text-[16px] text-[20px] max-md:text-[16px] font-medium focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <p className="h-[30px] flex items-center text-red-400 text-[16px] max-md:text-[14px]">
          {errors.message ? errors.message : null}
        </p>
      </div>
      <div className={`flex gap-[20px] mt-[10px]`}>
        <button
          type="submit"
          className="font-medium w-fit text-[18px] max-md:text-[16px] cursor-pointer p-[10px_40px] max-md:p-[10px_30px] bg-black dark:bg-white hover:bg-[#353535] dark:hover:bg-black text-white dark:text-black hover:text-white dark:hover:text-white"
        >
          Submit
        </button>

        {closePopup ? (
          <button
            onClick={closePopup}
            className="font-medium w-fit text-[18px] max-md:text-[16px] cursor-pointer p-[10px_40px] max-md:p-[10px_30px] bg-[#F7F7F7] dark:bg-[#383838] hover:bg-[#353535] dark:hover:bg-black text-black dark:text-white hover:text-white dark:hover:text-white"
          >
            Close
          </button>
        ) : null}
      </div>
    </form>
  );
};

export default ContactForm;
