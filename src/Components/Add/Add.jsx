import React from 'react';
import sports1 from '../../assets/sports1.jpg';
import sports2 from '../../assets/sports2.jpg';
import sports3 from '../../assets/sports3.jpg';
import sneakers1 from '../../assets/sneakers1.jpg';
import sneakers2 from '../../assets/sneakers2.jpg';
import '../Add/Add.css';

function Add() {
  return (
    <div className='add_section'>
        <div className='add_container'>
            <div className="first">
                <p>Be Yourself!</p>
                <hr />
                <img src={sports2} alt="" />
            </div>
            <div className="second hideOnPhone_900">
                <img src={sports3} alt="" />
                <p>This Is The First Day</p>
                <p>Of Your New Life!</p>
                <hr />
            </div>
            <div className="third">
                <p>Just Do It!</p>
                <hr />
                <img src={sports1} alt="" />
            </div>
        </div>
        <div className='new_collection'>
            <div className="left">
                <img src={sneakers2} alt="" />
            </div>
            <div className="middle">
                <p>Winter new arrivals</p>
                <h3>New Season!</h3>
                <h3>New Colection!</h3>
                <button>SHOP NOW</button>
            </div>
            <div className="right hideOnPhone_1050">
                <img src={sneakers1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Add