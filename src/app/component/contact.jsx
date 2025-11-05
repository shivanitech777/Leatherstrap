"use client";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-black text-white flex mt-24">
      
   
      <div className="w-full md:w-1/3 bg-[#0E0E0E] border-r border-[#2a2a2a] p-10 sticky top-0 h-screen flex flex-col justify-between m-24">
        
        <div>
          <h2 className="text-4xl font-bold tracking-wide uppercase">
            Get in Touch
          </h2>
          <p className="text-sm text-gray-300 mt-4 leading-relaxed">
            We value real craftsmanship. Whether you're seeking custom
            leather straps or premium accessories, reach out. We're here.
          </p>

          <div className="mt-8 space-y-3">
            <p className="text-sm">Phone</p>
            <p className="text-lg font-semibold text-[#b7a96b]">+91 98765 43210</p>

            <p className="text-sm mt-6">Email</p>
            <p className="text-lg font-semibold text-[#b7a96b]">hello@brand.com</p>

            <p className="text-sm mt-6">Location</p>
            <p className="text-lg font-semibold text-[#b7a96b]">
              Connaught Place, New Delhi
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 mt-10">
          <a href="#" className="hover:text-[#b7a96b] transition"><FaInstagram size={22} /></a>
          <a href="#" className="hover:text-[#b7a96b] transition"><FaWhatsapp size={22} /></a>
          <a href="#" className="hover:text-[#b7a96b] transition"><FaFacebookF size={22} /></a>
        </div>

      </div>

      {/* Right Form + Map */}
      <div className="w-full md:w-2/3 p-10 space-y-12">

        {/* Form */}
        <form className="bg-[#111] border border-[#2a2a2a] rounded-xl p-10 space-y-6">
          <h3 className="text-2xl font-semibold text-[#b7a96b] uppercase tracking-wide">
            Send your message
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name"
              className="bg-black border border-[#2a2a2a] p-3 rounded-md focus:border-[#b7a96b] outline-none" />
            <input type="email" placeholder="Email Address"
              className="bg-black border border-[#2a2a2a] p-3 rounded-md focus:border-[#b7a96b] outline-none" />
          </div>

          <input type="text" placeholder="Subject"
            className="w-full bg-black border border-[#2a2a2a] p-3 rounded-md focus:border-[#b7a96b] outline-none" />

          <textarea placeholder="Message" rows="5"
            className="w-full bg-black border border-[#2a2a2a] p-3 rounded-md focus:border-[#b7a96b] outline-none"></textarea>

          <button className="bg-[#b7a96b] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#c7b97a] transition">
            Send Message
          </button>
        </form>

        {/* Map */}
        <div className="overflow-hidden rounded-xl border border-[#2a2a2a]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.869640786226!2d77.21672177535807!3d28.613939275658772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3f8db6d093%3A0x14855a69e8e3cb41!2sConnaught%20Place!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
