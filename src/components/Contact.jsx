import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-[#97A275] text-[#FFD5BA] flex justify-center items-center p-4"
    >
      <form
        method="post"
        action="https://getform.io/f/86f7f373-8484-4b3d-a401-170ae8c39332"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#F2711B] text-[#FFD5BA]">
            Contact
          </p>
          <p className="text-2xl font-bold py-4 text-[#FFD5BA]">
            {" "}
            // Submit below! Or Email me @ dlrethan10@gmail.com{" "}
          </p>
        </div>
        <input
          className="my-4 p-2 bg-slate-300 text-black"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-slate-300 text-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-slate-300 p-2 text-black"
          name="message"
          rows="10"
          placeholder="Insert Your Message Here!"
        ></textarea>
        <button className="text-2xl border-2 hover:bg-[#F2711B] hover:border-[#F2711B] p-3 my-6 mx-auto flex items-center">
          Let's Get To Work
        </button>
      </form>
    </div>
  );
};

export default Contact;
