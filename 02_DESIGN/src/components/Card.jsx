import React from "react";
import Button from "../ui/Button";

function Card({ name, imgUrl }) {
  return (
    <div
      className="max-w-sm bg-white  border border-gray-200 rounded-xl mt-8 
      shadow overflow-hidden transition-shadow"
    >
      <img className="w-full h-48 object-cover" src={imgUrl} alt="My Card" />
      <div className="p-4">
        <h2 className=" text-lg font-semibold text-gray-800">{name}</h2>
        <p className="mt-2 text-gray-600 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Button buttonText="Buy Now" />
      </div>
    </div>
  );
}

export default Card;
