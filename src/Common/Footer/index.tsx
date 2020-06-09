import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer main-grid">
      <div className="footer-main" style={{ textAlign: "center" }}>
        <p className="footer-text">
          Connectomics in NeuroImaging - Transfer Learning Challenge
        </p>
        <p>
          <a href="http://www.brainconnectivity.net">
            http://www.brainconnectivity.net
          </a>
        </p>
        <p className="footer-fineprint">© FNNDSC 2019</p>
      </div>
    </footer>
  );
};

export default Footer;
