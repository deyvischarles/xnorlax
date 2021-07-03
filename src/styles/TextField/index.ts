import styled, {css} from 'styled-components'

interface ITextField {
    variant?: string,
    disabled?: boolean
}

const TextField = styled.div<ITextField>`
    display: flex;
    position: relative;

    input {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        border: none;
        border-bottom: 1px solid ${props => props.theme.colors.secondaryText};
        border-radius: 4px 4px 0 0;
        background-color: ${props => props.theme.colors.box};
        margin-bottom: 16px;
        padding: 24px 12px 8px 16px;
        font-size: 16px;
        color: ${props => props.theme.colors.primaryText};
        outline: none;
        transition: background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;

        :hover {
            background-color: ${props => props.theme.colors.boxHovered};
            border-bottom: 1px solid ${props => props.theme.colors.primaryText};
        }

        :focus {
            background-color: ${props => props.theme.colors.boxFocused};
        }

        :focus ~ span:before,
        :focus ~ span:after {
            width: 50%;
        }
    }

    label {
        font-size: 16px;
        color: ${props => props.theme.colors.secondaryText};
        position: absolute;
        padding: 0 6px;
        z-index: 1;
        transform: translate(9px, 16px) scale(1);
        user-select: none;
        pointer-events: none;
        transition: all 200ms cubic-bezier(.4, 0, .2, 1);
    }

    input:valid + label,
    input:focus + label {
        color: ${props => props.theme.colors.primaryColor};
        transform: translate(5px, 4px) scale(0.75);
    }

    span:before, span:after {
        content: "";
        position: absolute;
        bottom: 16px;
        width: 0;
        height: 2px;
        background-color: ${props => props.theme.colors.primaryColor};
        transition: all 200ms cubic-bezier(.4, 0, .2, 1);
    }

    span:before { left: 50%; }
    span:after { right: 50%; }

    ${props => props.disabled && css`
        input {
            pointer-events: none;
            color: ${props => props.theme.colors.disabledText};
            border-bottom: 1px dotted ${props => props.theme.colors.disabledText};
        }

        label {
            color: ${props => props.theme.colors.disabledText};
        }
    `}

    ${props => props.variant === "outlined" && css`
        input {
            border: 1px solid ${props => props.theme.colors.secondaryText};
            border-radius: 4px;
            background-color: transparent;
            padding: 16px 12px 16px 16px;

            :hover {
                border: 1px solid ${props => props.theme.colors.primaryText};
                background-color: transparent;
            }

            :focus {
                padding: 15px 11px 15px 15px;
                background-color: transparent;
                border: 2px solid ${props => props.theme.colors.primaryColor};
            }

            :focus ~ span:before,
            :focus ~ span:after {
                width: 0%;
            }
        }

        input:valid + label,
        input:focus + label {
            background-color: ${props => props.theme.colors.background};
            transform: translate(5px, -10px) scale(0.75);
        }

        ${props.disabled && css`
            input {
                border: 1px solid ${props => props.theme.colors.disabledText};
            }
        `}
    `}

    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill
    {
        &, &:hover, &:focus, &:active
        {
            transition-delay: 3600s;
            -webkit-text-fill-color: ${props => props.theme.colors.primaryText};
        }
    }
`

export default TextField