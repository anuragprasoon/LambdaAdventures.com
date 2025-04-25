import React, { useState } from "react";


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    alert("Thank You! Your Message has been sent");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col relative min-h-[990px] w-full font-normal pl-[171px] pr-[174px] pt-[155px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/006d6a7265cc890178b3902058264117bcfe1f7d"
        alt="Contact Background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-full max-w-[1095px] flex-col items-center mx-auto max-md:max-w-full">
        <h2 className="text-[rgba(225,148,15,1)] text-4xl leading-loose text-center max-md:max-w-full max-md:text-[28px]">
          <span className="font-['Montserrat'] font-extrabold italic text-white">
            Lets Get in
          </span>{" "}
          <span className="font-['Montserrat'] font-extrabold italic text-[rgba(139,207,57,1)]">
            Touch
          </span>
        </h2>
        <div className="flex min-h-[495px] w-full items-center text-[14px] text-white tracking-[0.32px] leading-none justify-center flex-wrap mt-[18px] max-md:max-w-full">
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-md bg-[rgba(255,255,255,0.1)] border self-stretch min-w-60 w-[421px] my-auto p-5 rounded-[10px] border-[rgba(255,255,255,0.24)] border-solid"
          >
            <div className="flex w-full gap-2 whitespace-nowrap flex-wrap rounded-[10px]">
              <div className="border flex min-w-60 min-h-14 w-full items-center gap-0.5 flex-1 shrink basis-[0%] px-3 py-[18px] rounded-lg border-[rgba(255,255,255,0.6)] border-solid">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="self-stretch my-auto w-full bg-transparent outline-none placeholder-white"
                  required
                />
              </div>
            </div>
            <div className="flex w-full gap-2 flex-wrap mt-4 rounded-[10px]">
              <div className="border flex min-w-60 min-h-14 w-full items-center gap-0.5 flex-1 shrink basis-[0%] px-3 py-[18px] rounded-lg border-[rgba(255,255,255,0.6)] border-solid">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone No."
                  className="self-stretch my-auto w-full bg-transparent outline-none placeholder-white"
                  required
                />
              </div>
            </div>
            <div className="flex w-full gap-2 whitespace-nowrap flex-wrap mt-4 rounded-[10px]">
              <div className="border flex min-w-60 min-h-14 w-full items-center gap-0.5 flex-1 shrink basis-[0%] px-3 py-[18px] rounded-lg border-[rgba(255,255,255,0.6)] border-solid">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-Mail"
                  className="self-stretch my-auto w-full bg-transparent outline-none placeholder-white"
                  required
                />
              </div>
            </div>
            <div className="flex min-h-[147px] w-full gap-2 whitespace-nowrap flex-wrap mt-4 rounded-[10px]">
              <div className="border flex min-w-60 min-h-[147px] w-full gap-0.5 flex-1 shrink basis-[0%] px-3 py-2.5 rounded-lg border-[rgba(255,255,255,0.6)] border-solid">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="min-h-[130px] w-full bg-transparent outline-none resize-none placeholder-white"
                  required
                ></textarea>
              </div>
            </div>
            <div className="w-full text-[19px] font-semibold tracking-[0.38px] mt-4">
              <button
                type="submit"
                className="bg-[rgba(1,124,109,1)] border flex min-h-14 w-full items-center gap-0.5 justify-center px-3 py-4 rounded-lg border-[rgba(221,221,221,0)] border-solid hover:bg-[rgba(1,104,89,1)] transition-colors"
              >
                <span className="text-[16px] self-stretch my-auto">Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
