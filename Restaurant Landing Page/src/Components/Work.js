import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Browse through a wide variety of restaurants and cuisines to find your favorite dishes. Add them to your cart with just a few clicks",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Decide how frequently you want your meals delivered. Whether it's a one-time order or a regular delivery schedule, we've got you covered.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Our efficient delivery system ensures your meals are delivered fresh and fast. Track your order in real-time and enjoy your food without any hassle",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <h2 className="primary-text">Simple, Fast, and Reliable</h2>
        <p className="primary-text">
        Ordering your favorite meals through Foodie is as easy as 1-2-3. Follow these simple steps to enjoy delicious food delivered to your door.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
