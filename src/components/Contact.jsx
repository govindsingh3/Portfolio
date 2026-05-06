import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/govindpratapsingh77@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent successfully.");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative overflow-hidden">
      {/* Background ambient blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mb-20 relative z-10"
      >
        <span className="px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-2 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <FaPaperPlane /> Get In Touch
        </span>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Collaborate.</span>
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 relative z-10">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="glassmorphism p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden border border-white/10 shadow-2xl bg-[#0A0D1C]/80 backdrop-blur-2xl">
            <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="relative">
                <label className={`absolute left-6 transition-all duration-300 ${focusedInput === 'name' || form.name ? '-top-3 text-xs text-secondary bg-[#0A0D1C] px-2' : 'top-4 text-gray-400'}`}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('name')}
                  onBlur={() => setFocusedInput(null)}
                  className={`w-full bg-white/5 py-4 px-6 text-white rounded-2xl outline-none border transition-all duration-300 ${focusedInput === 'name' ? 'border-secondary shadow-[0_0_15px_rgba(56,189,248,0.3)]' : 'border-white/10 hover:border-white/30'}`}
                  required
                />
              </div>

              <div className="relative">
                <label className={`absolute left-6 transition-all duration-300 ${focusedInput === 'email' || form.email ? '-top-3 text-xs text-secondary bg-[#0A0D1C] px-2' : 'top-4 text-gray-400'}`}>
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  className={`w-full bg-white/5 py-4 px-6 text-white rounded-2xl outline-none border transition-all duration-300 ${focusedInput === 'email' ? 'border-secondary shadow-[0_0_15px_rgba(56,189,248,0.3)]' : 'border-white/10 hover:border-white/30'}`}
                  required
                />
              </div>

              <div className="relative">
                <label className={`absolute left-6 transition-all duration-300 ${focusedInput === 'message' || form.message ? '-top-3 text-xs text-secondary bg-[#0A0D1C] px-2' : 'top-4 text-gray-400'}`}>
                  Your Message
                </label>
                <textarea
                  rows="6"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('message')}
                  onBlur={() => setFocusedInput(null)}
                  className={`w-full bg-white/5 py-4 px-6 text-white rounded-2xl outline-none border transition-all duration-300 resize-none ${focusedInput === 'message' ? 'border-secondary shadow-[0_0_15px_rgba(56,189,248,0.3)]' : 'border-white/10 hover:border-white/30'}`}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative w-full sm:w-auto self-stretch sm:self-end py-4 px-10 rounded-full font-bold text-white overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-purple-600 transition-transform duration-500 group-hover:scale-110"></div>
                <div className="relative flex items-center justify-center gap-3">
                  {loading ? "Sending..." : "Send Message"}
                  <FaPaperPlane className={`transition-transform duration-500 ${loading ? 'translate-x-10 opacity-0' : 'group-hover:translate-x-2 group-hover:-translate-y-2'}`} />
                </div>
              </button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:basis-[45%] flex flex-col justify-between lg:min-h-[520px]"
        >
          <div className="glassmorphism p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-transparent border border-white/10 relative overflow-hidden h-full shadow-2xl">
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full"></div>
            
            <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Contact Information</h3>
            <p className="text-gray-400 mb-12 relative z-10 leading-relaxed text-lg">
              I'm actively looking for new opportunities. Whether you have a question, a project idea, or just want to connect, my inbox is always open!
            </p>

            <div className="flex flex-col gap-8 relative z-10">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary text-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] group-hover:-translate-y-1">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Email</h4>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors">govindpratapsingh77@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] group-hover:-translate-y-1">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Location</h4>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors">Lovely Professional University, Punjab</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
