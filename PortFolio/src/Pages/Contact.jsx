import { motion } from 'motion/react';
import ContactHeader from '../Components/ContactPage/ContactHeader';
import ContactForm from '../Components/ContactPage/ContactForm';
import StickyLinks from '../Components/ContactPage/StickyLinks';
import Footer from '../Components/Footer';

const Contact = () => {
  return (<>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen w-full filter-sketchy-light bg-white border-8 border-black flex flex-col"
    >
      {/* Page Header — centered at top */}
      <div className="flex justify-center px-4 pt-8 pb-4 border-b-8 border-black">
        <ContactHeader />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col md:flex-row gap-0">

        {/* LEFT — Form section */}
        <main className="flex-1 flex items-start justify-center px-6 sm:px-10 py-12 border-r-0 md:border-r-8 md:border-black">
          <div className="w-full max-w-xl">
            {/* Section label */}
            <p className="text-xs font-black uppercase tracking-[0.3em] text-black/40 mb-8">
              — Send a message
            </p>
            <ContactForm />
          </div>
        </main>

        {/* RIGHT — Sticky links sidebar */}
        <aside className="flex flex-col items-center justify-start px-6 sm:px-10 py-12 border-t-8 border-black md:border-t-0 md:w-72 lg:w-80 gap-10">
          {/* Section label */}
          <p className="text-xs font-black uppercase tracking-[0.3em] text-black/40 w-full">
            — Or reach out directly
          </p>

          <StickyLinks />

          {/* Decorative brutalist rule */}
          <div className="w-full mt-auto">
            <svg
              viewBox="0 0 200 12"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
              aria-hidden="true"
            >
              <path
                d="M2,6 C20,2 40,10 60,6 C80,2 100,10 120,6 C140,2 160,10 180,6 C190,4 196,7 198,6"
                stroke="#000"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.2"
              />
            </svg>

            {/* Availability badge */}
            <motion.div
              initial={{ rotate: -1 }}
              animate={{ rotate: [-1, 1, -1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-6 inline-block border-4 border-black px-4 py-2 bg-black text-white font-black text-xs tracking-widest uppercase"
              style={{
                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
              }}
            >
              ✦ Open to work
            </motion.div>
          </div>
        </aside>
      </div>


    </motion.div>
    <Footer /></>
  );
};

export default Contact;
