import styled, {css} from 'styled-components'

interface ITextField {
    variant?: string,
    disabled?: boolean
}

const TextField = styled.div<ITextField>`
    display: flex;
    flex-direction: column;
    position: relative;

    input {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        min-width: 280px;
        height: 48px;
        border: none;
        border-bottom: 1px solid ${props => props.theme.colors.secondaryText};
        border-radius: 4px 4px 0 0;
        background-color: ${props => props.theme.colors.box};
        margin-bottom: 16px;
        padding: 24px 12px 8px 16px;
        font-size: 1rem;
        color: ${props => props.theme.colors.primaryText};
        outline: none;
        transition: background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;

        &:hover {
            background-color: ${props => props.theme.colors.boxHovered};
            border-bottom: 1px solid ${props => props.theme.colors.primaryText};
        }

        &:focus {
            background-color: ${props => props.theme.colors.boxFocused};
        }

        &:focus ~ label {
            color: ${props => props.theme.colors.primaryColor};
            transform: translateY(-12px);
            font-size: 0.75rem;
        }

        &.used ~ label {
            transform: translateY(-12px);
            font-size: 0.75rem;
        }

        &:focus ~ .bar:before,
        &:focus ~ .bar:after {
            width: 50%;
        }

        &:required ~ label:after {
            content: " *";
        }

        &:invalid {
            border-bottom: 1px solid ${props => props.theme.colors.errorColor};
        }

        &:invalid ~ label {
            color: ${props => props.theme.colors.errorColor};
        }

        &:invalid ~ .bar:before,
        &:invalid ~ .bar:after {
            background-color: ${props => props.theme.colors.errorColor};
        }

        &:invalid ~ .helpText {
            color: ${props => props.theme.colors.errorColor};
        }
    }

    label {
        font-size: 1rem;
        line-height: 1rem;
        color: ${props => props.theme.colors.secondaryText};
        position: absolute;
        top: calc(50% - 16px);
        left: 16px;
        padding: 0;
        z-index: 1;
        user-select: none;
        pointer-events: none;
        transition: all 200ms cubic-bezier(.4, 0, .2, 1);
    }

    .bar:before, .bar:after {
        content: "";
        position: absolute;
        bottom: 16px;
        width: 0;
        height: 2px;
        background-color: ${props => props.theme.colors.primaryColor};
        transition: all 200ms cubic-bezier(.4, 0, .2, 1);
    }

    .bar:before { left: 50%; }
    .bar:after { right: 50%; }

    .helpText {
        position: absolute;
        top: calc(100% - 10px);
        left: 16px;
        font-size: 0.75rem;
        line-height: 0.75rem;
        color: transparent;
        user-select: none;
        pointer-events: none;
        transition: all 200ms cubic-bezier(.4, 0, .2, 1);
    }

    ${props => props.disabled && css`
        input {
            pointer-events: none;
            color: ${props => props.theme.colors.disabledText} !important;
            border-bottom: 1px dotted ${props => props.theme.colors.disabledText} !important;
        }

        label {
            color: ${props => props.theme.colors.disabledText} !important;
        }
    `}

    ${props => props.variant === "outlined" && css`
        input {
            border: 1px solid ${props => props.theme.colors.secondaryText};
            border-radius: 4px;
            background-color: transparent;
            padding: 16px 12px 16px 16px;

            &:hover {
                border: 1px solid ${props => props.theme.colors.primaryText};
                background-color: transparent;
            }

            &:focus {
                padding: 15px 11px 15px 15px;
                background-color: transparent;
                border: 2px solid ${props => props.theme.colors.primaryColor};
            }

            &:focus ~ label,
            &.used ~ label {
                background-color: ${props => props.theme.colors.background};
                padding: 0 4px;
                transform: translate(-3px, -24px);
            }

            &:invalid {
                border-color: ${props => props.theme.colors.errorColor};
            }
        }

        .bar:before, .bar:after {
            content: none;
        }

        ${props.disabled && css`
            input {
                border: 1px solid ${props => props.theme.colors.disabledText} !important;
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