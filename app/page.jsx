import Image from 'next/image';

// 1. Export the metadata for SEO
export const metadata = {
  title: {
    template: "%s / Sana Enterprises Scrap & Kabadiwala",
    default: "Welcome / Sana Enterprises Scrap & Kabadiwala"
  },
  description: "Sana Enterprises Scrap & Kabadiwala is the leading scrap buyer in Vasant Kunj, New Delhi. We offer reliable, 24/7 doorstep collection for e-waste, metals, paper, plastics, and household scrap at the best market rates across South Delhi.",
  keywords: [
    "Sana Enterprises", "Sana Enterprises Scrap", "Sana Enterprises Kabadiwala", "Sana Enterprises Vasant Kunj", "Sana Enterprises Kishangarh", "Sana Enterprises Mehrauli", "Sana Enterprises New Delhi", "Sana Scrap Dealer", "Sana Kabadiwala",
    "Scrap dealer Vasant Kunj", "Kabadiwala Vasant Kunj", "Scrap buyer Vasant Kunj", "Best Kabadiwala in Vasant Kunj", "Junk dealer Vasant Kunj", "Online Kabadiwala Vasant Kunj", "Doorstep Kabadiwala Vasant Kunj", "Scrap shop in Vasant Kunj", "Scrap yard Vasant Kunj", "Recycling center Vasant Kunj",
    "Kishangarh scrap dealer", "Kishangarh Kabadiwala", "Scrap buyer in Kishangarh Village", "Kabadi shop Kishangarh",
    "Mehrauli scrap dealer", "Kabadiwala in Mehrauli", "Scrap buyer Mehrauli", "Junk buyer Mehrauli",
    "South Delhi Kabadiwala", "South Delhi scrap buyer", "Scrap dealer South Delhi", "Top Kabadiwala in South Delhi", "Kabadiwala New Delhi", "Scrap buyers in New Delhi",
    "E-waste buyer Vasant Kunj", "E-waste recycling Delhi", "Old appliances buyer Vasant Kunj", "Computer scrap buyer Vasant Kunj", "Split AC scrap buyer Vasant Kunj", "Electronic waste buyer Mehrauli",
    "Metal scrap buyer Vasant Kunj", "Copper scrap dealer Vasant Kunj", "Iron scrap buyer Vasant Kunj", "Aluminium scrap buyer Vasant Kunj", "Brass scrap buyer Vasant Kunj", "Cast iron scrap buyer Delhi", "Industrial metal scrap buyer New Delhi",
    "Newspaper buyer Vasant Kunj", "Old paper buyer Vasant Kunj", "Carton scrap buyer Vasant Kunj", "Cardboard scrap buyer South Delhi", "Plastic scrap buyer Vasant Kunj", "Plastic container scrap dealer",
    "Automobile scrap buyer New Delhi", "Old vehicle parts buyer Vasant Kunj", "Battery scrap buyer Vasant Kunj", "Motor scrap dealer Delhi",
    "Scrap buyer near me", "Kabadiwala near me", "Junk dealer near me", "E-waste buyer near me", "Sell scrap online Vasant Kunj", "Book Kabadiwala Vasant Kunj", "Doorstep scrap collection Vasant Kunj", "Free scrap pickup South Delhi", "Best scrap rates in Delhi", "Daily scrap price Vasant Kunj", "Sell old newspaper near me", "Sell old AC near me",
    "Hassle-free scrap collection Vasant Kunj", "Responsible scrap disposal Delhi", "Eco-friendly recycling Vasant Kunj", "Household scrap buyer Vasant Kunj", "Commercial scrap buyer Vasant Kunj", "Office scrap dealer South Delhi", "Bulk scrap buyer Vasant Kunj", "24 hours Kabadiwala Vasant Kunj", "Open Kabadiwala near me", "Sunday open Kabadiwala Vasant Kunj", "Top rated Kabadiwala in Vasant Kunj"
  ],
};

// WhatsApp SVG Icon Component for reuse
const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// 2. Your main page component
export default function SanaEnterprises() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-green-200">
      
      {/* --- Navbar --- */}
      <nav className="bg-green-700/80 backdrop-blur-md hover:bg-green-700 transition-colors duration-300 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-tight">Sana Enterprises Scrap & Kabadiwala</h1>
          <a 
            href="#contact" 
            className="bg-white/80 backdrop-blur-sm text-green-800 px-5 py-2 rounded-lg font-bold hover:bg-white transition-all duration-300 shadow-sm"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative w-full h-[70vh] bg-gray-900 flex items-center justify-center text-center">
        <Image 
          src="/sana-1.jpg" 
          alt="Scrap and Kabadiwala Yard" 
          fill 
          className="object-cover opacity-40 absolute inset-0"
          priority
        />
        <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Top Scrap Buyers in <span className="text-green-400">Vasant Kunj</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Hassle-free scrap collection. We buy old newspapers, e-waste, metals, plastics, and more at the best market rates.
          </p>
          
          {/* Action Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Call Button */}
            <a 
              href="tel:+918882055596" 
              className="bg-green-600/70 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-green-600 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>📞</span> Call: +91 88820 55596
            </a>
            
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/918882055596" 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#25D366]/70 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-[#25D366] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-6 h-6" /> WhatsApp Us
            </a>
          </div>
          
          {/* Rating & Hours Badges Group */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Google Review Badge */}
            <div className="bg-gray-900/40 backdrop-blur-md border border-gray-500/30 hover:border-gray-500 hover:bg-gray-900 text-white px-5 py-2.5 rounded-full font-medium inline-flex items-center gap-2 shadow-lg transition-all duration-300 cursor-default">
               <span className="text-yellow-400 text-lg leading-none">★★★★★</span>
               <span><strong className="text-white">4.8</strong> on Google Reviews</span>
            </div>

            {/* Prominent Hours Badge */}
            <div className="bg-gray-900/40 backdrop-blur-md border border-gray-500/30 hover:border-gray-500 hover:bg-gray-900 text-green-300 px-5 py-2.5 rounded-full font-medium inline-flex items-center gap-2 shadow-lg transition-all duration-300 cursor-default">
               <span>🕒</span> Open 24 hours everyday except Tuesday
            </div>
          </div>
        </div>
      </header>

      {/* --- About Us Section --- */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">Our Story</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About Sana Enterprises</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Established in 2026, Sana Enterprises Scrap & Kabadiwala offers convenient and reliable scrap collection and recycling services. Located in the heart of Kishangarh Village, our services extend across Mehrauli, Vasant Kunj, and the surrounding New Delhi area. We specialize in responsible disposal and recycling of all types of scrap materials, including paper, plastic, metal, and electronic waste. Our mission is to promote sustainable practices while providing a seamless experience for our valued customers. We make it easy to contribute to a cleaner, greener community by turning your unwanted items into a resource for the future.
          </p>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h3 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">Our Services</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">What We Buy</h2>
            <ul className="space-y-6 text-lg text-gray-700">
              <li className="flex items-start gap-4">
                <span className="shrink-0 text-green-600 text-2xl leading-none">✔</span> 
                <div>
                  <strong className="block text-gray-900">Metals</strong>
                  <span className="text-gray-600 text-base">Iron, Copper, Aluminium, Brass</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="shrink-0 text-green-600 text-2xl leading-none">✔</span> 
                <div>
                  <strong className="block text-gray-900">E-Waste</strong>
                  <span className="text-gray-600 text-base">Old appliances, computers, split AC units</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="shrink-0 text-green-600 text-2xl leading-none">✔</span> 
                <div>
                  <strong className="block text-gray-900">Paper & Plastic</strong>
                  <span className="text-gray-600 text-base">Newspapers, cardboard, plastic containers</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="shrink-0 text-green-600 text-2xl leading-none">✔</span> 
                <div>
                  <strong className="block text-gray-900">Automobile Scrap</strong>
                  <span className="text-gray-600 text-base">Old vehicle parts, motors, and batteries</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative h-80 md:h-125 w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/sana-2.jpg" 
              alt="Scrap sorting and recycling" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </section>

      {/* --- Location & Contact Section --- */}
      <section id="contact" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">Reach Out</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Visit Us or Get in Touch</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Details Cards */}
            <div className="flex flex-col gap-6 justify-center">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  📍 Address
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Shop No. 121/8, Ground Floor (Nearby IMA'S KITCHEN)<br/>
                  Kishangarh Mehrauli Road, Shamshan Rd<br/>
                  Opposite A-One Property, Kishangarh Village<br/>
                  Vasant Kunj, New Delhi, Delhi 110070
                </p>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  🕒 Business Hours
                </h4>
                <p className="text-gray-700 text-lg font-medium">Open 24 hours everyday except Tuesday</p>
                <p className="text-red-500 font-semibold mt-1">(Closed on Tuesdays)</p>
              </div>

              {/* Contact Info w/ WhatsApp & Email Added */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  📞 Contact Info
                </h4>
                <p className="text-gray-600 text-lg mb-3 flex items-center gap-2">
                  <strong>Phone:</strong> <a href="tel:+918882055596" className="text-green-600 hover:underline">+91 88820 55596</a>
                </p>
                <p className="text-gray-600 text-lg mb-3 flex items-center gap-2">
                  <strong>WhatsApp:</strong> 
                  <a href="https://wa.me/918882055596" target="_blank" rel="noreferrer" className="text-[#25D366] hover:underline flex items-center gap-1">
                    <WhatsAppIcon className="w-5 h-5" /> +91 88820 55596
                  </a>
                </p>
                <p className="text-gray-600 text-lg mb-3 flex items-center gap-2">
                  <strong>Email:</strong> 
                  <a href="mailto:info@sanascrapkabadiwala.co.in" className="text-green-600 hover:underline">
                    info@sanascrapkabadiwala.co.in
                  </a>
                </p>
                <p className="text-gray-600 text-lg">
                  <strong>Website:</strong> <a href="https://sanascrapkabadiwala.co.in" target="_blank" rel="noreferrer" className="text-green-600 hover:underline">sanascrapkabadiwala.co.in</a>
                </p>
              </div>
            </div>

            {/* Map and 3rd Image */}
            <div className="flex flex-col gap-6">
               <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-md">
                  <Image 
                    src="/sana-3.jpg" 
                    alt="Sana Enterprises Shop Front" 
                    fill 
                    className="object-cover"
                  />
              </div>
              
              <div className="h-87.5 w-full rounded-2xl overflow-hidden shadow-md border border-gray-200">
                <iframe
                  title="Sana Enterprises Vasant Kunj Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.634034704372!2d77.1665488!3d28.5206564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f33bc9def3d%3A0xc78ef41a6dc0a424!2sSana%20Enterprises%20Scrap%20%26%20Kabadiwala!5e0!3m2!1sen!2sin!4v1781167748655!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="font-semibold text-white tracking-wide">Sana Enterprises Scrap & Kabadiwala</p>
            <p className="text-sm mt-1 text-yellow-500">★★★★★ 4.8 / 5.0 Highly Rated</p>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Sana Enterprises Scrap & Kabadiwala. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}