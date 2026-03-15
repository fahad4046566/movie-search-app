import Logo from "./Logo";

const Footer = () => {
  return<footer className="w-full bg-base-200/50 border-t border-white/5 mt-auto">
  <div className="container mx-auto px-6 py-10 md:py-14">
    {/* Grid System: Mobile par 1 column, Desktop par 3 columns */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left">
      
      
      <div className="flex flex-col items-center md:items-start space-y-4">
       <Logo/>
        <p className="text-sm opacity-60 max-w-xs font-medium leading-relaxed">
          Discover thousands of movies and TV shows with just one click. Your ultimate guide to the world of cinema.
        </p>
      </div>

      {/* 2. Navigation Links */}
      <div className="flex flex-col items-center md:items-start space-y-4">
        <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-base-content/40">Navigation</h3>
        <nav className="flex flex-wrap justify-center md:flex-col gap-4 md:gap-2 text-sm font-semibold">
          <a className="hover:text-primary transition-all cursor-pointer">About Us</a>
          <a className="hover:text-primary transition-all cursor-pointer">Contact</a>
          <a className="hover:text-primary transition-all cursor-pointer">Privacy Policy</a>
        </nav>
      </div>

      {/* 3. Social Media */}
      <div className="flex flex-col items-center md:items-start space-y-4">
        <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-base-content/40">Follow Us</h3>
        <div className="flex gap-5">
          <a className="p-2 bg-base-300 rounded-lg hover:text-primary hover:-translate-y-1 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
          </a>
          <a className="p-2 bg-base-300 rounded-lg hover:text-primary hover:-translate-y-1 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
          </a>
        </div>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/5 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs opacity-50 font-medium">
      <p>Copyright © {new Date().getFullYear()} - MovieFinder Ltd</p>
      <div className="flex gap-4">
        <span>Punjab, Pakistan</span>
        <span>•</span>
        <span>Clean & Minimal Design</span>
      </div>
    </div>
  </div>
</footer>
};

export default Footer;
