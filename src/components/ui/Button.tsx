import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none tracking-wide';
  
  const variants = {
    primary: 'bg-orange text-white hover:bg-orange-hover hover:shadow-lg hover:shadow-orange/20 focus-visible:ring-orange',
    secondary: 'bg-navy text-white hover:bg-navy-light hover:shadow-lg hover:shadow-navy/20 focus-visible:ring-navy',
    outline: 'border border-navy/20 text-navy hover:border-navy hover:bg-navy hover:text-white focus-visible:ring-navy',
    ghost: 'hover:bg-navy/5 text-navy focus-visible:ring-navy',
  };

  const sizes = {
    sm: 'h-10 px-6 text-sm',
    md: 'h-12 px-8 text-sm',
    lg: 'h-14 px-10 text-base',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
