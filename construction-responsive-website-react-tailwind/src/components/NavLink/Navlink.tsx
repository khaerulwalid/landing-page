import React from "react";

const Navlink = ({
  href,
  children,
  isButton,
}: {
  href: string;
  children: React.ReactNode;
  isButton?: boolean;
}) => {
  const baseClasses: string =
    "text-text-color-light font-semibold transition-colors duration-500 hover:text-first-color";

  const buttonClasses: string =
    "inline-flex bg-first-gradient text-white font-semibold py-4 px-4 transition-shadow hover:text-white hover:shadow-[0_8px_32px_rgba(255,111,60,0.3)] duration-300";
  return (
    <a href={href} className={`${baseClasses} ${isButton && buttonClasses}`}>
      {children}
    </a>
  );
};

export default Navlink;
