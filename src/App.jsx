import React, { useState } from 'react';
import { 
  Monitor, 
  Share2, 
  CheckCircle, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ArrowRight, 
  MessageSquare,
  ExternalLink,
  Sparkles,
  Gift,
  Wrench,
  Layers,
  Coins
} from 'lucide-react';

export default function App() {
  // State Management
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [formData, setFormData] = useState({ name: '', email: '', business: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Simulated Email Submission Handler
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', business: '', message: '' });
    }, 4000);
  };

  // Refined Core Service Portfolio Dataset with External Target Redirect URLs
  const portfolioItems = [
    { 
      id: 2, 
      title: 'MyFitzone Gym', 
      category: 'Websites', 
      desc: 'Gym Website', 
      img: '/gym.png',
      link: 'https://myfitzone-gym.netlify.app/'
    },
    { 
      id: 3, 
      title: 'FlameHouse', 
      category: 'Websites', 
      desc: 'Sleek, Fully Responsive Cafe website', 
      img: '/cafe.png',
      link: 'https://thunderous-lamington-da8787.netlify.app/'
    },
    { 
      id: 5, 
      title: 'Poster Collection', 
      category: 'Posters', 
      desc: 'Print Layouts and flyers', 
      img: '/pospreview.png',
      link: 'https://example.com/poster-preview-3'
    },
    { 
      id: 6, 
      title: 'Coaching Center', 
      category: 'Social Media', 
      desc: 'Local Digital Growth Framework & Content management', 
      img: '/coachingpre.png',
      link: 'https://instagram.com/apex-fitness-example'
    },
  ];

  // Primary Offerings Category Architecture Array
  const categories = ['All', 'Websites', 'Social Media', 'Posters'];
  
  const filteredPortfolio = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className={`${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} min-h-screen font-sans transition-colors duration-300 scroll-smooth`}>
      
      {/* --- NAVIGATION BAR --- */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Custom Logo Area */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Webbit Custom Logo" 
              className="h-9 w-9 object-contain rounded-lg shadow-md"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=100&q=80';
              }}
            />
            <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Webbit
            </span>
          </div>

          {/* Desktop Navigation Links Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#services" className="hover:text-indigo-500 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-indigo-500 transition-colors">Portfolio</a>
            
            {/* Smooth Scroll Early Bird Section Link */}
            <a 
              href="#early-bird" 
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-emerald-500 border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all font-semibold"
            >
              <Sparkles size={16} className="animate-pulse" />
              Early Bird Offers
            </a>

            <a href="#pricing" className="hover:text-indigo-500 transition-colors">Pricing</a>
            <a href="#contact" className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition-all shadow-md shadow-indigo-600/20">Grow My Brand</a>
            
            {/* Dark/Light Context Toggle Button */}
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className={`p-2 rounded-xl border ${darkMode ? 'border-slate-800 hover:bg-slate-900 text-amber-400' : 'border-slate-200 hover:bg-slate-100 text-indigo-600'} transition-colors`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile UI Responsive Target Navigation Controls */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className={`p-2 rounded-xl ${darkMode ? 'text-amber-400' : 'text-indigo-600'}`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Interface */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-b px-4 pt-2 pb-6 flex flex-col gap-4 ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg">Services</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg">Portfolio</a>
            
            {/* Mobile Early Bird Link */}
            <a href="#early-bird" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg text-emerald-500 flex items-center gap-2 font-semibold">
              <Sparkles size={18} /> Early Bird Offers
            </a>

            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg">Pricing</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-indigo-600 text-white text-center py-3 rounded-xl">Grow My Brand</a>
          </div>
        )}
      </nav>

      {/* --- HERO HEADER SECTION --- */}
      <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Clickable Banner sliding down to the offer segment */}
        <a 
          href="#early-bird"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-6 hover:bg-emerald-500/20 transition-all cursor-pointer"
        >
          <Gift size={16} className="animate-bounce" /> Early Bird Launch Offers Active! Click to view details ↓
        </a>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto mb-6 leading-[1.15]">
          You run your business. <br />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            We build your buzz.
          </span>
        </h1>
        
        <p className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Webbit engineering coordinates high-conversion customized websites, structured social feeds, and hyper-targeted print marketing configurations designed to maximize local exposure.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/20 transition-all group">
            Claim Your Free Strategy Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold border ${darkMode ? 'border-slate-800 hover:bg-slate-900' : 'border-slate-200 hover:bg-slate-100'} transition-all`}>
            See Our Work
          </a>
        </div>
      </section>

      {/* --- SERVICES MATRIX SECTION --- */}
      <section id="services" className={`py-20 border-t ${darkMode ? 'bg-slate-900/40 border-slate-900' : 'bg-slate-100/50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything You Need to Dominate Locally</h2>
            <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>We handle technical design workflows so you can focus on welcoming foot traffic.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'} hover:shadow-lg transition-all`}>
              <div className="text-indigo-500 mb-4 p-3 bg-indigo-500/10 inline-block rounded-xl"><Monitor size={28} /></div>
              <h3 className="text-xl font-bold mb-2">Customized Websites</h3>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Hand-crafted, blazing-fast web interfaces built natively from scratch to turn local searches into paying checkouts.</p>
            </div>
            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'} hover:shadow-lg transition-all`}>
              <div className="text-purple-500 mb-4 p-3 bg-purple-500/10 inline-block rounded-xl"><Share2 size={28} /></div>
              <h3 className="text-xl font-bold mb-2">Social Media Boost</h3>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Tailored organic content scheduling arrays and graphical assets engineered to capture local geo-locations.</p>
            </div>
            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'} hover:shadow-lg transition-all`}>
              <div className="text-emerald-500 mb-4 p-3 bg-emerald-500/10 inline-block rounded-xl"><MessageSquare size={28} /></div>
              <h3 className="text-xl font-bold mb-2">Posters & Print Assets</h3>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>High-fidelity, striking retail store posters, grand opening banners, and marketing brochures optimizing physical conversions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO MATRIX SECTION --- */}
      <section id="portfolio" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Proven Track Record</h2>
            <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Real transformations built for local neighborhood commercial ecosystems.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeCategory === cat 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : darkMode ? 'bg-slate-900 text-slate-400 hover:bg-slate-800' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map(item => (
            <a 
              key={item.id}
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block"
            >
              <div className={`rounded-2xl overflow-hidden border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} transition-all hover:shadow-2xl hover:border-indigo-500/40 relative`}>
                <div className="relative overflow-hidden h-52 bg-slate-800">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-md">
                    {item.category}
                  </span>
                  
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-white text-slate-900 p-3 rounded-full shadow-lg flex items-center gap-2 font-bold text-xs transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      Launch Live Demo <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-indigo-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* --- IN-LINE HOMEPAGE EARLY BIRD OFFERS SECTION --- */}
      <section id="early-bird" className={`py-20 border-t scroll-mt-16 ${darkMode ? 'bg-slate-900/30 border-slate-900' : 'bg-emerald-50/40 border-emerald-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 relative">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Limited Founding Privilege Slots
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
              Early Bird Launch Offers
            </h2>
            <p className={`text-base max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              To celebrate Webbit going live, we are extending explicit configuration bonuses to our <strong className="text-emerald-400">first five agency partners</strong>. Secure your edge.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm font-medium text-slate-200">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Remaining Slots Available: <strong className="text-emerald-400">3 / 5</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Offer 1 */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div>
                <div className="text-emerald-400 p-3 bg-emerald-500/10 inline-block rounded-xl mb-4">
                  <Wrench size={24} />
                </div>
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Perk #01</span>
                <h3 className="text-xl font-bold mb-3">1-Month Free Website Maintenance</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Zero overhead layout updates, content updates, security optimization adjustments, and database health evaluations post-deployment.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/20 text-xs font-semibold text-emerald-400 bg-emerald-500/5 py-1.5 px-3 rounded-lg text-center">
                Save ₹5,000 Upfront
              </div>
            </div>

            {/* Offer 2 */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div>
                <div className="text-indigo-400 p-3 bg-indigo-500/10 inline-block rounded-xl mb-4">
                  <Layers size={24} />
                </div>
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Perk #02</span>
                <h3 className="text-xl font-bold mb-3">Free Custom Prototyping First</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  We draft and test an actionable structural framework interface mock for your brand ecosystem before requiring any project advance balance.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/20 text-xs font-semibold text-indigo-400 bg-indigo-500/5 py-1.5 px-3 rounded-lg text-center">
                100% Risk-Free Architecture
              </div>
            </div>

            {/* Offer 3 */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div>
                <div className="text-amber-400 p-3 bg-amber-500/10 inline-block rounded-xl mb-4">
                  <Coins size={24} />
                </div>
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Perk #03</span>
                <h3 className="text-xl font-bold mb-3">Refer & Credit ₹1,000 Cash Back</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Introduce neighboring businesses to the platform. If they activate a deployment run, we deduct ₹1,000 from your invoice statement immediately.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/20 text-xs font-semibold text-amber-400 bg-amber-500/5 py-1.5 px-3 rounded-lg text-center">
                Uncapped Referral Scale
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- PRICING TRANSPARENCY SECTION --- */}
      {/* --- PRICING TRANSPARENCY SECTION --- */}
      <section id="pricing" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900/10 dark:border-slate-800/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Transparent Pricing for Growing Brands</h2>
          <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Select a deployment tier blueprint engineered to elevate your physical storefront or e-commerce system.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Plan 1 */}
          <div className={`p-8 rounded-2xl border flex flex-col justify-between ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Essential Startup</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">Media Starter</h3>
              
              {/* Price Stack Component */}
              <div className="mb-6 flex flex-col justify-end min-h-[4.5rem]">
                <span className="text-sm line-through text-slate-500 tracking-wide mb-1">Rs. 11,999</span>
                <div className="text-4xl font-black">
                  Rs. 9,999<span className="text-sm font-normal text-slate-500">/one-time</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-indigo-500"/> 2 Customized Logo options</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-indigo-500"/> 5 page responsive Custom Website </li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-indigo-500"/> 1 Month Digital Assistance </li>
              </ul>
            </div>
            <a href="#contact" className="block text-center w-full py-3 rounded-xl border border-indigo-600 text-indigo-500 font-semibold hover:bg-indigo-600 hover:text-white transition-colors">Get Started</a>
          </div>

          {/* Plan 2 (Highlighted) */}
          <div className={`p-8 rounded-2xl border-2 border-indigo-600 flex flex-col justify-between relative ${darkMode ? 'bg-slate-950' : 'bg-white shadow-xl'}`}>
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Digital Domination</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">The Webbit Growth Pack</h3>
              
              {/* Price Stack Component */}
              <div className="mb-6 flex flex-col justify-end min-h-[4.5rem]">
                <span className="text-sm line-through text-slate-500 tracking-wide mb-1">Rs. 23,999</span>
                <div className="text-4xl font-black">
                  Rs. 19,999<span className="text-sm font-normal text-slate-500">/one-time</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-indigo-500"/> Fully Responsive Website</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-indigo-500"/> Social Media Content Blueprint</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-indigo-500"/> 3 Month Digital Assistance </li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-indigo-500"/> Print Assests Included </li>
              </ul>
            </div>
            <a href="#contact" className="block text-center w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">Grow My Business</a>
          </div>

          {/* Plan 3 */}
          <div className={`p-8 rounded-2xl border flex flex-col justify-between ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Ultimate Reach</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">Elite Digital Presence</h3>
              
              {/* Price Stack Component */}
              <div className="mb-6 flex flex-col justify-end min-h-[4.5rem]">
                <span className="text-sm line-through text-slate-500 tracking-wide mb-1">Rs. 47,000</span>
                <div className="text-4xl font-black">
                  Rs. 39,999<span className="text-sm font-normal text-slate-500">/one-time</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-indigo-500"/> Scalable Custom Website </li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-indigo-500"/> Full Social Media Assistance</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-indigo-500"/> 6 Month Maintenance Architecture</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-indigo-500"/> Customized Print Assests Included</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-indigo-500"/> Priority Support</li>
              </ul>
            </div>
            <a href="#contact" className="block text-center w-full py-3 rounded-xl border border-indigo-600 text-indigo-500 font-semibold hover:bg-indigo-600 hover:text-white transition-colors">Go Premium</a>
          </div>
        </div>
      </section>
      {/* --- CONTACT ACQUISITION INTERFACE --- */}
      <section id="contact" className={`py-20 border-t ${darkMode ? 'bg-slate-900/40 border-slate-900' : 'bg-slate-100/50 border-slate-200'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Fuel Your Local Business Journey</h2>
            <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Brief us on your local commercial footprint, and we will formulate your visual marketing framework assets.</p>
          </div>

          <div className={`p-8 rounded-3xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto text-3xl">✓</div>
                <h3 className="text-2xl font-bold">Awesome! We're on it.</h3>
                <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>The Webbit consulting team will evaluate your localized profile and follow up via email within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`w-full p-3 rounded-xl border outline-none text-sm transition-all ${darkMode ? 'bg-slate-900 border-slate-800 focus:border-indigo-500 text-white' : 'bg-slate-50 border-slate-200 focus:border-indigo-500 text-slate-900'}`}
                      placeholder="Rudra"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2">Business Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full p-3 rounded-xl border outline-none text-sm transition-all ${darkMode ? 'bg-slate-900 border-slate-800 focus:border-indigo-500 text-white' : 'bg-slate-50 border-slate-200 focus:border-indigo-500 text-slate-900'}`}
                      placeholder="rudra@yourbusiness.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">Business Name & Niche</label>
                  <input 
                    type="text" 
                    required
                    value={formData.business}
                    onChange={(e) => setFormData({...formData, business: e.target.value})}
                    className={`w-full p-3 rounded-xl border outline-none text-sm transition-all ${darkMode ? 'bg-slate-900 border-slate-800 focus:border-indigo-500 text-white' : 'bg-slate-50 border-slate-200 focus:border-indigo-500 text-slate-900'}`}
                    placeholder="Cafe /  Fitness Studio"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">What digital assets or poster layouts can we build for you?</label>
                  <textarea 
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`w-full p-3 rounded-xl border outline-none text-sm transition-all ${darkMode ? 'bg-slate-900 border-slate-800 focus:border-indigo-500 text-white' : 'bg-slate-50 border-slate-200 focus:border-indigo-500 text-slate-900'}`}
                    placeholder="We need a fast brand website alongside custom printable grand opening posters..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 transition-all">
                  Send Blueprint Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* --- FOOTER FOOTNOTE NODE --- */}
      <footer className={`py-12 border-t text-center ${darkMode ? 'bg-slate-950 border-slate-900 text-slate-500' : 'bg-white border-slate-200 text-slate-600'}`}>
        <p className="font-bold text-sm bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2">Webbit Agency Inc.</p>
        <p className="text-xs">&copy; 2026 Webbit. Elevating local commerce footprints globally. All rights reserved.</p>
      </footer>
    </div>
  );
}