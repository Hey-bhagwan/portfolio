import { useState } from 'react';

const ContactForm = () => {
  // Initialize form data using useState hook
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle input changes for all form fields
  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form behavior
    console.log('Form submitted:', formData); // For now, just log the data
    alert('Function not available right now.');

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black p-6 max-w-[80%] mx-auto space-y-4 text-white"
    >
      {/* Name Field */}
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          placeholder="Ayush Upadhyay"
        />
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
      </div>

      {/* Subject Field */}
      <div>
        <label className="block text-sm mb-1">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
      </div>

      {/* Message Field */}
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-lime-300 text-black px-6 py-2 rounded-full hover:bg-lime-400 transition"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;
