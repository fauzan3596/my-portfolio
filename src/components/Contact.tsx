"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeam";
import { globeConfig, sampleArcs } from "@/data/globeConfig";
import useAlert from "@/hooks/useAlert";
import Alert from "./Alert";

const World = dynamic(() => import("./ui/Globe").then((m) => m.World), {
  ssr: false,
});

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID || "default_service_id";
const TEMPLATE_ID =
  process.env.NEXT_PUBLIC_TEMPLATE_ID || "default_template_id";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY || "default_public_key";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Fauzan Ramadhan",
          from_email: formData.email,
          to_email: "fauzan3596@gmail.com",
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="pt-20 relative" id="contact">
      {alert.show && <Alert {...alert} />}

      <BackgroundBeamsWithCollision>
        <div className="flex lg:flex-row flex-col-reverse gap-7 w-full items-center pb-20">
          <div className="bg-black-200 p-8 rounded-2xl lg:flex-[0.5] w-full">
            <p className="sm:text-base text-sm text-secondary uppercase tracking-wider mt-8">
              Get in touch
            </p>
            <h3 className="text-white font-semibold sm:text-4xl text-3xl">
              Contact.
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-5"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="ex., John Doe"
                  className="bg-black-300 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ex., johndoe@gmail.com"
                  className="bg-black-300 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Share your thoughts or inquiries..."
                  className="bg-black-300 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>

              <button
                type="submit"
                className="bg-black-300 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
          <div className="lg:h-[30rem] h-full lg:flex-[0.5] w-fit">
            <MemoizedWorld data={sampleArcs} globeConfig={globeConfig} />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

const MemoizedWorld = React.memo(World);

export default Contact;
