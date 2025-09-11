import React from "react";
import Container from "../../../Shared/Container";
import photo from "../../../assets/c3.jpg";

const Contact = () => {
  const handleSubmit = () => {};
  return (
    <div className="my-20">
      <Container>
        <div className="md:grid md:grid-cols-2 bg-zinc-700/25 mx-4 md:mx-auto rounded-xl relative overflow-hidden">
          {/* Image with overlay wrapper */}
          <div className="relative">
            <img
              src={photo}
              alt="Computer"
              className="hidden md:block w-full max-h-[600px] object-cover rounded-xl rounded-tr-none rounded-br-none"
            />
          </div>

          {/* Contact Form Section */}
          <div className="relative flex items-center justify-center">
            <div className="max-md:py-20 px-6 md:px-10 w-full text-center">
              <h1 className="text-3xl font-bold">Contact With Me!</h1>
              <p className="mt-4 text-gray-500">
                Have any questions? Fill out the form below and we’ll get back
                to you soon.
              </p>

              <form
                className="mt-8 space-y-4 text-left"
                onSubmit={handleSubmit}
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#e1c3dc]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="mt-1 w-full rounded-md border border-gray-300 p-3 outline-none focus:border-[#d53bbc] focus:ring-1 focus:ring-[#d53bbc]"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#e1c3dc]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="mt-1 w-full rounded-md border border-gray-300 p-3 outline-none focus:border-[#d53bbc] focus:ring-1 focus:ring-[#d53bbc]"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#e1c3dc]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Write your message..."
                    className="mt-1 w-full rounded-md border border-gray-300 p-3 outline-none focus:border-[#d53bbc] focus:ring-1 focus:ring-[#d53bbc]"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#ab499a] px-6 py-3 text-white font-medium hover:bg-[#d53bbc] transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
