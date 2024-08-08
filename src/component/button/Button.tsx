import React from 'react';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'normal' | 'large';
    width?: string;
    height?: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string
  }
  
  const variantClasses = {
    primary: 'bg-[#CA5C3B] text-[#FFFFFF] py-2 px-8 rounded-[100px]',
    secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
    danger: 'bg-red-500 hover:bg-red-700 text-white',
  };
  
  const sizeClasses = {
    small: 'text-sm',
    normal: 'text-base font-medium',
    large: 'text-lg',
  };
  
  const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'normal', width, height, children, onClick }) => {
    const classes = `rounded ${variantClasses[variant]} ${sizeClasses[size]}`;
    const style = {
      width: width || 'auto',
      height: height || 'auto',
    };
    return (
      <button className={classes} style={style} onClick={onClick}>
        {children}
      </button>
    );
  };

export default Button;
