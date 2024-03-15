"use client";

import { FC } from "react";
import Logo from "./Logo";
import { FaChevronUp } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className='bg-primary px-20 py-16 grid grid-cols-3 gap-x-24 items-center text-white'>
      <div className='w-[270px] h-[60px] cursor-pointer'>
        <Logo />
      </div>
      <div className='flex justify-center'>kontak@sutterluety.at</div>
      <div
        className='cursor-pointer flex justify-end'
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <FaChevronUp />
      </div>
    </footer>
  );
};

export default Footer;
