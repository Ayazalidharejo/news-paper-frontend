// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import image from "../20250701-NP_LHE-Front_Page_1.jpg"

// const UrduNewspaper = () => {
//   return (
//     <div className="container-fluid p-0" style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', backgroundColor: 'white' }}>
//       {/* Top Red Header */}
//       <div className="bg-danger text-white py-1 px-2">
//         <div className="row align-items-center">
//           <div className="col-2">
//             <small>ایکسپریس</small>
//           </div>
//           <div className="col-8 text-center">
//             <small>ڈیلی ایکسپریس قیمت</small>
//           </div>
//           <div className="col-2 text-end">
//             <small>Daily Express</small>
//           </div>
//         </div>
//       </div>

//       {/* Top News Strip with Images */}
//       <div className="bg-light border-bottom py-2">
//         <div className="row ">
//           <div className="col-md-2 px-2">
//             <img src="https://picsum.photos/120/80?random=1" alt="Money News" className="img-fluid rounded mb-1" />
//             <small className="d-block text-end">پے آف ٹی ایسکیم میں ایمیجنگ کیپیٹل بھی شامل، تفصیلات زر میں 100 فیصد اضافہ...</small>
//           </div>
//           <div className="col-md-2 px-2">
//             <img src="https://picsum.photos/120/80?random=2" alt="Gold News" className="img-fluid rounded mb-1" />
//             <small className="d-block text-end">سونا خریدنا ہوا پن سے کئی گنا، قیمت میں عالمی اور مقامی سطح پر اضافہ...</small>
//           </div>
//           <div className="col-md-2 px-2">
//             <img src="https://picsum.photos/120/80?random=3" alt="Celebrity News" className="img-fluid rounded mb-1" />
//             <small className="d-block text-end">شہباز گل کے آخری لمحات میں کیا موانا اپنی فیڈرنگ کی دوسرے کی بیان آگئی...</small>
//           </div>
//           <div className="col-md-2 px-2">
//             <img src="https://picsum.photos/120/80?random=4" alt="Political News" className="img-fluid rounded mb-1" />
//             <small className="d-block text-end">شاہ محمود قریشی پی ٹی آئی کے اسیر رہنمائوں کا قیادت کا حکومت سے مطالبات کا ہونا...</small>
//           </div>
//           <div className="col-md-2 px-2">
//             <img src="https://picsum.photos/120/80?random=5" alt="Office News" className="img-fluid rounded mb-1" />
//             <small className="d-block text-end">اسلام آباد: منعقدہ اور تجزیہ کار سردار فیصل کے منق نام جو، دو مہینے گذارے...</small>
//           </div>
//         </div>
// <div className='d-flex justify-content-center w-100' >
//   <img  src={image} alt="g5g" />
// </div>


//       </div>

     

     

   
//     </div>
//   );
// };

// export default UrduNewspaper;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../20250701-NP_LHE-Front_Page_1.jpg";
import image1 from "../one.jpg";
import image2 from "../two.jpg";
import image3 from "../three.png";
import image4 from "../four.jpg";
import image5 from "../five.jpg";

const newsImages = [image1, image2, image3, image4, image5];

const UrduNewspaper = () => {
  return (
    <div 
      className="container p-0"
      style={{
        fontFamily: 'Arial, sans-serif',
        direction: 'rtl',
        backgroundColor: 'white',
        width:"100%"
      }}
    >
      {/* Top Red Header
      <div className="bg-danger text-white py-2 px-3">
        <div className="row align-items-center">
          <div className="col-2">
            <small>ایکسپریس</small>
          </div>
          <div className="col-8 text-center">
            <small>ڈیلی ایکسپریس قیمت</small>
          </div>
          <div className="col-2 text-start">
            <small>Daily Express</small>
          </div>
        </div>
      </div> */}

      {/* Top News Strip with Local Images */}
      <div className="bg-light border-bottom py-3 px-2">
        <div className="row g-3 justify-content-center">
          {newsImages.map((imgSrc, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-2">
              <img style={{width:"250px" ,height:"200px"}}
                src={imgSrc}
                alt={`خبر نمبر ${index + 1}`}
                className="img-fluid rounded mb-1"
              />
              <small className="d-block text-end">
                یہ ایک ڈمی خبر ہے، مکمل تفصیل اخبار میں پڑھیں...
              </small>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Newspaper Image */}
      <div className=" px-2 text-center">
        <img
          src={image}
          alt="Front Page"
          className="img-fluid  rounded "
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default UrduNewspaper;
