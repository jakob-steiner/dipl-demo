import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className='bg-white font-bold px-8 py-4 text-primary'>
      {children}
    </button>
  );
};

export default Button;
