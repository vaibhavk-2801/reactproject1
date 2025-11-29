import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = (props) => {
  return (
    <div id='Card'> 
      <div className="card">

        <div id="top">
          <img src= {props.img} alt="" />
          <button>
            <h4>Save</h4>
             <span><Bookmark size={15} strokeWidth={2} /></span>
          </button>
        </div>

        <div id="middle">
          <h3>{props.name} <span>{props.date}</span></h3>
          <h2>{props.position}</h2>
          <div className="but">
            <button>{props.type}</button>
            <button>{props.level}</button>
          </div>
        </div>

        <div id="bottom">
          
          <div className="right">
            <h2>{props.price}</h2>
            <h4>{props.location}</h4>
          </div>
          <button>Apply Now</button>
        </div>

      </div>
       
    </div>
  )
}
export default Card