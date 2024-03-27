import Image from "next/image";
import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { name, occupation, testimonial: testimonialText, image } = testimonial;

  return (
    <div className="grid max-w-lg grid-cols-2 gap-4 mx-2">
      <div className="pt-1">
        <Image
          src={image}
          width={500}
          height={500}
          alt={`Testimonial image of ${name}`}
        />
      </div>
      <div className="flex flex-col text-left">
        <h2 className="text-xl font-bold leading-none md:text-2xl text-primary">
          {name}
        </h2>
        <h4 className="text-lg font-bold text-gray-500">{occupation}</h4>
        <p className="mt-3 text-sm font-light">{testimonialText}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
