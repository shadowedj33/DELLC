import React, { useRef, useState } from "react";
import Section from "./Section";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import Button from "./Button";
import Heading from "./Heading";
import PhoneInput from "react-phone-number-input/input";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_dou1pih",
        "template_fntnwjl",
        {
          from_name: form.name,
          to_name: "Digital Endeavors",
          from_email: form.email,
          to_email: "jdefoggia@gmail.com",
          number: form.number,
          message: form.message,
        },
        "N_MUzIcxz_MkCr7m5"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for your interest. I will get back to you as soon as possible!"
          );

          setForm({
            name: "",
            email: "",
            number: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Uh oh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <Section
      className={`xl:mt-5 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      id="contact"
    >
      <div className="container">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-n-7 p-8 rounded-2xl"
        >
          <Heading tag="Ready to Stand Out?" title="Contact Today" />

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="bg-n-4 py-4 px-6 placeholder:text-secondary text-n-8 rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="bg-n-4 py-4 px-6 placeholder:text-secondary text-n-8 rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Phone Number
              </span>
              <PhoneInput
                name="number"
                defaultCountry="US"
                value={form.number}
                onChange={(value) => setForm({ ...form, number: value })}
                country="US"
                placeholder="Phone Number"
                className="bg-n-4 py-4 px-6 placeholder:text-secondary text-n-8 rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Subject</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Please describe what services you are interested in."
                className="bg-n-4 py-4 px-6 placeholder:text-secondary text-n-8 rounded-lg outline-none border-none font-medium"
              />
            </label>

            <Button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </Button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        ></motion.div>
      </div>
    </Section>
  );
};

export default Contact;
