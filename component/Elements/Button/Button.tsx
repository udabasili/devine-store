import React from 'react'
import { Spinner } from '../Spinner/Spinner';
import { ButtonComponent } from './button.style';
const variant = {
    primary: 'primary',
    inverse: 'danger',
    success: 'success',
    dark: 'dark',
    danger: 'danger'
}

const sizes = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
};

type IconProps = |
    {
        startIcon?: undefined, endIcon?: undefined
    } |
    {
        startIcon: React.ReactElement, endIcon?: never
    } |
    {
        startIcon?: never, endIcon:  React.ReactElement
    }

type ButtonProps = {
    variant:  keyof typeof variant
    size: keyof typeof sizes
    isLoading?: boolean
    disabled?: boolean
    type: 'button' | 'submit'
    onClickHandler?: (e: any) => void
    children: React.ReactNode
} & IconProps

const Button = ({
    variant,
    size,
    isLoading,
    startIcon,
    type,
    endIcon,
    onClickHandler,
    children,
    disabled
}: ButtonProps) => {
  return (
    <ButtonComponent 
        className={`${variant} ${size}`} 
        type={type}
        disabled={disabled}
        onClick={onClickHandler}>
            {isLoading && <Spinner size="sm" variant="dark" />}
            {!isLoading && startIcon}
            <span className="mx-2">{children}</span> {!isLoading && endIcon}
    </ButtonComponent>
  )
}

export default Button