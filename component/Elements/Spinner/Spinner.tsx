import React from 'react'
import { SpinnerContainer } from './spinner.style';

const sizes = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'h-24 w-24',
};
  
const variants = {
    light: 'light',
    primary: 'primary',
    dark: 'dark'
};

type SpinnerProps = {
    size: keyof typeof sizes
    variant: keyof typeof variants
}

export const Spinner = (
    { 
        size = 'md', 
        variant = 'primary', 
    }: SpinnerProps) => {
  return (
    <SpinnerContainer className={`${size} ${variant}`}/>
  )
}
