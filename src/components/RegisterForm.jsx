// src/components/RegisterForm.jsx

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const [form, setForm] = useState({
    fullName: '',
    gender: '',
    dob: '',
    email: '',
    phone: '',
    college: '',
    cityState: '',
    degreeYear: '',
    heardAbout: '',
    hasExperience: null,        // <-- boolean now
    pastExperience: '',
    motivation: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const refs = {
    fullName: useRef(null),
    gender: useRef(null),
    dob: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    college: useRef(null),
    cityState: useRef(null),
    degreeYear: useRef(null),
    heardAbout: useRef(null),
    hasExperience: useRef(null),
    pastExperience: useRef(null),
    motivation: useRef(null),
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setForm((f) => ({ ...f, phone: digitsOnly }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
    setError(null);
  };

  const validate = () => {
    if (!form.fullName.trim()) return { field: 'fullName', message: 'Full name is required' };
    if (!form.gender) return { field: 'gender', message: 'Please select your gender' };
    if (!form.dob || isNaN(new Date(form.dob))) return { field: 'dob', message: 'Invalid date of birth' };
    const dobDate = new Date(form.dob);
    if (dobDate >= new Date()) return { field: 'dob', message: 'Date of birth must be in the past' };
    const personalEmailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/i;
    if (!personalEmailRegex.test(form.email)) {
      return { field: 'email', message: 'Use a personal email (e.g. gmail, yahoo, outlook)' };
    }
    if (!form.phone.trim()) return { field: 'phone', message: 'Phone number is required' };
    if (!/^\d{10}$/.test(form.phone)) return { field: 'phone', message: 'Phone number must be 10 digits' };
    if (!form.college.trim()) return { field: 'college', message: 'College/University is required' };
    if (!form.cityState.trim()) return { field: 'cityState', message: 'City/State is required' };
    if (!form.degreeYear.trim()) return { field: 'degreeYear', message: 'Degree and Year is required' };
    if (!form.heardAbout) return { field: 'heardAbout', message: 'Please tell us how you heard about Shaurya' };
    if (form.hasExperience === null)
      return { field: 'hasExperience', message: 'Please select Yes or No' };
    if (form.hasExperience === true && !form.pastExperience.trim()) {
      return { field: 'pastExperience', message: 'Please elaborate on your past experience' };
    }
    if (!form.motivation.trim()) return { field: 'motivation', message: 'Please share your motivation' };
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const validation = validate();
    if (validation) {
      setError(validation);
      refs[validation.field]?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    try {
      const res = await fetch('https://ca-backend-2025-0v6s.onrender.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        setError({ field: null, message: data.message || 'Something went wrong!' });
      } else {
        navigate('/');
      }
    } catch (err) {
      if (err) setError({ field: null, message: 'Network error. Please try again.' });
    }
  };

  const inputStyle =
    'w-full p-3 border border-gray-500 rounded-lg bg-black text-white placeholder-gray-400';

  return (
    <form onSubmit={onSubmit} className="space-y-4 p-4 max-w-xl mx-auto">
      {error && !error.field && <div className="text-red-500">{error.message}</div>}

      {/* Full Name */}
      <div ref={refs.fullName}>
        <label className="block mb-1">Full Name</label>
        <input name="fullName" value={form.fullName} onChange={onChange} className={inputStyle} />
        {error?.field === 'fullName' && <div className="text-red-500 text-sm mt-1">{error.message}</div>}
      </div>

      {/* Gender */}
      <div ref={refs.gender}>
        <label className="block mb-1">Gender</label>
        <select name="gender" value={form.gender} onChange={onChange} className={inputStyle}>
          <option value="">Select...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {error?.field === 'gender' && <div className="text-red-500 text-sm mt-1">{error.message}</div>}
      </div>

      {/* DOB */}
      <div ref={refs.dob}>
        <label className="block mb-1">Date of Birth</label>
        <input type="date" name="dob" value={form.dob} onChange={onChange} className={inputStyle} />
        {error?.field === 'dob' && <div className="text-red-500 text-sm mt-1">{error.message}</div>}
      </div>

      {/* Email */}
      <div ref={refs.email}>
        <label className="block mb-1">Email Address</label>
        <input name="email" value={form.email} onChange={onChange} className={inputStyle} />
        {error?.field === 'email' && <div className="text-red-500 text-sm mt-1">{error.message}</div>}
      </div>

      {/* Phone */}
      <div ref={refs.phone}>
        <label className="block mb-1">Phone Number</label>
        <input
          name="phone"
          value={form.phone}
          onChange={onChange}
          maxLength={10}
          inputMode="numeric"
          pattern="[0-9]*"
          className={inputStyle}
          placeholder="1234567890"
        />
        {error?.field === 'phone' && <div className="text-red-500 text-sm mt-1">{error.message}</div>}
      </div>

      {/* College */}
      <div ref={refs.college}>
        <label className="block mb-1">College/University</label>
        <input name="college" value={form.college} onChange={onChange} className={inputStyle} />
        {error?.field === 'college' && <div className="text-red-500 text-sm mt-1">{error.message}</div>}
      </div>

      {/* City/State */}
      <div ref={refs.cityState}>
        <label className="block mb-1">City, State</label>
        <input name="cityState" value={form.cityState} onChange={onChange} className={inputStyle} />
        {error?.field === 'cityState' && <div className="text-red-500 text-sm mt-1">{error.message}</div>}
      </div>

      {/* Degree and Year */}
      <div ref={refs.degreeYear}>
        <label className="block mb-1">Degree and Year of Study</label>
        <input name="degreeYear" value={form.degreeYear} onChange={onChange} className={inputStyle} />
        {error?.field === 'degreeYear' && <div className="text-red-500 text-sm mt-1">{error.message}</div>}
      </div>

      {/* Heard About */}
      <div ref={refs.heardAbout}>
        <label className="block mb-1">How did you hear about Shaurya?</label>
        <select name="heardAbout" value={form.heardAbout} onChange={onChange} className={inputStyle}>
          <option value="">Select...</option>
          <option value="Social Media">Social Media</option>
          <option value="Friend">Through a Friend</option>
          <option value="Website">Shaurya Website</option>
          <option value="Other">Other</option>
        </select>
        {error?.field === 'heardAbout' && <div className="text-red-500 text-sm mt-1">{error.message}</div>}
      </div>

      {/* Experience Radio */}
      <div ref={refs.hasExperience}>
        <label className="block mb-1">Have you ever been a Campus Ambassador or held a similar leadership position before?</label>
        <div className="flex items-center space-x-6">
          {[true, false].map((opt) => (
            <label key={String(opt)} className="inline-flex items-center">
              <input
                type="radio"
                name="hasExperience"
                value={opt}
                checked={form.hasExperience === opt}
                onChange={(e) => setForm({ ...form, hasExperience: e.target.value === 'true' })}
                className="form-radio text-yellow-400"
              />
              <span className="ml-2">{opt ? 'Yes' : 'No'}</span>
            </label>
          ))}
        </div>
        {error?.field === 'hasExperience' && <div className="text-red-500 text-sm mt-1">{error.message}</div>}
      </div>

      {/* Past Experience Textarea (shown only if true) */}
      <div
        ref={refs.pastExperience}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          form.hasExperience === true ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <label className="block mb-1">Please elaborate on your past experience.</label>
        <textarea
          name="pastExperience"
          value={form.pastExperience}
          onChange={onChange}
          rows={3}
          className={inputStyle}
          placeholder="Describe your leadership or ambassador experience"
        />
        {error?.field === 'pastExperience' && (
          <div className="text-red-500 text-sm mt-1">{error.message}</div>
        )}
      </div>

      {/* Motivation */}
      <div ref={refs.motivation}>
        <label className="block mb-1">Why do you want to be the Campus Ambassador?</label>
        <textarea name="motivation" value={form.motivation} onChange={onChange} rows={3} className={inputStyle} />
        {error?.field === 'motivation' && <div className="text-red-500 text-sm mt-1">{error.message}</div>}
      </div>

      <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Submit Application
      </button>
    </form>
  );
}