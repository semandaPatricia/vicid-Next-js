import React from "react";
import './footer.module.css'
const Footer = () => {
  return (
    <footer className="footer border mt-12  z-10 border-t-[#33353F] border-l-transparent border-r-transparent ">
      <div className="container p-12 flex  justify-between">
        <span className="text-xl font-bold text-white ">Vicid co.</span>
        <p className="text-slate-200 "> 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
