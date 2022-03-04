import React from 'react'
import { BadgeContainer } from './badge.style'

const variants = {
    primary: 'primary',
    success: 'success',
    danger: 'danger',
    inverse: 'inverse'
}

type BadgeProps = {
    variant: keyof typeof variants
    children: React.ReactNode
}
const Badge = ({
    variant,
    children
}: BadgeProps) => {
  return (
    <BadgeContainer className={variant} id="badge">
        {children}
    </BadgeContainer>
  )
}


export default Badge