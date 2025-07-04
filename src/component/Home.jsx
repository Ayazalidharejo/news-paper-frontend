import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hamara from "../hamara.png";
import SundayMagazine from "../sindhi.jpg"

const cityData = [
  { name: 'لاہور', img: Hamara, link: '/lahore' },
  { name: 'کراچی', img: Hamara, link: '/karachi' },
  { name: 'اسلام آباد', img: Hamara, link: '/islamabad' },
  { name: 'فیصل آباد', img: Hamara, link: '/faisalabad' },
  { name: 'گوجرانوالہ', img: Hamara, link: '/gujranwala' },
  { name: 'ملتان', img: Hamara, link: '/multan' },
  { name: 'پشاور', img: Hamara, link: '/peshawar' },
  { name: 'رحیم یار خان', img: Hamara, link: '/rahimyar' },
  { name: 'سرگودھا', img: Hamara, link: '/sargodha' },
  { name: 'سکھر', img: Hamara, link: '/sukkur' },
  { name: 'کوئٹہ', img: Hamara, link: '/quetta' },
];


const NewspaperSection = () => {
  return (
    <div style={{width:"1000px"}} className="container text-center my-5">
      <h1 className="mb-4" style={{ fontFamily: 'Noto Nastaliq Urdu' }}>  ہماراسماج    </h1>
      <div className="row justify-content-center">
       {cityData.map((city, index) => (
  <div className="col-6 col-sm-4 col-md-3 mb-4" key={index}>
    <a href={city.link}>
      <img src={city.img} className="img-fluid border" alt={city.name} />
    </a>
    <h2 className="mt-2" style={{ fontFamily: 'Noto Nastaliq Urdu' }}>{city.name}</h2>
  </div>
))}

        {/* Sunday Magazine */}
        <div className="col-6 col-sm-4 col-md-3 mb-4">
        <a href="/sindhi">  <img style={{height:"230px",width:"300px"}} src={SundayMagazine} className="img-fluid border" alt="سنڈے میگزین" />
</a>          <h2 className="mt-2" style={{ fontFamily: 'Noto Nastaliq Urdu' }}>سنڈے میگزین</h2>
        </div>
      </div>
    </div>
  );
};

export default NewspaperSection;
