import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading" style={{ textAlign: 'center' }}>What Our Customers Are Saying</h1>
        <h2 className="primary-text">Customer Reviews</h2>
        <p className="primary-text">
        Don't just take our word for it. Hear what our happy customers have to say about their Foodie experience!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "The exclusive offers and discounts are fantastic. I’ve discovered so many new restaurants through Foodie. It's my go-to app for food delivery!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Michael T.</h2>
      </div>
    </div>
  );
};

export default Testimonial;
