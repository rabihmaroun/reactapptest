import React, { useState } from 'react';
import Button from '../../components/ui/button'
import XboxIMG from '../../assets/package_xbox.png';
import './packagedetails.css';
import AlertIMG from '../../assets/alert.png';
import CheckBoxIMG from '../../assets/checkbox.svg';
import copyIMG from '../../assets/copy.svg';


function Packagedetails() {
    
  const [showPopup, setShowPopup] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText('12345678912345');
    alert('Link copied to clipboard!');
  };

  return (
    <div className="package__details">
      <div className="content">
        <h1 className='medium-font'>Xbox Live US $5</h1>
        <img className="main__image" src={XboxIMG} alt="" />
        <p className="note">
          <img className="alert__image" src={AlertIMG} alt="" />{' '}
          <span className='regular-font'>Only payments in USD are accepted.</span>
        </p>
        <div className="amount_to_pay">
          <p className="mb-0 medium-font">Total amount to pay</p>
          <p className="mb-0 amount bold-font">$ 4.525</p>
        </div>
      </div>

      <Button text='Pay now' onClickFunction={() => setShowPopup(true)} />

        <div className={`drop__layer ${showPopup ? 'active' : ''}`} onClick={() => setShowPopup(false)}></div>
        <div className={`popup text-center ${showPopup ? 'active' : ''}`}>
            <img className='checkboxImg' src={CheckBoxIMG} alt="" />
            <h3 className='text-center my-3 bold-font'>Payment Successful</h3>
            <h6 className='border-bottom pb-3 medium-font'>You have successfully purchased the Xbox Live US $5 for amount</h6>
            <div className='use__code text-start mt-3 medium-font'>
                <p>To use your voucher: </p>
                <p>Copy the code below</p>
            </div>
            <div className="code__box mt-2">
                <p className="code mb-0 semibold-font">12354678912345</p>
                <img className='copyLink' onClick={handleCopyLink} src={copyIMG} alt="" />
            </div>
            <a href='#' className='cancelBtn medium-font' onClick={() => setShowPopup(false)}>Cancel</a>
            <Button text='Share Code' onClickFunction={() => setShowPopup(false)} />
        </div>
    </div>
  );
}

export default Packagedetails;
