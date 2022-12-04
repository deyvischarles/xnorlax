import React, { useState } from 'react'
import StyleTextField from '../../styles/TextField'

interface ITextField {
    id: string,
    type: string,
    label: string,
    placeholder?: string,
    defaultValue?: string,
    variant?: string,
    disabled?: boolean,
    required?: boolean,
    pattern?: string,
    helpText?: string,
    className?: string
}

const TextField: React.FC<ITextField> = (props) => {

    const [value, setValue] = useState((props.defaultValue ?? ''))
    
    return (
        <StyleTextField variant={props.variant} disabled={props.disabled} className={props.className} >
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                defaultValue={value}
                onChange={(event) => setValue(event.target.value)}
                required={props.required}
                className={(value.length > 0) ? 'used': undefined}
            />
            <label htmlFor={props.id}>{props.label}</label>
            <span className="bar" />
            <p className="helpText">{props.helpText}</p>
        </StyleTextField>
    )
}

export default TextField