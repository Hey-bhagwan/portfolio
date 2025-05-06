import  { useState } from 'react';



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: { target: {
      [x: string]: any; value: String 
}; }) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = () => {
     console.log('Form submitted:', formData);
    // You can add actual submission logic here
    alert('Functon not available right now.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-black p-6 max-w-[80%] mx-auto space-y-4 text-white ">
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
