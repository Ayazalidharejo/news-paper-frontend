import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <header className="w-100 bg-light shadow-sm">
        {/* Top section with logos */}
        <div className="bg-light py-3">
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* Left Logo - Express Tribune */}
              <div className="col-md-3 col-6">
                <div className="d-flex align-items-center">
                  <h4 className="mb-0 fw-bold">
                    <span className="text-dark d-flex align-content-center"> سماج  <span className='text-danger ms-1'>ہمارا</span></span>
                    <span className=""> </span>
                  </h4>
                </div>
              </div>

              {/* Center Logo - Urdu Express */}
              <div className="col-md-6 d-none d-md-block text-center">
                <h2 className="mb-0 fw-bold text-dark urdu-text">
                  اردو ایکسپریس
                </h2>
              </div>

              {/* Right Logo - Cricket Pakistan */}
              <div className="col-md-3 d-none d-md-block">
                <div className="d-flex align-items-center justify-content-end">
                  <div className="d-flex align-items-center bg-white px-3 py-2 rounded shadow-sm">
                    <div className="cricket-logo me-2">
                      <div className="cricket-ball"></div>
                    </div>
                    <div>
                      <div className="fw-bold text-dark cricket-text">CRICKET</div>
                      <div className="text-warning fw-semibold cricket-text">PAKISTAN</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="col-6 d-md-none text-end">
                <button 
                  className="btn btn-outline-secondary"
                  onClick={toggleMenu}
                  type="button"
                >
                  {isMenuOpen ? '✕' : '☰'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-white border-top">
          <div className="container-fluid">
            {/* Desktop Navigation */}
            <div className="row d-none d-md-flex justify-content-center py-2">
              <div className="col-auto">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link text-secondary nav-hover px-3" href="#">
                      EXPRESS NEWS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary nav-hover px-3" href="#">
                      THE EXPRESS TRIBUNE
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary nav-hover px-3" href="#">
                      FOOD TRIBUNE
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary nav-hover px-3" href="#">
                      URDU E-PAPER
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary nav-hover px-3" href="#">
                      ENGLISH E-PAPER
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-danger nav-hover px-3 d-flex align-items-center" href="#">
                      <span className="live-dot me-2"></span>
                      WATCH EXPRESS NEWS LIVE
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`d-md-none ${isMenuOpen ? 'd-block' : 'd-none'}`}>
              <div className="py-3">
                {/* Mobile Urdu Logo */}
                <div className="text-center mb-4 pb-3 border-bottom">
                  <h3 className="mb-0 fw-bold text-dark urdu-text">
                    اردو ایکسپریس
                  </h3>
                </div>
                
                {/* Mobile Menu Items */}
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link text-secondary mobile-nav-hover py-3" href="#">
                      EXPRESS NEWS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary mobile-nav-hover py-3" href="#">
                      THE EXPRESS TRIBUNE
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary mobile-nav-hover py-3" href="#">
                      FOOD TRIBUNE
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary mobile-nav-hover py-3" href="#">
                      URDU E-PAPER
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary mobile-nav-hover py-3" href="#">
                      ENGLISH E-PAPER
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-danger mobile-nav-hover py-3 d-flex align-items-center" href="#">
                      <span className="live-dot me-2"></span>
                      WATCH EXPRESS NEWS LIVE
                    </a>
                  </li>
                </ul>

                {/* Mobile Cricket Pakistan Logo */}
                <div className="text-center mt-4 pt-3 border-top">
                  <div className="d-inline-flex align-items-center bg-light px-4 py-3 rounded">
                    <div className="cricket-logo me-3">
                      <div className="cricket-ball"></div>
                    </div>
                    <div>
                      <div className="fw-bold text-dark cricket-text">CRICKET</div>
                      <div className="text-warning fw-semibold cricket-text">PAKISTAN</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Custom CSS */}
      <style jsx>{`
        .urdu-text {
          font-family: 'Noto Nastaliq Urdu', 'Traditional Arabic', serif;
          direction: rtl;
          unicode-bidi: embed;
        }
        
        .cricket-logo {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .cricket-ball {
          width: 16px;
          height: 16px;
          background: white;
          border-radius: 50%;
        }
        
        .cricket-text {
          font-size: 11px;
          line-height: 1.2;
          letter-spacing: 0.5px;
        }
        
        .nav-hover {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: all 0.3s ease;
          border-bottom: 2px solid transparent;
        }
        
        .nav-hover:hover {
          color: #dc3545 !important;
          border-bottom: 2px solid #dc3545;
        }
        
        .mobile-nav-hover {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }
        
        .mobile-nav-hover:hover {
          color: #dc3545 !important;
          background-color: #f8f9fa;
        }
        
        .live-dot {
          width: 8px;
          height: 8px;
          background: #dc3545;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(220, 53, 69, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(220, 53, 69, 0);
          }
        }
        
        .nav-link {
          padding: 0.5rem 1rem !important;
        }
        
        @media (max-width: 767px) {
          .urdu-text {
            font-size: 1.5rem;
          }
        }
      `}</style>

      {/* Bootstrap JS CDN */}
      <script 
        src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"
      ></script>
    </>
  );
};

export default Header;