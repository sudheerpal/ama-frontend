import Image from "next/image";
import React from "react";
import userAvatar from "@/assets/contact/user/user1.png";

const TestimonialCard = ({ testimonial }) => {
  const { name, occupation, testimonial: testimonialText, image } = testimonial;

  return (
    <div className="grid max-w-lg grid-cols-2 gap-4 mx-2">
      <div className="pt-1 rounded-full">
        <Image
          className="rounded-full"
          src={image || userAvatar}
          width={500}
          height={500}
          alt={`Testimonial image of ${name}`}
        />
      </div>
      <div className="flex flex-col justify-center text-left">
        <h2 className="mb-2 text-xl font-bold leading-none text-primary">
          {name}
        </h2>
        <h4 className="text-sm font-bold text-neutral">{occupation}</h4>
        <p className="mt-3 text-sm text-black">{testimonialText}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
