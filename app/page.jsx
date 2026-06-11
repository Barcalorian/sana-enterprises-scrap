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

// 2. Your main page component
export default function SanaEnterprises() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-green-200">
      
      {/* --- Navbar --- */}
      <nav className="bg-green-700 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-tight">Sana Enterprises scrap & Kabadiwala</h1>
          <a 
            href="#contact" 
            className="bg-white text-green-700 px-5 py-2 rounded-lg font-bold hover:bg-gray-100 transition shadow-sm"
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
          className="object-cover opacity-30 absolute inset-0"
          priority
        />
        <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Top Scrap Buyers in <span className="text-green-400">Vasant Kunj</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Hassle-free scrap collection. We buy old newspapers, e-waste, metals, plastics, and more at the best market rates.
          </p>
          
          <a 
            href="tel:+918882055596" 
            className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-green-500 hover:scale-105 transition-transform duration-300 mb-6"
          >
            Call Now: +91 88820 55596
          </a>
          
          {/* Rating & Hours Badges Group */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Google Review Badge */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700 text-white px-5 py-2.5 rounded-full font-medium inline-flex items-center gap-2 shadow-lg">
               <span className="text-yellow-400 text-lg leading-none">★★★★★</span>
               <span><strong className="text-white">4.8</strong> on Google Reviews</span>
            </div>

            {/* Prominent Hours Badge */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700 text-green-300 px-5 py-2.5 rounded-full font-medium inline-flex items-center gap-2 shadow-lg">
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

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  📞 Contact Info
                </h4>
                <p className="text-gray-600 text-lg mb-2">
                  <strong>Phone:</strong> <a href="tel:+918882055596" className="text-green-600 hover:underline">+91 88820 55596</a>
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
                  src="https://maps.google.com/maps?q=28.5206564,77.1665488&hl=en&z=17&output=embed"
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