import React, { useState, useEffect, useRef } from 'react';

const NewspaperFooter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [visiblePages, setVisiblePages] = useState(4);

  const newspaperPages = [
    { title: 'DAILY NEWS', type: 'news' },
    { title: 'SPORTS', type: 'sports' },
    { title: 'BUSINESS', type: 'business' },
    { title: 'WEATHER', type: 'weather' },
    { title: 'اردو نیوز', type: 'urdu' },
    { title: 'TECH NEWS', type: 'tech' },
    { title: 'CLASSIFIEDS', type: 'classifieds' },
    { title: 'DAILY NEWS', type: 'news' },
    { title: 'SPORTS', type: 'sports' },
    { title: 'BUSINESS', type: 'business' },
    { title: 'WEATHER', type: 'weather' },
    { title: 'اردو نیوز', type: 'urdu' },
    { title: 'TECH NEWS', type: 'tech' },
    { title: 'CLASSIFIEDS', type: 'classifieds' }
  ];

  const pageWidth = 135; // 120px width + 15px gap

  useEffect(() => {
    const updateVisiblePages = () => {
      if (sliderRef.current) {
        const containerWidth = sliderRef.current.offsetWidth;
        const newVisiblePages = Math.floor(containerWidth / pageWidth);
        setVisiblePages(newVisiblePages);
        
        if (currentSlide >= newspaperPages.length - newVisiblePages) {
          setCurrentSlide(Math.max(0, newspaperPages.length - newVisiblePages));
        }
      }
    };

    updateVisiblePages();
    window.addEventListener('resize', updateVisiblePages);
    
    return () => window.removeEventListener('resize', updateVisiblePages);
  }, [currentSlide, newspaperPages.length]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide(prev => {
        if (prev < newspaperPages.length - visiblePages) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }, 4500);

    return () => clearInterval(autoSlide);
  }, [visiblePages, newspaperPages.length]);

  const slideLeft = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const slideRight = () => {
    if (currentSlide < newspaperPages.length - visiblePages) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const renderPageContent = (page) => {
    const baseLines = (
      <div className="d-flex gap-1 mt-2">
        <div className="flex-fill">
          <div style={{ height: '8px', backgroundColor: '#000', margin: '2px 0' }}></div>
          <div style={{ height: '2px', backgroundColor: '#666', margin: '1px 0' }}></div>
          <div style={{ height: '2px', backgroundColor: '#666', margin: '1px 0' }}></div>
          <div style={{ height: '2px', backgroundColor: '#666', margin: '1px 0' }}></div>
          <div style={{ height: '4px', backgroundColor: '#000', margin: '2px 0' }}></div>
          <div style={{ height: '2px', backgroundColor: '#666', margin: '1px 0' }}></div>
        </div>
        <div className="flex-fill">
          <div style={{ height: '6px', backgroundColor: '#000', margin: '2px 0' }}></div>
          <div style={{ height: '2px', backgroundColor: '#666', margin: '1px 0' }}></div>
          <div style={{ height: '2px', backgroundColor: '#666', margin: '1px 0' }}></div>
          <div style={{ height: '4px', backgroundColor: '#000', margin: '2px 0' }}></div>
          <div style={{ height: '2px', backgroundColor: '#666', margin: '1px 0' }}></div>
        </div>
      </div>
    );

    switch (page.type) {
      case 'sports':
        return (
          <>
            <div style={{ height: '30px', backgroundColor: '#ddd', margin: '4px 0' }}></div>
            {baseLines}
          </>
        );
      case 'weather':
        return (
          <>
            <div style={{ 
              height: '25px', 
              backgroundColor: '#eee', 
              margin: '4px 0',
              fontSize: '10px',
              lineHeight: '25px',
              textAlign: 'center'
            }}>
              ☀️ 25°C
            </div>
            {baseLines}
          </>
        );
      default:
        return baseLines;
    }
  };

  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <style jsx>{`
        .newspaper-slider {
          background: linear-gradient(135deg, #e8e8e8, #d5d5d5);
          padding: 25px;
          position: relative;
          overflow: hidden;
        }

        .newspaper-slider::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="%23000" opacity="0.03"/><circle cx="80" cy="40" r="1" fill="%23000" opacity="0.02"/><circle cx="40" cy="80" r="1" fill="%23000" opacity="0.03"/><circle cx="60" cy="20" r="1" fill="%23000" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          pointer-events: none;
        }

        .nav-btn {
          background: linear-gradient(145deg, #d63638, #a02520);
          color: white;
          border: none;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          box-shadow: 0 6px 20px rgba(196,48,43,0.3), 0 2px 6px rgba(196,48,43,0.2);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .nav-btn:hover {
          background: linear-gradient(145deg, #e04547, #b82b26);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 10px 30px rgba(196,48,43,0.4), 0 4px 12px rgba(196,48,43,0.3);
        }

        .nav-btn:active {
          transform: translateY(-50%) scale(0.95);
        }

        .nav-btn.prev {
          left: 10px;
        }

        .nav-btn.next {
          right: 10px;
        }

        .newspaper-pages {
          display: flex;
          gap: 15px;
          min-width: max-content;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateX(${-currentSlide * pageWidth}px);
        }

        .newspaper-page {
          width: 120px;
          height: 160px;
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1);
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform: translateY(0);
        }

        .newspaper-page:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 15px 35px rgba(0,0,0,0.2), 0 8px 15px rgba(0,0,0,0.15);
          border-color: #c4302b;
        }

        .newspaper-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(196,48,43,0.05) 0%, rgba(196,48,43,0.02) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .newspaper-page:hover::before {
          opacity: 1;
        }

        .page-content {
          padding: 8px;
          font-size: 8px;
          line-height: 1.2;
          color: #333;
        }

        .page-header {
          border-bottom: 1px solid #000;
          margin-bottom: 4px;
          padding-bottom: 2px;
          font-weight: bold;
        }

        .footer-custom {
          background-color: #5a5a5a;
          color: white;
          padding: 15px 20px;
        }

        .footer-logo {
          width: 50px;
          height: 50px;
          background-color: #666;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
        }

        .footer-text {
          font-size: 12px;
          line-height: 1.3;
        }

        .footer-link {
          color: white;
          text-decoration: none;
          font-size: 14px;
          padding: 5px 10px;
          border-radius: 3px;
          transition: background-color 0.3s ease;
        }

        .footer-link:hover {
          background-color: rgba(255,255,255,0.1);
          color: white;
        }

        .urdu-text {
          font-size: 16px;
          font-weight: bold;
          color: white;
          text-align: right;
          direction: rtl;
        }

        .social-icon {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .social-icon:hover {
          transform: scale(1.1);
          color: white;
        }

        .social-icon.twitter {
          background-color: #1DA1F2;
        }

        .social-icon.facebook {
          background-color: #3B5998;
        }

        .social-icon.youtube {
          background-color: #FF0000;
        }

        @media (max-width: 768px) {
          .newspaper-page {
            width: 100px;
            height: 130px;
          }

          .nav-btn {
            width: 35px;
            height: 35px;
            font-size: 16px;
          }

          .footer-text {
            font-size: 11px;
          }

          .footer-link {
            font-size: 12px;
            padding: 3px 8px;
          }

          .urdu-text {
            font-size: 14px;
            text-align: center;
          }

          .social-icon {
            width: 30px;
            height: 30px;
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .newspaper-page {
            width: 80px;
            height: 110px;
          }
        }
      `}</style>

      <div style={{width:"1050px"}} className="container px-5 p-0">
        {/* Newspaper Slider Section */}
        <div className="newspaper-slider">
          <button className="nav-btn prev" onClick={slideLeft}>
            ❮
          </button>
          <div className="slider-container px-5" ref={sliderRef}>
            <div className="newspaper-pages">
              {newspaperPages.map((page, index) => (
                <div key={index} className="newspaper-page">
                  <div className="page-content">
                    <div className="page-header">{page.title}</div>
                    {renderPageContent(page)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="nav-btn next" onClick={slideRight}>
            ❯
          </button>
        </div>

        {/* Footer Section */}
        <div className="footer-custom">
          <div className="container-fluid">
            <div className="row align-items-center g-3">
              {/* Footer Left */}
              <div className="col-lg-4 col-md-6">
                <div className="d-flex align-items-center flex-column flex-md-row gap-3">
                  <div className="footer-logo">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                      <rect width="50" height="50" fill="#666" rx="4"/>
                      <path d="M10 10H15V15H10V10Z" fill="white"/>
                      <path d="M20 10H35V12H20V10Z" fill="white"/>
                      <path d="M20 14H30V16H20V14Z" fill="white"/>
                      <path d="M10 20H35V22H10V20Z" fill="white"/>
                      <path d="M10 24H30V26H10V24Z" fill="white"/>
                      <path d="M10 28H35V30H10V28Z" fill="white"/>
                      <path d="M10 32H25V34H10V32Z" fill="white"/>
                      <path d="M10 36H35V38H10V36Z" fill="white"/>
                      <path d="M10 40H28V42H10V40Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="footer-text text-center text-md-start">
                    Copyright © Century Publications.<br/>
                    This material may not be<br/>
                    published, broadcast, rewritten,<br/>
                    redistributed or derived from.
                  </div>
                </div>
              </div>

              {/* Footer Center */}
              <div className="col-lg-4 col-md-6">
                <div className="d-flex flex-column align-items-center gap-3">
                  <div className="d-flex gap-3 flex-wrap justify-content-center">
                    <a href="#" className="footer-link">Tariff</a>
                    <a href="#" className="footer-link">Feedback</a>
                    <a href="#" className="footer-link">Wallpapers</a>
                  </div>
                  <div className="urdu-text">
                    آپ کو کیسے لگے ہماری خبریں اور تجزیے
                  </div>
                </div>
              </div>

              {/* Footer Right */}
              <div className="col-lg-4 col-md-12">
                <div className="d-flex justify-content-center justify-content-lg-end">
                  <div className="d-flex gap-2">
                    <a href="#" className="social-icon twitter">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-icon facebook">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-icon youtube">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewspaperFooter;