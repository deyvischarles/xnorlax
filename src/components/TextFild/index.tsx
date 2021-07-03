import React from 'react'
import StyleTextField from '../../styles/TextField'

interface ITextField {
    id: string,
    type: string,
    label: string,
    variant?: string,
    color?: string
    className?: string,
    disabled?: boolean
}

const TextField: React.FC<ITextField> = (props) => {
    return (
        <StyleTextField {...props}>
            <input id={props.id} type={props.type} required />
            <label htmlFor={props.id}>{props.label}</label>
            <span />
        </StyleTextField>
    )
}

export default TextField