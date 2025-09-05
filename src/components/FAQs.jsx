// src/components/FAQs.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What is the Campus Ambassador Program?",
    answer:
      "The Campus Ambassador Program is a student-led initiative where chosen ambassadors champion our brand, coordinate events, and gather feedback from their campuses.",
  },
  {
    question: "Who can apply for the Campus Ambassador Program?",
    answer: "Current university or college students with strong communication skills and a genuine enthusiasm for Shaurya are encouraged to apply.",
  },
  {
    question: "How do I apply for the program?",
    answer: "You can apply by registering on our website. The application process requires just submitting your details.",
  },
  {
    question: "How many campus ambassadors are chosen from each campus?",
    answer: "The number of campus ambassadors selected will vary based on the volume of applications received.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    question: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const onlyDigits = value.replace(/\D/g, '');
      setForm({ ...form, [name]: onlyDigits });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.match(/^\d{10}$/)) newErrors.phone = "Phone number must be 10 digits.";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid Gmail address.";
    }
    if (!form.question.trim()) newErrors.question = "Please enter your question.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    try {
      // 🔥 SEND TO BACKEND
      const res = await fetch('https://ca-backend-2025-0v6s.onrender.com/api/faq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error('Failed to submit');
      }

      setErrors({});
      setSubmitted(true);
      setForm({ name: '', phone: '', email: '', question: '' });
    } catch (err) {
      if(err)
      setSubmitted(false);
      alert('There was an error sending your question. Please try again.');
    }
  };

  return (
    <div id="faq" className="min-h-screen px-4 py-20 font-['Poppins'] text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-4xl font-bungee mb-10 text-transparent bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text">
          Frequently Asked Questions
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="bg-black/40 border-2 border-yellow-400 rounded-2xl shadow-xl p-6 text-left transition-all duration-300"
            >
              <button className="w-full text-left flex justify-between items-center text-lg font-bold font-['Ubuntu'] text-yellow-300" onClick={() => toggle(index)}>
                {faq.question}
                <span className="ml-2 text-yellow-500">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-[400px] mt-4' : 'max-h-0'}`}>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="w-full max-w-2xl mt-20 bg-black/40 border-2 border-yellow-400 rounded-3xl shadow-xl p-8">
        <h3 className="text-3xl font-bold text-yellow-300 mb-6 text-center">Have a Question? Ask Us</h3>
        {submitted && <p className="text-green-400 text-center mb-4">Your question has been submitted!</p>}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-yellow-200 mb-1">Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full px-4 py-2 bg-black/60 border border-yellow-500 rounded-lg text-white focus:outline-none" />
            {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-yellow-200 mb-1">Phone Number</label>
            <input type="text" name="phone" value={form.phone} onChange={handleChange} maxLength={10} className="w-full px-4 py-2 bg-black/60 border border-yellow-500 rounded-lg text-white focus:outline-none" />
            {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-yellow-200 mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-2 bg-black/60 border border-yellow-500 rounded-lg text-white focus:outline-none" />
            {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-yellow-200 mb-1">Your Question</label>
            <textarea name="question" value={form.question} onChange={handleChange} rows={4} className="w-full px-4 py-2 bg-black/60 border border-yellow-500 rounded-lg text-white focus:outline-none" />
            {errors.question && <p className="text-red-400 text-sm">{errors.question}</p>}
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-red-500 text-white font-semibold py-2 px-4 rounded-xl hover:scale-105 transition-transform duration-200">
            Submit Question
          </button>
        </form>
      </div>
    </div>
  );
};

export default FAQ;
