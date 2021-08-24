import React from 'react'

interface IButtons {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    variant?: string;
    color?: string;
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<IButtons> = ({ onClick, children }) => {
    return (
        <Button onClick={onClick}>{children}</Button>
    )
}

export default Button