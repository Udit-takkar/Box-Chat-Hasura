import React from "react";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <span className="font-bold text-gray-200 font-sans font-light tracking-wide text-lg ml-3">
      {title}
    </span>
  );
};

export default Heading;
