import React, { useState } from 'react';
import { motion } from 'framer-motion';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const faqs = [
  {
    question: "WHO IS ELIGIBLE TO APPLY FOR SHAURYA CAMPUS AMBASSADOR?",
    answer: "Any active undergraduate, postgraduate, or diploma student enrolled in a recognized university or college across India is eligible to apply for the Campus Ambassador role.",
  },
  {
    question: "IS THERE ANY REGISTRATION FEE TO BECOME A CA?",
    answer: "No! Application and participation in the Shaurya Campus Ambassador Program is 100% free of charge.",
  },
  {
    question: "WHAT IS THE WEEKLY TIME COMMITMENT REQUIRED?",
    answer: "The program requires around 3 to 5 hours per week, flexibly dedicated to social media posting, campus outreach, and contingent management.",
  },
  {
    question: "HOW DO I EARN POINTS AND CLIMB THE LEADERBOARD?",
    answer: "Points are awarded based on athlete registrations through your unique referral code/link, social media task submissions, poster distribution, and contingent size.",
  },
  {
    question: "DO I RECEIVE AN OFFICIAL CERTIFICATE FROM IIT KHARAGPUR?",
    answer: "Yes! All active Campus Ambassadors who achieve the Bronze Tier threshold (100+ points) will receive an official Certificate of Participation from Technology Students' Gymkhana, IIT Kharagpur.",
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
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

    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/faq`, {
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
      setSubmitted(false);
      alert('There was an error sending your question. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-12 py-6 text-left">
      {/* Heading */}
      <div className="text-center w-full max-w-4xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight font-['Bungee',sans-serif]">
          <span className="block text-white">FREQUENTLY ASKED</span>
          <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-red-500 bg-clip-text text-transparent">
            QUESTIONS
          </span>
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about the Shaurya Campus Ambassador Program, tasks, and reward structure.
        </p>
      </div>

      {/* ACCORDION LIST */}
      <div className="w-full max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-black/60 border border-yellow-500/30 rounded-2xl overflow-hidden backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-yellow-400"
          >
            <button
              className="w-full p-6 text-left flex justify-between items-center text-sm sm:text-base font-extrabold uppercase font-['Ubuntu'] text-yellow-300 hover:text-white transition-colors"
              onClick={() => toggle(index)}
            >
              <span>{faq.question}</span>
              <span className="ml-4 text-xl font-bold text-amber-400">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>

            {activeIndex === index && (
              <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/5 mt-2">
                <p className="pt-3">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ASK QUESTION FORM BOX */}
      <div className="w-full max-w-2xl mt-8 p-8 rounded-3xl bg-black/70 border border-yellow-500/40 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] space-y-6">
        <div className="text-center space-y-1">
          <h3 className="text-2xl font-black text-yellow-300 font-['Bungee'] uppercase">
            HAVE A QUESTION? ASK US DIRECTLY
          </h3>
          <p className="text-xs text-gray-300">
            Submit your query and our Campus Ambassador team will respond shortly.
          </p>
        </div>

        {submitted && (
          <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/40 text-green-300 text-sm font-semibold text-center">
            Your question has been submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-yellow-200 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Rahul Sharma"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-black/60 border border-yellow-500/30 rounded-xl text-white text-sm focus:outline-none focus:border-yellow-400"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-yellow-200 mb-1">
                Phone Number (10 Digits)
              </label>
              <input
                type="text"
                name="phone"
                placeholder="e.g. 9876543210"
                value={form.phone}
                onChange={handleChange}
                maxLength={10}
                className="w-full px-4 py-2.5 bg-black/60 border border-yellow-500/30 rounded-xl text-white text-sm focus:outline-none focus:border-yellow-400"
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-yellow-200 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="e.g. rahul@gmail.com"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-black/60 border border-yellow-500/30 rounded-xl text-white text-sm focus:outline-none focus:border-yellow-400"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-yellow-200 mb-1">
              Your Question
            </label>
            <textarea
              name="question"
              rows={3}
              placeholder="Type your inquiry here..."
              value={form.question}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-black/60 border border-yellow-500/30 rounded-xl text-white text-sm focus:outline-none focus:border-yellow-400"
            />
            {errors.question && <p className="text-red-400 text-xs mt-1">{errors.question}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-xl text-sm font-extrabold tracking-wider uppercase text-black bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500 hover:from-yellow-300 hover:to-red-400 shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all"
          >
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT QUESTION'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FAQ;

