import React from 'react'
import ButtonStyle from '../../styles/Button'

interface IButtons {
    variant?: 'contained' | 'outlined';
    color?: string;
    className?: string;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IButtons> = ({ variant, color, className, disabled, onClick, children }) => {
    const rippleEffect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const button = event.target as HTMLButtonElement
        let ripple = document.createElement('span')

        ripple.classList.add('ripple')
        button.insertAdjacentElement('beforeend', ripple)
        
        const position = button.getBoundingClientRect()
        const top = Math.abs(event.clientY - position.top)
        const left = Math.abs(event.clientX - position.left)

        ripple.style.setProperty('top', `${top}px`)
        ripple.style.setProperty('left', `${left}px`)

        setTimeout(() => {
            ripple.remove()
        }, 1000)
    }

    return (
        <ButtonStyle 
            onMouseDown={rippleEffect}
            onClick={onClick}
            variant={variant}
            color={color}
            className={className}
            disabled={disabled}>
                {children}
        </ButtonStyle>
    )
}

export default Button