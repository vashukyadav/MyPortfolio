import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import emailjs from '@emailjs/browser';

import { fadeIn } from "../../variants";
import TopLeftImg from "../../components/TopLeftImg";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Get form data
    const formData = new FormData(event.target);
    const data = {
      from_name: formData.get('from_name'),
      from_email: formData.get('from_email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    // Send to vashuuyadav08@gmail.com using EmailJS
    emailjs.send(
      'service_7q0xx3n',
      'template_contact',
      {
        to_email: 'vashuuyadav08@gmail.com',
        from_name: data.from_name,
        from_email: data.from_email,
        subject: data.subject,
        message: data.message
      },
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      alert("Message sent to vashuuyadav08@gmail.com successfully!");
      event.target.reset();
    })
    .catch(() => {
      alert("Failed to send message. Please try again.");
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="min-h-screen bg-primary/30 flex items-center justify-center py-16 sm:py-20 lg:py-0">
      <TopLeftImg src="/avatar.png" alt="contact page decoration" />
      <div className="container mx-auto text-center xl:text-left px-4 sm:px-6 lg:px-8">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px] mx-auto">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-8 sm:mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-4 sm:gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
          >
            {/* input group */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-6 w-full">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                className="input flex-1"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="from_email"
                placeholder="E-mail"
                className="input flex-1"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-6 sm:px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto xl:mx-0 text-sm sm:text-base"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-lg sm:text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
