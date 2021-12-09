import styled, { ThemeProvider, css } from "styled-components";

interface Ibutton {
    variant?: 'contained' | 'outlined';
    color?: string;
    className?: string;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = styled.button<Ibutton>`
    position: relative;
    z-index: 1;
    display: inline-block;
    border: none;
    border-radius: 20px;
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    // Gets rid of tap active state
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    outline: 0;
    box-shadow: none;
    background-color: transparent;
    color: ${props => props.theme.colors.primaryText};
    overflow: hidden;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        background-color: ${props => props.theme.colors.hovered};
    }

    .ripple {
        position: absolute;
        background: ${props => props.theme.colors.waves};
        padding: 60%;
        pointer-events: none;
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: rippleAnimation 550ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    @keyframes rippleAnimation {
        0% {
            transform: translate(-50%, -50%) scale(0);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1);
        }
    }

    ${props => props.color === "primary" && css`
        color: ${props => props.theme.colors.primaryColor};

        i {
            color: ${props => props.theme.colors.primaryColor};
        }

        &:hover {
            background-color: ${props => props.theme.colors.hoveredPrimary};
        }

        .ripple {
            background: ${props => props.theme.colors.wavesOnPrimary};
        }
    `}

    ${props => props.color === "secondary" && css`
        color: ${props => props.theme.colors.secondaryColor};

        i {
            color: ${props => props.theme.colors.secondaryColor};
        }

        &:hover {
            background-color: ${props => props.theme.colors.hoveredSecondary};
        }

        .ripple {
            background: ${props => props.theme.colors.wavesOnSecondary};
        }
    `}

    ${props => props.disabled && css`
        background-color: transparent !important;
        color: ${props => props.theme.colors.disabledText};
        cursor: default;
        pointer-events: none;

        i {
            color: ${props => props.theme.colors.disabledText} !important;
        }
    `}

    i {
        line-height: inherit;
    }

    ${props => props.variant === "contained" && css`
        color: rgba(0, 0, 0, .87);
        background-color: #e0e0e0;
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);

        &:hover {
            box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
            background-color: #d5d5d5;
        }

        &:active {
            background-color: #d5d5d5;
        }

        &:focus {
            background-color: #d5d5d5;
        }

        .ripple {
            background: ${props => props.theme.colors.wavesOnRaised};
        }

        ${props.color === "primary" && css`
            color: ${props => props.theme.colors.primaryColorContrast};
            background-color: ${props => props.theme.colors.primaryColor};

            i {
                color: ${props => props.theme.colors.primaryColorContrast};
            }

            &:hover {
                background-color: ${props => props.theme.colors.primaryColor};
            }

            &:active {
                background-color: ${props => props.theme.colors.primaryColor};
            }

            &:focus {
                background-color: ${props => props.theme.colors.primaryColor};
            }

            .ripple {
                background: ${props => props.theme.colors.wavesOnRaisedPrimary};
            }
        `}

        ${props.color === "secondary" && css`
            color: ${props => props.theme.colors.secondaryColorContrast};
            background-color: ${props => props.theme.colors.secondaryColor};

            i {
                color: ${props => props.theme.colors.secondaryColorContrast};
            }

            &:hover {
                background-color: ${props => props.theme.colors.secondaryColor};
            }

            &:active {
                background-color: ${props => props.theme.colors.secondaryColor};
            }

            &:focus {
                background-color: ${props => props.theme.colors.secondaryColor};
            }

            .ripple {
                background: ${props => props.theme.colors.wavesOnRaisedSecondary};
            }
        `}

        ${props.disabled && css`
            background-color: ${props => props.theme.colors.divider} !important;
            color: ${props => props.theme.colors.disabledText};
            box-shadow: none;

            i {
                color: ${props => props.theme.colors.disabledText} !important;
            }
        `}
    `}

    ${props => props.variant === "outlined" && css`
        color: ${props => props.theme.colors.primaryText};
        border: 1px solid ${props => props.theme.colors.btnOutlined};

        i {
            color: ${props => props.theme.colors.primaryText};
        }

        &:hover {
            background-color: ${props => props.theme.colors.hovered};
        }

        ${props.color === "primary" && css`
            color: ${props => props.theme.colors.primaryColor};
            border: 1px solid ${props => props.theme.colors.btnOutlinedPrimary};

            i {
                color: ${props => props.theme.colors.primaryColor};
            }

            &:hover {
                border: 1px solid ${props => props.theme.colors.primaryColor};
                background-color: ${props => props.theme.colors.hoveredPrimary};
            }

            .ripple {
                background: ${props => props.theme.colors.wavesOnPrimary};
            }
        `}

        ${props.color === "secondary" && css`
            color: ${props => props.theme.colors.secondaryColor};
            border: 1px solid ${props => props.theme.colors.btnOutlinedSecondary};

            i {
                color: ${props => props.theme.colors.secondaryColor};
            }

            &:hover {
                border: 1px solid ${props => props.theme.colors.secondaryColor};
                background-color: ${props => props.theme.colors.hoveredSecondary};
            }

            .ripple {
                background: ${props => props.theme.colors.wavesOnSecondary};
            }
        `}

        ${props.disabled && css`
            color: ${props => props.theme.colors.onBtnOutlinedDisabled};
            border: 1px solid ${props => props.theme.colors.divider};

            i {
                color: ${props => props.theme.colors.onBtnOutlinedDisabled} !important;
            }
        `}
    `}
`

export default Button